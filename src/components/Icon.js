// Icon Component
import React from "react";
// Load Images
import poultry from "../icons/poultry.png";
import vegetarian from "../icons/veg.png";
import vegan from "../icons/vegan.png";
import meat from "../icons/meat.png";
import seafood from "../icons/seafood.png";

const Icon = ({ dishType }) => {
    let iconImage;
  
    // Assign the corresponding image based on the dishType
    switch (dishType) {
      case "poultry":
        iconImage = poultry;
        break;
      case "vegetarian":
        iconImage = vegetarian;
        break;
      case "vegan":
        iconImage = vegan;
        break;
      case "meat":
        iconImage = meat;
        break;
      case "seafood":
        iconImage = seafood;
        break;
    }
  
    return (
      <div className="icon">
        <img src={iconImage} alt={dishType} />
        <p>{dishType}</p>
      </div>
    );
  };
  
  export default Icon;
