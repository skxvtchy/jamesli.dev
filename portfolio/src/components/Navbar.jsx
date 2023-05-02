import React from "react";
import "./Navbar.css";

export default function Navbar() {
  window.addEventListener("load", () => {
    const sectionId = window.location.hash.substring(1);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <nav>
      <a href="#About">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Resume">Resume</a>
      <a href="#Contact">Contact</a>
      <a href="#Mode">DarkMode</a>
    </nav>
  );
}
