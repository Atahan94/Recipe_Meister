// RecipeCard Component
import React from "react";

const RecipeCard = ({data, key, onCclick}) => {
  return <div class="recipe-card" onClick = {onCclick}>
    <img class="recipe-img" src = {data.recipeImg} alt={data.title}/>
    <div class="details">
        <h2>{data.title}</h2>
        <h3>{data.description}</h3>
        <div class="keywords">
            {data.keywords.map((el) => <div class="keyword" key= {key}>{el.label.toUpperCase()}</div>)}
            
        </div>
    </div>
</div>;
};

export default RecipeCard;
