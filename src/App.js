import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Modal from "./Components/Modal";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Modal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
