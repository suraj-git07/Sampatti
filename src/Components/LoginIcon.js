import { React, useState } from "react";
import { BiLogIn } from "react-icons/bi";
import Login from "./Login";

function Loginicon() {
  const [show1, setshow1] = useState(false);
  const [lgin, setLgin] = useState(false);
  const toggleLgin = () => {
    setLgin(!lgin);
  };
  return (
    <div>
      <div
        className="flex flex-row gap-x-4 fixed top-4 right-2 sidebar-blur justify-center items-center py-2 pl-1 pr-2  shadow-lg shadow-slate-600 cursor-pointer"
        onMouseEnter={() => setshow1(true)}
        onMouseLeave={() => setshow1(false)}
        onClick={toggleLgin}
      >
        <BiLogIn size={36} />
        {show1 && <div className="text-xl  ">Login</div>}
        {lgin && <Login toggleLgin={toggleLgin} lgin={lgin} />}
      </div>
    </div>
  );
}

export default Loginicon;
