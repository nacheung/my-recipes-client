import React, {useEffect, useState} from "react";
import Axios from "axios";
import { connect } from "react-redux";
import RecipeCard from "../../components/recipeCard/recipeCard";
import "./savedRecipesPage.css";

const SavedRecipesPage = ({username}) => {

    const [recipeList, setRecipeList] = useState([]);

    const getRecipes = () => {
        Axios.post("http://localhost:3001/getrecipes", {
        username: username,
        }).then((response) => {
            setRecipeList(response.data);
            console.log(response.data);
        });
    };

    useEffect(() => {
        getRecipes();
    }, []);

    

    return (
        <div>
            Saved Recipes
            <div className="tiles">
            {recipeList.length > 0 && recipeList.map((element, i) => (
                <RecipeCard 
                    title={element.title}
                    url={element.url}
                    image={element.image}
                    key={i}
                />
            ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    username: state.username
  });

export default connect(mapStateToProps)(SavedRecipesPage);
