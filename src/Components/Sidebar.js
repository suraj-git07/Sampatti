import { React, useState,useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import "./CSS/sidebar.css";
import { IoIosCreate } from "react-icons/io";

import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import CreateNft from "./CreateNft";

function Sidebar() {
  const [show, setshow] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [create, setCreate] = useState(false);
  const toggleCreate = () => {
    setCreate(!create);
  };


  return (
    <>
      {/* <div className=" h-screen w-screen bg-black"> */}
      <div className="">
        <div
          className="flex flex-col gap-6 fixed right-2 top-[35vh] text-slate-200 sidebar-blur px-4 py-8 shadow-lg shadow-slate-600 transition-all ease-in-out delay-1000 "
          onMouseEnter={() => setshow(true)}
          onMouseLeave={() => setshow(false)}
        >
          <div className="cursor-pointer hover:text-slate-400">
            <div className="flex justify-center items-center gap-x-2 ">
              <AiFillHome size={32} />
              {show && <div className="text-xl  ">Home</div>}
            </div>
          </div>
          <div className=" hover:text-slate-400">
            <div
              className=" cursor-pointer flex justify-center items-center gap-x-2 "
              onClick={toggleModal}
            >
              <FaUserAlt size={32} />
              {show && <div className="text-xl">User</div>}
              {modal && <Dashboard />}
            </div>
          </div>
          <div className="cursor-pointer hover:text-slate-400">
            <div className="flex justify-center items-center gap-x-2">
              <HiUserGroup size={32} />
              {show && <div className="text-xl  ">Validator</div>}
            </div>
          </div>
          <div
            className="cursor-pointer hover:text-slate-400 "
            onClick={toggleCreate}
          >
            <div className="flex justify-center items-center gap-x-2 ">
              <IoIosCreate size={32} />
              {show && <div className="text-xl  ">Create a NFT</div>}
            </div>
          </div>
          {create && <CreateNft toggleCreate={toggleCreate} create={create} />}
          {/* </div> */}
        </div>
        {!modal && !create && <Navbar />}
      </div>
    </>
  );
}

export default Sidebar;
