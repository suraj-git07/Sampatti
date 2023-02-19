import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import "./App.css";
// import Navbar from "./Components/Navbar";
import City2 from "./Components/City/City2";
import Login from "./Components/Login";
import Loginicon from "./Components/LoginIcon";
import Modal from "./Components/Modal";
// import Dashboard from "./Components/Dashboard";
import useArcanaAuth from "./Components/useArcanaAuth";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        {/* <Modal /> */}
        <Loginicon />
        <img src={require("./Components/sampatti.png")} alt=""  className="fixed top-4 left-4 h-24 cursor-pointer"/>
        <Routes>
          <Route path="/" element={<City2 />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
