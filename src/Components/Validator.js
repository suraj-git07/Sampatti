import { React, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import meta1 from "../metadata/1.json";
import meta2 from "../metadata/2.json";
import meta3 from "../metadata/3.json";
function Validator({ validator, toggleValidator }) {
  return (
    <div>
      <div className=" fixed bottom-[-32vh] right-0 cursor-default">
        {/* <div  className="h-screen w-screen  "></div> */}

        <div className="text-white    sidebar-blur h-screen w-screen">
          <div>
            {/* <div className=" ">Dashboard</div> */}
            <div className=" flex justify-center items-center gap-x-12 ">
              {/* LEFT HERO */}
              <div>
                <div className="text-slate-200 text-4xl font-bold mt-12">
                  NFT Proposals
                </div>
                <div className="flex gap-10 basis-2/3 mt-20">
                  <div class="card 1">
                    <div class="card_image">
                      {" "}
                      <img src={meta1.image} />{" "}
                    </div>
                    <div class="text-3xl font-bold mt-4">
                      <p>{meta1.name}</p>
                      <button className="  px-12 py-4 text-2xl font-bold rounded-md  shadow-md shadow-white mt-32 cursor-pointer">
                        Validate
                      </button>
                    </div>
                  </div>
                  <div class="card 1">
                    <div class="card_image">
                      {" "}
                      <img src={meta2.image} />{" "}
                    </div>
                    <div class="text-3xl font-bold mt-4">
                      <p>{meta2.name}</p>
                      <button className="  px-12 py-4 text-2xl font-bold rounded-md  shadow-md shadow-white mt-32 cursor-pointer">
                        Validate
                      </button>
                    </div>
                  </div>
                  <div class="card 1">
                    <div class="card_image">
                      {" "}
                      <img src={meta3.image} />{" "}
                    </div>
                    <div class="text-3xl font-bold mt-4">
                      <p>{meta3.name}</p>
                      <button className="  px-12 py-4 text-2xl font-bold rounded-md  shadow-md shadow-white mt-32 cursor-pointer">
                        Validate
                      </button>
                    </div>
                  </div>
                </div>
                {/* <button className="  px-4 py-2 font-bold rounded-md text-lg shadow-md shadow-white mt-64 cursor-pointer">
                Create Your NFT
              </button> */}
              </div>

              {/* Right Hero */}
              {/* <div className="basis-1/5 flex flex-col items-center justify-center mt-12 dash-blur h-[85vh]">
                <div className="px-4 py-4">Logo</div>
                <div>
                  <img
                    src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-2.jpg"
                    alt="user"
                    className="h-32 border-2 border-slate-300 shadow-md shadow-[#FF6447] rounded-full"
                  />
                </div>
                <div className="text-slate-300 pt-6">Welcome</div>
                <div className="mt-1 text-2xl font-semibold">Dhruv Aeron</div>
                <div>
                  <div className="flex gap-2 items-center justify-center mt-12">
                    {" "}
                    <div>
                      <FaEthereum size={30} />
                    </div>
                  </div>
                  <div className="mt-2 font-semibold">20 STP</div>
                </div>
                <button className="  px-4 py-2 font-bold rounded-md text-lg shadow-md shadow-white mt-20 cursor-pointer">
                  Buy Tokens
                </button>
                <button className="  px-4 py-2 font-bold rounded-md text-lg shadow-md shadow-white mt-20 cursor-pointer">
                  Become A Validator
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validator;
