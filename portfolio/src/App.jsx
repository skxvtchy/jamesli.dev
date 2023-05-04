import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import {SmoothScroll} from "./scripts.js";

// import Resume from "./components/Resume";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
