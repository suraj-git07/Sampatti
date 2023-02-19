import { React } from "react";
import "./CSS/Navbar.css";
function Navbar(props) {
  return (
    <>
        <div className="flex justify-center items-center relative">
          <div
            className="flex flex-row self-center gap-7 absolute top-10 text-slate-200 sidebar-blur px-[10vw] py-8 shadow-lg shadow-slate-600 transition-all ease-in-out delay-1000 ">
            <h2 className=" font-bold">DELHI (28.7041° N, 77.1025° E)</h2>
        </div>
      </div>
    </>
  );
}

export default Navbar;
