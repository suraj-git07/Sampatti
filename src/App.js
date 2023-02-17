import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Modal from "./Components/Modal";
import "./App.css";
import City2 from "./Components/City/City2";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<City2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
