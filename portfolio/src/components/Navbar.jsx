import React, { useState } from "react";
import "./Navbar.css";
import "./Main.css";

export default function Navbar({ darkMode, toggleMode }) {
  //scrolls to that section from url
  function scrollToSection() {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
  window.addEventListener("load", scrollToSection);

  //light-dark
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <nav>
      <div className={darkMode ? "dark" : "light"}>
        <div className="navlink">
          <a className="Aboutlink" href="#About">
            About
          </a>
          <a href="#Projects">Projects</a>
          {/* <a href="#Resume">Resume</a> */}
          <a href="#Contact">Contact</a>
        </div>
        <div className="mode">
          <a className="navlink">Dark Mode</a>
          <label className="switch">
            <input type="checkbox" id="toggleSwitch" onClick={toggleMode} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}
