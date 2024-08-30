import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mogwarts.css";
import mogwartsImage from "./logo.png";

function Mogwarts() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "goon") {
      navigate("/mogwarts/moggers");
    } else {
      alert("Password entered: " + password);
    }
  };

  return (
    <div className="background">
      <div className="mogwarts-container">
        <img
          src={mogwartsImage}
          alt="Mogwarts"
          style={{ maxWidth: "100%", display: "block", margin: "0 auto" }}
        />
        <h1 className="mogwarts-header">Welcome to Mogwarts!</h1>
        <form onSubmit={handleSubmit}>
          <p>That thing you do all time 🚶</p>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Mogwarts;
