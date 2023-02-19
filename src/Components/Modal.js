import { React, useState } from "react";
import Player1 from "./Livepeer";
import "./CSS/modal.css";
function Modal() {
  return (
    <div className=" ">
      <div className="modal9 ">
        <div className="overlay9"></div>
        <div className="modal-content9 flex ">
          <div className="basis-1/2">
            <div className="text-3xl ">Details</div>
            <div>
              <div>Name : </div>
              <div>Address : </div>
              <div>Phone No : </div>
            </div>
          </div>
          <div className="basis-1/2">{/* <Player1 link name /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
