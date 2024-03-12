import React from "react";

import "./recipeCard.css";

const RecipeCard = ({title, url, image, key}) => {

    return (
    <div key={key} className="recipe-card">
        <img className="recipe-card-image" src={image} />
        <span className="recipe-card-title">{title}</span>
        <span className="recipe-card-url">{url}</span>   
    </div>
)}

export default RecipeCard;
