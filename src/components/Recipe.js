// Recipe Component
import React from "react";
import { logRoles } from "@testing-library/react";
import Icon from "./Icon.js"

const Recipe = ({recipeObj, onClose}) => {
  console.log(recipeObj);
  return (<div className="recipe-detail">
    <button className="btn small-btn" onClick ={onClose}>X</button>
    <h2>LET'S COOK</h2>
    <img className="recipe-img" src={recipeObj.recipeImg} alt={recipeObj.title} />
    <h1 className="recipe-title">{recipeObj.title}</h1>
    <p className="recipe-desc">{recipeObj.description}</p>
    <Icon dishType = {recipeObj.dishType}/>
    <div className="keywords">
    
        <div className="keyword">CAKES</div>
    </div>
    <div className="recipe-ingredients">
        <h3>INGREDIENTS</h3>
        <ul>
            {recipeObj.ingredients.map((el)=> <li key = {el.id}>{el.label}</li>)}
        </ul>
    </div>
    <div className="recipe-instructions">
        <h3>INSTRUCTIONS</h3>
        <p>{recipeObj.instructions}</p>
    </div>
</div>)
  
};

export default Recipe;
