import React from "react";
import "./style.css";

export default function Main({ darkMode }) {
  return (
    <div className={darkMode ? "dark" : "light"}>
      <section id="About">
        <h1>About</h1>
        <h2> HOLY SHIT MY COCK IS HUGE</h2>
      </section>
      <section id="Projects">
        <h1>Projects</h1>
      </section>
      <section id="Resume">
        <h1>Resume</h1>
        <div className="resume_pdf">
          <embed
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf?#zoom=67"
            alt="Resume pdf"
            width="777px"
            height="100%"
          />
        </div>
      </section>
      <section id="Contact">
        <h1 id="Contact">Contact</h1>
      </section>
    </div>
  );
}
