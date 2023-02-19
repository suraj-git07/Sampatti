// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;


import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "contracts/SPTToken.sol";

/** this contract is basically work as a dao here any user are given a right to be a validator, 
          he just have to satake some Sampatti token 
  User can put here to validate his nft only after validation nft is minted
  IF nft request is decided to be rejected all the validators who verified the nft will be slashed(vice -versa)
**/

contract Sampatti is ReentrancyGuard {
    address public owneradd; // add of owner
    address public contAdd; // one who created the contract
    uint256 public chargeFee; // charge pay to raise a verification req
    uint256 public stakeFee; // min charge pay to become a validator
    uint256 public totalStaked = 0; // total staking of the system
    SPTToken public sptToken; // instance of Token
    uint public valueTobuyToken;

    using Counters for Counters.Counter;
    Counters.Counter private reqID; // counter for cases
    
    
    uint256 constant DECIMALS = 18;

    constructor(
        uint256 _fee,
        uint256 _stakeFee,
        SPTToken _token,
        uint _valueOfToken
    ) {
        owneradd = msg.sender;
        contAdd = address(this);
        chargeFee = _fee;
        stakeFee = _stakeFee;
        sptToken = _token;
        valueTobuyToken = _valueOfToken;
    }

    modifier OwnerOnly() {
        require(msg.sender == owneradd, "owner not calling");
        _;
    }

    // Status of verification req filing enum
    enum Status {
        WAITING_FOR_APPROVAL,
        APPROVED,
        REJECTED
    }


    // struct of a verification request
    struct Request {
        uint256 reqID;
        address from;
        string name_req_for_owner;
        string uri; // ipfs uri for papers
        Status status; // status of the case
        address[] voters; // array of voters
        mapping(address => uint) votings; // 0 =>  not votes 1->yes 2->no
        mapping(address => bool) claims; // claims token status
        bool final_decision; // final selected option
        uint256 finalisedAt; // unix time for case end time
        uint256 totalWinningVotes;
        address[] winners;
        address[] losers;
    }

    // struct for a voter for a particular id
    struct Validator {
        address validator;
        bool option;
    }

    mapping(uint256 => Request) public requests; // requests
    mapping(address => bool) public validators; //  is voter
    mapping(address => uint256) public stakeHolders; // how much stake
    mapping(uint256 => Validator[]) public votemap; // reqID ==> array of Validators

    // reqFile event
    event ReqFile(
        address indexed _from,
        string _name,
        string _uri,
        uint256 _reqID
    );

    // buy SPT tokens
    function buyFundToken(uint _amtOftoken) public payable nonReentrant returns(bool){
        require(_amtOftoken>0,"required amount should be positive");
        require(msg.value>= (_amtOftoken*(valueTobuyToken)),"not have enough balance");
        
        sptToken.transferFrom(owneradd, msg.sender, _amtOftoken* (10**DECIMALS));
        uint returnvalue = msg.value - (_amtOftoken* (valueTobuyToken));
        if(returnvalue>0){
            address payable buyer = payable(msg.sender);
            buyer.transfer(returnvalue);
        }
        return true;
    }




     //  propose a request
    function proposeRequest(string memory _uri, string memory _name)
        public
        nonReentrant
    {
        
        //todo take user case fee
        sptToken.transferFrom(msg.sender, owneradd, chargeFee * (10**DECIMALS));
        reqID.increment();
        Request storage currReq = requests[reqID.current()];
        currReq.reqID = reqID.current();
        
        currReq.from = msg.sender;
        currReq.name_req_for_owner = _name;
        currReq.uri = _uri;
        currReq.status = Status.WAITING_FOR_APPROVAL;
        currReq.final_decision = false;
        currReq.finalisedAt = 0; // 0 because it is not started yet
        currReq.totalWinningVotes = 0; // total volume(value) of votes is 0 initially

        emit ReqFile(msg.sender, _name, _uri, reqID.current());
    }


    // function to become a validator
    function stake(uint256 stakeAmt) public {
        require(validators[msg.sender] == false, "already a voter");
        require(stakeAmt >= stakeFee , "staking amt is not enough");
        sptToken.transferFrom(msg.sender, owneradd, stakeAmt*(10**DECIMALS));
        totalStaked = totalStaked + stakeAmt*(10**DECIMALS);
        stakeHolders[msg.sender] = stakeAmt*(10**DECIMALS);
        validators[msg.sender] = true;
    }


    function getStake(address user) public view returns (uint256) {
        return stakeHolders[user];
    }

    // function for voting on a request
    function voting(
        uint256 _reqId,
        bool option
    ) public {
        require(validators[msg.sender] == true, "you are not a voter");
        require(requests[_reqId].votings[msg.sender] == 0, "you already voted");
        Request storage currReq = requests[_reqId];
        require(currReq.status == Status.WAITING_FOR_APPROVAL, "case approved/rejected already");
        require(currReq.finalisedAt < block.timestamp, "case expired");

        if(option == true){
        currReq.votings[msg.sender] = 1;
        }
        else{
            currReq.votings[msg.sender] = 2;
        }
        Validator memory currVote = Validator(
            msg.sender,
            option
        );
        votemap[_reqId].push(currVote);
    
    }


    function endRequest(uint256 _reqId) public {
        require(
            requests[_reqId].finalisedAt <= block.timestamp,
            "voting in progress"
        );
        require(requests[_reqId].status == Status.WAITING_FOR_APPROVAL, "request approved/rejected already");
        uint  yescase = 0;
        uint  nocase = 0;
        bool  result = false;
        
        for (uint256 i = 0; i < votemap[_reqId].length; i++) {
            
            if(votemap[_reqId][i].option==true){
                yescase++;
            }
            else{
                nocase++;
            }
               
        }
        if(yescase>nocase){
            requests[_reqId].status = Status.APPROVED;
            requests[_reqId].totalWinningVotes = yescase;
            requests[_reqId].final_decision = true;
            result = true;
        }
        else{
            requests[_reqId].status = Status.REJECTED;
            requests[_reqId].totalWinningVotes = nocase;
            requests[_reqId].final_decision = false;
            result = false;
        }



        for (uint256 i = 0; i < votemap[_reqId].length; i++) {
            // like asking 0 option == index of max which is also same as the option number
            if (votemap[_reqId][i].option != result) {
                requests[_reqId].losers.push(votemap[_reqId][i].validator);
            }
            else{
                requests[_reqId].winners.push(votemap[_reqId][i].validator);
            }
            
        }
        // Burning tokens
        for (uint256 i = 0; i < requests[_reqId].losers.length; i++) {
            stakeHolders[requests[_reqId].losers[i]] -= ((stakeHolders[requests[_reqId].losers[i]])/ 10);

            sptToken.burnFrom(requests[_reqId].losers[i], ((stakeHolders[requests[_reqId].losers[i]]) / 10));
        }

        requests[_reqId].finalisedAt = block.timestamp;

    }

    function claimStake(uint256 _reqId) public {
        require(requests[_reqId].status != Status.WAITING_FOR_APPROVAL, "request still vaiting for approval");
        require(requests[_reqId].votings[msg.sender] != 0, "you not voted");
        require(requests[_reqId].claims[msg.sender] == false, "already claimed");
        
        uint winnerCount =  requests[_reqId].winners.length;
        
        uint256 claim = (
            chargeFee *
            10**DECIMALS) / winnerCount;

        
             sptToken.transferFrom(owneradd,msg.sender, claim);
             requests[_reqId].claims[msg.sender] = true;
        
    }



    function withdrawStake() public {
        require(validators[msg.sender], "you are not a voter");
        sptToken.transferFrom(owneradd, msg.sender, stakeHolders[msg.sender]);
        stakeHolders[msg.sender] = 0;
        validators[msg.sender] = false;
    }

}
