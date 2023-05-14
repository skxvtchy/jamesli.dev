import React from "react";
import "./Footer.css";
export default function Main({ darkMode }) {
  return (
    <div className={darkMode ? "dark" : "light"}>
      <p className="footer">© James Li 2023</p>
    </div>
  );
}
