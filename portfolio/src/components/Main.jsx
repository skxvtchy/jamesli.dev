import React from "react";
import "./style.css";

export default function Main() {
  return (
    <div>
      <section id="About">
        <h1>About</h1>
      </section>
      <section id="Projects">
        <h1>Projects</h1>
      </section>
      <section id="Resume">
        <h1>Resume</h1>
        <embed
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf?#zoom=67"
          width="90%"
          height="800"
        ></embed>
      </section>
      <section id="Contact">
        <h1 id="Contact">Contact</h1>
      </section>
    </div>
  );
}
