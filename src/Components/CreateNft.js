import { React, useState,onChange } from "react";
import "./CSS/modal.css";
import { ImCross } from "react-icons/im";
import "./CSS/createNft.css";
function CreateNft({ toggleCreate, create }) {
  if (create) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [image, setImage] = useState("");


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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
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
