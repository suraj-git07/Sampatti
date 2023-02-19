import { React,useEffect } from "react";
import Player1 from "./Livepeer";
import meta from "../metadata/1.json"
import meta1 from "../metadata/1.json"
import "./CSS/modal.css";
function Modal() {

  // useEffect(() => {
  //   console.log(Player1);
  // }, [])
  
  return (
    <div className=" ">
      <div className="modal9 ">
        <div className="overlay9"></div>
        <div className="modal-content9 flex ">
          <div className=" basis-3/4">
            <div className="text-3xl ">Details</div>
            <div className=" flex flex-col justify-start items-start w-[70vw] ">
              <div>Name : {meta.name} </div>
              <div>Address : {meta.address} </div>
              <div>Description: {meta.description}</div>
              <div>Image: {meta.image}</div>
              <div>VideoLink: {meta.videoLink}</div>
              <div>Attributes: {meta1.attributes.map((prev) => ( <><div>Trait Type: {prev.trait_type}</div><div>Value: {prev.value}</div></> ))}</div>
            </div>
          </div>
          {/* <div className="basis-1/2"></div> */}
        </div>
      </div>
    </div>
  );
}


export default Modal;
