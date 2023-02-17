import { React, useState } from "react";
// import { AiFillHome } from "react-icons/ai";
// import { FaUserAlt } from "react-icons/fa";
// import { HiUserGroup } from "react-icons/hi";
import "./CSS/Navbar.css";
function Navbar(props) {
  // const [show, setshow] = useState(false);
  return (
    <>
      {/* <div className=" h-screen w-screen bg-black"> */}
        <div className="flex justify-center items-center relative">
          <div
            className="flex flex-row self-center gap-7 absolute top-10 text-slate-200 sidebar-blur px-[30vw] py-8 shadow-lg shadow-slate-600 transition-all ease-in-out delay-1000 "
            // onMouseEnter={() => setshow(true)}
            // onMouseLeave={() => setshow(false)}
          >
            <h2 className=" font-bold">DELHI (28.7041° N, 77.1025° E)</h2>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
