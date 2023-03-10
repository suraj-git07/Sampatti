import { React, useState, onChange } from "react";
import "./CSS/modal.css";
import { ImCross } from "react-icons/im";
import "./CSS/createNft.css";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

function CreateNft({ toggleCreate, create }) {
  if (create) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const [name, setName] = useState("");
  const [tokenUri, settokenUri] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [image, setImage] = useState("");

  const PK = "0x905780d6fD6f8C8d878eab6BAdBd43F40A890D9f"; // channel private key
  const Pkey = `0x${PK}`;
  const signer = new ethers.Wallet(Pkey);

  const sendNotification = async () => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 1, // broadcast
        identityType: 2, // direct payload
        notification: {
          title: `NFT Created`,
          body: `An NFT is Created In Space`,
        },
        payload: {
          title: `NFT Created`,
          body: `An NFT is Created In Space`,
          cta: "",
          img: "",
        },
        channel: "eip155:5:0x905780d6fD6f8C8d878eab6BAdBd43F40A890D9f", // your channel address
        env: "staging",
      });

      console.log("API repsonse: ", apiResponse);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const nftrequest = async () => {
    sendNotification();
  };

  return (
    <div>
      <div className="modal ">
        <div onClick={toggleCreate} className="overlay "></div>
        <div className="modal-content7 flex justify-center items-center">
          {/* LEFT */}
          <div className="">
            <div className=" flex items-left text-2xl font-semibold mt-4 ml-6">
              Enter the following Details
            </div>
            <div>
              <form>
                {/* <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                  className="da-input sidebar-blur "
                /> */}
                <input
                  value={tokenUri}
                  onChange={(e) => settokenUri(e.target.value)}
                  placeholder="TokenURI"
                  type="textarea"
                  name="address"
                  required
                  className="da-input sidebar-blur"
                />
                {/* <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  type="text"
                  name="description"
                  required
                  className="da-input sidebar-blur"
                /> */}
                <input
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder="Owner"
                  type="text"
                  name="owner"
                  required
                  className="da-input sidebar-blur"
                />
                {/* <input
                  type="url"
                  placeholder="Upload Images Link"
                  // multiple
                  name="image"
                  required
                  className="da-input sidebar-blur"
                /> */}
                <button
                  type="submit"
                  className=" px-8 py-2 font-bold rounded-md text-lg shadow-md shadow-white mt-8 cursor-pointer"
                  onClick={nftrequest}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <button className="close-modal" onClick={toggleCreate}>
          <ImCross />
        </button>
      </div>
    </div>
  );
}
export default CreateNft;
