import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
