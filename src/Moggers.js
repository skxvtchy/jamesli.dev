import React from "react";
import { useNavigate } from "react-router-dom";
import "./Moggers.css";
import logoImage from "./logo.png";
import Brandon from "./thing1.jpg";
import Jessica from "./thing2.jpg";
import James from "./thing3.png";

function Moggers() {
  const navigate = useNavigate();

  // Function to handle click event
  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={logoImage} alt="Main" />
      </div>
      <div className="image-row">
        <div
          className="image-item"
          onClick={() => handleImageClick("/mogwarts/moggers/Brandon")}
        >
          <img src={Brandon} alt="One" />
          <p>Brandon Qui - PokeMon Champion </p>
        </div>
        <div
          className="image-item"
          onClick={() => handleImageClick("//mogwarts/moggers/Jessica")}
        >
          <img src={Jessica} alt="Two" />
          <p>Jacklyn Nicole Kim - Constant Gooner</p>
        </div>
        <div
          className="image-item"
          onClick={() => handleImageClick("//mogwarts/moggers/James")}
        >
          <img src={James} alt="Three" />
          <p>Jim the gigachad Li aka bread</p>
        </div>
      </div>
      <p>*Learn to goon</p>
      <p>Jesst Get Good</p>
      <p>-----*Archive*-----</p>

      <p>-----From the Start-----</p>
      <p>-----Nercalating-----</p>
      <p>-----SASE-ARRIVAL-----</p>
      <p>----Kyle Rensch----</p>

      <p>----Fasa Brandon watched----</p>
      <p>----Fake fasa party----</p>
      <p>bro what even happened but a lot of snow</p>
      <p>
        *The night after orgy at brandons place except no images were taken cuz
        it was too explicit*
      </p>
      <p>-----Central Park date with Brandon-------</p>
      <p>*Insane arc Brandon mad</p>
      <p>Still cant find this mans hinge</p>
      <p>*Insane arc Brandon not mad anymore</p>

      <p>----Tweaker----</p>
    </div>
  );
}

export default Moggers;
