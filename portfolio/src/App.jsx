import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import {SmoothScroll} from "./scripts.js";

// import Resume from "./components/Resume";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}
