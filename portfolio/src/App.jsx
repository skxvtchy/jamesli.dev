import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

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
