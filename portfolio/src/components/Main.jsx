import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Main({ darkMode }) {
  return (
    <div className={darkMode ? "dark" : "light"}>
      <section id="About">
        <h1>About</h1>
        <div className="download">
          <button type="button" className="resume">
            <a href="/path/to/your/file.pdf" download>
              Resume
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </button>
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </div>
      </section>
      <section id="Projects">
        <h1>Projects</h1>
      </section>
      {/* <section id="Resume">
        <h1>Resume</h1>
        <div className="resume_pdf">
          <embed
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf?#zoom=67"
            alt="Resume pdf"
            width="777px"
            height="100%"
          />
        </div>
      </section> */}
      <section id="Contact">
        <h1 id="Contact">Contact</h1>
      </section>
    </div>
  );
}
