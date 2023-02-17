import React, { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";

import useArcanaAuth from "./useArcanaAuth";

function Login() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

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
      <h1>AUTHENTICATION</h1>
      <div>
        {loading ? (
          <div className="loading">
            <ColorRing
              visible={true}
              height="100"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#000000"]}
            />
          </div>
        ) : !loading && loggedIn ? (
          <div>
            <h2 className="sub-heading">Logged In</h2>
            <h3>Welcome {account}</h3>
            <h3>you're logged in successfully.</h3>
            <button className="big-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="box">
            <h2 className="sub-heading">Select a login</h2>
            <div className="options">
              <button className="big-button" onClick={() => login("google")}>
                Google Login
              </button>
             
            </div>
            <div className="form">
              <input
                value={email}
                type="text"
                placeholder="Enter email"
                onChange={handleEmailChange}
              />
              <button
                className="big-button"
                onClick={() => loginWithLink(email)}
              >
                Login with link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
