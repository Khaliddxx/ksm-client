import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useRoutes } from "react-router-dom";

import {
  Home,
  About,
  Services,
  Projects,
  Certificates,
  Contact,
} from "./Pages/index.js";
import Footer from "./Containers/Footer/Footer";

import NavBar from "./Components/NavBar/NavBar";
import AddProject from "./Components/AddProject/AddProject";
import ProjectDetails from "./Containers/ProjectDetails/ProjectDetails";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/addproject" element={<AddProject />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
