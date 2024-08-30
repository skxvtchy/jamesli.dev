import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mogwarts from "./Mogwarts"; // Make sure the path matches where you created your Mogwarts component
import Moggers from "./Moggers";
import James from "./James";
import Brandon from "./Brandon";
import Jessica from "./Jessica";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mogwarts" element={<Mogwarts />} />
          <Route path="/mogwarts/moggers" element={<Moggers />} />
          <Route path="/mogwarts/moggers/Jessica" element={<Jessica />} />
          <Route path="/mogwarts/moggers/Brandon" element={<Brandon />} />
          <Route path="/mogwarts/moggers/James" element={<James />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
