import React, { useState } from "react";
import "./style.css";
import "./Navbar.css";

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
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Resume">Resume</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="mode">
          <p className="navlink">Dark Mode</p>
          <label className="switch">
            <input type="checkbox" id="toggleSwitch" onClick={toggleMode} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}
