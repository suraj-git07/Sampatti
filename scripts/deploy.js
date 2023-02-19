// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // accounts
  [owner, goalCreator, validator, vaidator, validator] =
    await hre.ethers.getSigners();

  // Deploy SPTToken
  const sptToken = await hre.ethers.getContractFactory("SPTToken");
  const sptTokenContract = await sptToken.deploy();
  await sptTokenContract.deployed();

  console.log("address of sptToken:", sptTokenContract.address);

  // Deploy Sampatti
  const sampatti = await hre.ethers.getContractFactory("Sampatti");
  const sampattiContract = await sampatti.deploy(
    5,
    20,
    sptTokenContract.address,
    100
  );
  await sampattiContract.deployed();

  console.log("address of Sampatti Contract :", sampattiContract.address);

  // Deploy NFT Mint and mint some nfts

  const nftMint = await hre.ethers.getContractFactory("NFTmint");
  const nftMintContract = await nftMint.deploy();
  await nftMintContract.deployed();
  console.log("address of NFTMint Contract :", nftMintContract.address);

  console.log("Minting NFTs");
  for (let i = 0; i < 3; i++) {
    const transaction = await nftMintContract
      .connect(goalCreator)
      .safeMint(
        `https://ipfs.io/pfs/QmTx6Z41oTduKtLiiGrggnBB73rX31mQApruwqnjc4A7ry/${
          i + 1
        }.json`
      );
    await transaction.wait();
  }

  console.log("NFT Minted");
  console.log("Finished !!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
