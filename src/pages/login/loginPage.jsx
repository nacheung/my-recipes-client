import React, { useState } from "react";
import Axios from "axios";
import { connect } from "react-redux";


  

const LoginPage = ({login}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [usernameReg, setUernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState ("");
    const [username, setUername] = useState("");
    const [password, setPassword] = useState ("");
    const [loginStatus, setLoginStatus] = useState("");
    
    const register = () => {
        Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    const onLogin = () => {
        login(username);
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (!response.data.message) {
                setLoginStatus("logged in");
                setIsLoggedIn(true);
            } else {
                setLoginStatus (response.data.message);
            }
        });
    };



  return (
    
    <div className="registration-and-login">
        <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input 
                type="text"            
                onChange={(e) => {
                setUernameReg(e.target.value);
                }}/>
            <br/>
            <label>password</label>
            <input 
                type="text" 
                onChange={(e) =>{
                    setPasswordReg(e.target.value);
                }}
            /> 
            <br />
            <button onClick={register}> Register</button>
        </div>
        <div className="login">
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="Username…" 
                onChange = { (e) => {
                setUername (e.target.value);
                }}
            /> 
            <br/>
            <input 
                type="password" 
                placeholder="Password…" 
                onChange = { (e) => {
                setPassword (e.target.value);
                }}
            />
            <button onClick={onLogin}>Login</button>
            <h1> {loginStatus}</h1>
        </div>
    </div>

  );

}

const mapDispatchToProps = dispatch => ({
    login: username => 
  (dispatch({ type: "LOGIN", payload: username }))
  })

export default connect(null, mapDispatchToProps)(LoginPage);
