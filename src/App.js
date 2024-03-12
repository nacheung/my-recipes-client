import React, { useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScraperPage from "./pages/scraper/scraperPage";
import LoginPage from "./pages/login/loginPage";
import SavedRecipesPage from "./pages/savedRecipes/savedRecipesPage";

import "./App.css";
import Axios from "axios";
import { connect } from "react-redux";



function App({username}) {

  // const [title, setTitle] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [instructions, setInstructions] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [usernameReg, setUernameReg] = useState("");
  // const [passwordReg, setPasswordReg] = useState ("");
  // const [username, setUername] = useState("");
  // const [password, setPassword] = useState ("");
  // const [url, setUrl] = useState("");
  // const [isSaved, setIsSaved] = useState(false);
  
  // const [loginStatus, setLoginStatus] = useState("");

  // const onNewUrlInput = (url) => {
  //   setUrl(url);
  //   setIsSaved(false);
  //   fetch(`http://localhost:8000/message?url=${url}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setTitle(data.title);
  //     setIngredients(data.ingredients);
  //     setInstructions(data.instructions);
  //   });
  // }

  // const register = () => {
  //   Axios.post("http://localhost:3001/register", {
  //     username: usernameReg,
  //     password: passwordReg,
  //    }).then((response) => {
  //       console.log(response);
  //    });
  //  };

  //  const login = () => {
  //   Axios.post("http://localhost:3001/login", {
  //      username: username,
  //      password: password,
  //   }).then((response) => {
  //      if (!response.data.message) {
  //       setLoginStatus("logged in");
  //       setIsLoggedIn(true);
  //      } else {
  //       setLoginStatus (response.data.message);
  //      }
  //   });
  //   };

  // const saveRecipe = () => {
  //   console.log("Hello");
  //   Axios.post("http://localhost:3001/save", {
  //     username: username,
  //     url: url,
  //     title: title,
  //     ingredients: ingredients,
  //     instructions: instructions, 
  //   }).then((response) => {
  //     if (!response.data.err) {
  //       setIsSaved(true);
  //     }
  //  });
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={username ? <ScraperPage /> : <LoginPage />} />
        <Route path="/index" element={<SavedRecipesPage />} />
      </Routes>
    </BrowserRouter>
  );


//   return (
    
//     <div className="App" style={{whiteSpace: "pre-line"}}>
//       {!isLoggedIn && (
//         <div className="registration-and-login">
//           <div className="registration">
//             <h1>Registration</h1>
//             <label>Username</label>
//             <input 
//               type="text"            
//               onChange={(e) => {
//                 setUernameReg(e.target.value);
//               }}/>
//             <br/>
//             <label>password</label>
//             <input 
//               type="text" 
//               onChange={(e) =>{
//                  setPasswordReg(e.target.value);
//               }}
//             /> 
//             <br />
//             <button onClick={register}> Register</button>
//           </div>
//           <div className="login">
//             <h1>Login</h1>
//             <input 
//               type="text" 
//               placeholder="Username…" 
//               onChange = { (e) => {
//                 setUername (e.target.value);
//              }}
//             /> 
//             <br/>
//             <input 
//               type="password" 
//               placeholder="Password…" 
//               onChange = { (e) => {
//                 setPassword (e.target.value);
//              }}
//             />
//             <button onClick={login}>Login</button>
//             <h1> {loginStatus}</h1>
//           </div>
//         </div>
//       )}

//       <div className="recipe-scraper">
//         {isLoggedIn && (
//           <div>
//             <button onClick={saveRecipe}>{isSaved ? "Saved!" : "Save Recipe"}</button>
//             <button onClick={saveRecipe}>My Recipes</button>
//           </div>
//         )}
//         <h1>Enter a website URL below to extract the recipe</h1>
//         <input type="text" placeholder="URL" onChange={e => onNewUrlInput(e.target.value)} />
//         <h1>{title}</h1>
//         <h3>Ingredients:</h3>
//         {ingredients}
//         <h3>Instructions:</h3>
//         {instructions}
//       </div>
//     </div>
//   );
}

const mapStateToProps = (state) => ({
  username: state.username
});

export default connect(mapStateToProps)(App);
