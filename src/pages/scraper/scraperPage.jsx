import React, { useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";

import "./scraperPage.css";




const ScraperPage = ({username}) => {

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  

  const onNewUrlInput = (url) => {
    setUrl(url);
    setIsSaved(false);
    fetch(`http://localhost:8000/message?url=${url}`)
    .then((res) => res.json())
    .then((data) => {
      setTitle(data.title);
      setIngredients(data.ingredients);
      setInstructions(data.instructions);
      setImages(data.images);
    });
  }

  

  const saveRecipe = () => {
    console.log("Hello");
    Axios.post("http://localhost:3001/save", {
      username: username,
      url: url,
      title: title,
      ingredients: ingredients,
      instructions: instructions, 
      image: selectedImage,
    }).then((response) => {
      if (!response.data.err) {
        setIsSaved(true);
      }
   });
  };

  const onSelectedImageChanged = (e) => {
    setSelectedImage(e.target.defaultValue);
  }


  return (
      <div className="recipe-scraper" style={{whiteSpace: "pre-line"}}>
        <div>
        <button onClick={saveRecipe}>{isSaved ? "Saved!" : "Save Recipe"}</button>
        <Link to="/index">My Recipes</Link>
        </div>
        <h1>Enter a website URL below to extract the recipe</h1>
        <input type="text" placeholder="URL" onChange={e => onNewUrlInput(e.target.value)} />
        <h1>{title}</h1>
        {/* <img src={images} width="300"></img> */}
        <h3>Ingredients:</h3>
        {ingredients}
        <h3>Instructions:</h3>
        {instructions}
        <h3>Select an image to save:</h3>
        <div className="images">
          {images.map((element, i) => 
            element && 
            <label className="image-container">
              <input type="radio" id={i} name="image" value={element} onChange={onSelectedImageChanged} defaultChecked={i==0} className="radio"/>
              <img src={element} className="image"/>
            </label>

            )}
         </div>
      </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.username
});

export default connect(mapStateToProps)(ScraperPage);
