import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./Experience";

export default function Main({ darkMode }) {
  // const cubeRef = useRef();

  // useFrame((state, delta) => {
  //   cubeRef.current.rotation.y += 0.01;
  // });
  return (
    <div className={darkMode ? "dark" : "light"}>
      <section id="About">
        <h1>About</h1>
        {/* <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="box"
        >
          <Canvas
            camera={{ position: [0, 0, 40], fov: 20 }}
            alpha={true}
            gl={{ clearColor: "rgba(0, 0, 0, 0)" }}
            scale={[15, 15, 15]}
          >
            <mesh rotation-y={Math.PI * 0.25} position-y={-3} scale={[5, 5, 5]}>
              <Experience />
            </mesh>
          </Canvas> 
        </div> */}
        <Canvas style={{ width: "100vw", height: "60vh" }}>
          <mesh className="knot" scale={[1.5, 1.5, 1.5]}>
            <torusKnotGeometry />
            <meshNormalMaterial />
          </mesh>
        </Canvas>
        <p>
          Welcome to my personal website portfolio! My name is James, and I am a
          student @ the University at Buffalo pursuing a Computer Science B.S. I
          am currently seeking an internship opportunity, and this website
          serves as a platform for me to showcase my skills, projects, and
          experiences. On this website, you will find my resume, which outlines
          my education, work experience, and relevant skills. You can also
          explore my GitHub page, where I have uploaded some of my coding
          projects. These projects demonstrate my ability to work with different
          programming languages and frameworks, and showcase my problem-solving
          and analytical skills.
        </p>
        <div className="download">
          <button type="button" className="click">
            <a href="/path/to/your/resume.pdf" download>
              Resume
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </button>
          <FontAwesomeIcon className="click" icon={faGithub} size="2x" />
          <FontAwesomeIcon className="click" icon={faLinkedin} size="2x" />
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
