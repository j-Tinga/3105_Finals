import React , {useState} from "react";
import "./LoginRegister.css";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import DashBoard from "./DashBoard";

const LoginRegister = () => {
  const[addClass, setAddClass] = useState("");

  return (
        <div className= "body">
          <div className={`container ${addClass}`} id="container">
            <div className="form-container sign-up-container">
              <form className="LRForm">
                <h1 className="header1">Create Account</h1>
                <input className ="inputBox" type="text" placeholder="NAME" />
                <input className ="inputBox" type="email" placeholder="EMAIL" />
                <input className ="inputBox" type="password" placeholder="PASSWORD" />
                <button className="loginRegbuttons" type="submit"> REGISTER </button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form className="LRForm">
                <h1 className="header1">Login</h1>
                <input className ="inputBox" type="email" placeholder="EMAIL" />
                <input className ="inputBox" type="password" placeholder="PASSWORD" />
                <button className="loginRegbuttons" type="submit"> LOGIN </button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <button className="loginRegbuttons ghost" id="signIn" onClick= {()=> setAddClass("")}>
                    GO TO LOGIN
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <button className="loginRegbuttons ghost" id="signUp" onClick= {()=> setAddClass("right-panel-active")}>
                      GO TO REGISTER
                  </button>
                </div>
                </div>
            </div>
          </div>
      </div>
    );
};
export default LoginRegister;