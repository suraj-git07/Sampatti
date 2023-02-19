import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import "./App.css";
// import Navbar from "./Components/Navbar";
import City2 from "./Components/City/City2";
import Login from "./Components/Login";
import Loginicon from "./Components/LoginIcon";
// import Dashboard from "./Components/Dashboard";
import useArcanaAuth from "./Components/useArcanaAuth";

function App() {
  const {
    initializeAuth,
    loggedIn,
    getAccounts,
    login,
    loginWithLink,
    logout,
    initialized,
  } = useArcanaAuth();

  const loadblockchainData = async()=>{
    
  }

  return (
    <div>
      <Router>
        <Sidebar />
        <Loginicon />
        <Routes>
          <Route path="/" element={<City2 />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
