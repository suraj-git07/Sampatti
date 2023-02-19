import React from "react";
import { ImCross } from "react-icons/im";
import "./CSS/modal.css";
function CreateNft({ toggleCreate, create }) {
  if (create) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div>
      <div className="modal z-2">
        <div onClick={toggleCreate} className="overlay"></div>
        <div className="modal-content">
          <h2>Lorem, ipsum.</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis suscipit officia recusandae, eveniet quaerat assumenda
            id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente
            dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum
            quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora
            vitae enim incidunt porro fuga ea.
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
