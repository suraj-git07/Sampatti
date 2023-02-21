import { React, useEffect } from "react";
import Player1 from "./Livepeer";
import meta from "../metadata/1.json";
import meta1 from "../metadata/1.json";
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
          <div className="basis-1/2 ">
            <div className="text-3xl font-bold  drop-shadow-md">Details</div>
            <div className=" flex flex-col  w-[70vw] ">
              <div className="flex flex-row gap-2  mt-2">
                <div className="text-xl font-semibold w-32 flex justify-start">
                  {" "}
                  Name :
                </div>{" "}
                <div className="flex justify-center items-center text-slate-200">
                  {meta.name}
                </div>{" "}
              </div>
              <div className="flex flex-row gap-2  mt-2">
                <div className="text-xl font-semibold w-32 flex justify-start">
                  Address :
                </div>{" "}
                <div className="flex justify-center items-center text-slate-200">
                  {meta.address}
                </div>{" "}
              </div>
              <div className="flex flex-row gap-2  mt-2 ">
                <div className="text-xl font-semibold w-32  flex justify-start">
                  {" "}
                  Description:
                </div>{" "}
                <div className="flex justify-center ml-3 items-center text-slate-200">
                  {meta.description}
                </div>
              </div>
              <div className="flex flex-row gap-2  mt-2">
                <div className="text-xl font-semibold w-32 flex justify-start">
                  video:
                </div>{" "}
                <div className="flex justify-center items-center text-slate-200">
                  {/* <img src={meta.image} alt="" className="w-48" />
                   */}
                   <Player1 name ={meta.name} link={meta.videoLink} className="w-48 h-48"/>
                </div>
              </div>
              <div className="flex flex-row gap-2  mt-2">
                <div className="text-xl font-semibold w-32 flex justify-start">
                  VideoLink:{" "}
                </div>
                <div className="flex justify-center items-center text-slate-200">
                  {meta.videoLink}
                </div>
              </div>
              <div className="flex justify-start gap-20 mt-4">
                <div className="flex justify-start text-3xl font-semibold mb-4 mt-12">
                  {/* More Info{" "} */}
                </div>
                {meta1.attributes.map((prev) => (
                  <>
                    <div className="flex flex-col justify-start">
                      {" "}
                      <div className="text-xl font-semibold w-32 flex justify-start">
                        {" "}
                        {prev.trait_type}
                      </div>
                      <div className="flex justify-center items-center text-slate-200">
                        {prev.value}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="basis-1/2 ">
            {/* <img src={meta.image} alt="" className="w-[50vw]" /> */}
            
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Modal;
