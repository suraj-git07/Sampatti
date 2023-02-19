import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import "./CSS/login.css";
import { ColorRing } from "react-loader-spinner";
import { BsGoogle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import useArcanaAuth from "./useArcanaAuth";

function Login({ toggleLgin, lgin }) {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  if (lgin) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const {
    initializeAuth,
    loggedIn,
    getAccounts,
    login,
    loginWithLink,
    logout,
    initialized,
  } = useArcanaAuth();

  const initialize = async () => {
    await initializeAuth();
  };

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const loadDetails = async () => {
      if (initialized) {
        if (loggedIn) {
          const acc = await getAccounts();
          setAccount(acc[0]);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    };
    loadDetails();
  }, [initialized, loggedIn]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container">
      <div>
        {loading ? (
          <div className="loading text-slate-200">
            <ColorRing
              visible={true}
              height="100"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              // colors={["#ffffff"]}
            />
          </div>
        ) : !loading && loggedIn ? (
          // <div>
          //   <h2 className="sub-heading">Logged In</h2>
          //   <h3>Welcome {account}</h3>
          //   <h3>you're logged in successfully.</h3>
          //   <button className="big-button" onClick={handleLogout}>
          //     Logout
          //   </button>
          // </div>
          <div>
            <div className="modal1 z-2">
              <div onClick={toggleLgin} className="overlay1"></div>
              <div className="modal-content1 ">
                <h2 className="sub-heading font-bold text-3xl flex justify-center items-center text-slate-200 mt-4">
                  Logged In
                </h2>
                <div className="mt-4">Welcome <br/> {account}</div>
                <div>you're logged in successfully.</div>

                <div className="flex items-center justify-center">
                  <button
                    className="px-4 py-2 font-bold rounded-md text-lg shadow-md shadow-white mt-20 cursor-pointer flex justify-center items-center gap-x-4"
                    onClick={handleLogout}
                  >
                    Logout
                    <BiLogOut />
                  </button>
                </div>
              </div>
              <button className="close-modal1" onClick={toggleLgin}>
                <ImCross />
              </button>
            </div>
          </div>
        ) : (
          // <div className="box">
          //   <h2 className="sub-heading">Select a login</h2>
          //   <div className="options">
          //     <button className="big-button" onClick={() => login("google")}>
          //       Google Login
          //     </button>

          //   </div>
          //   <div className="form">
          //     <input
          //       value={email}
          //       type="text"
          //       placeholder="Enter email"
          //       onChange={handleEmailChange}
          //     />
          //     <button
          //       className="big-button"
          //       onClick={() => loginWithLink(email)}
          //     >
          //       Login with link
          //     </button>
          //   </div>
          // </div>
          <div>
            <div className="modal1 z-2">
              <div onClick={toggleLgin} className="overlay1"></div>
              <div className="modal-content1 ">
                <div className="font-bold text-5xl flex justify-center items-center text-slate-200 mt-4">
                  Welcome Back
                </div>
                <div className="text-slate-300 text-xs mt-1">
                  Great!!! Please Login using Google
                </div>

                <div className="flex justify-center items-center mt-12">
                  <button
                    className=" px-4 py-2 font-bold rounded-md text-lg shadow-md shadow-white mt-20 cursor-pointer flex justify-center items-center gap-x-4 "
                    onClick={() => login("google")}
                  >
                    <BsGoogle />
                    <div>Google Login</div>
                  </button>
                </div>
              </div>
              <button className="close-modal1" onClick={toggleLgin}>
                <ImCross />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
