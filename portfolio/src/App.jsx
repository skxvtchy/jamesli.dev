import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import {SmoothScroll} from "./scripts.js";

// import Resume from "./components/Resume";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

export default function App() {
  window.addEventListener("load", () => {
    const sectionId = window.location.hash.substring(1);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}
