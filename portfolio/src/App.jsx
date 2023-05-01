import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import {SmoothScroll} from "./scripts.js";

// import Resume from "./components/Resume";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
}
