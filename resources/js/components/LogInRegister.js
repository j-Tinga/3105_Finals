import React , {useState} from "react";
import "./LoginRegister.css";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import DashBoard from "./DashBoard";

const LoginRegister = () => {
  const[addClass, setAddClass] = useState("");

  return (

    <BrowserRouter>
      <div className={`container ${addClass}`} id="container">
      <div className="form-container sign-up-container">
         < form  >
           <h1>Create Account</h1>
           <input type="text" placeholder="NAME" />
           <input type="email" placeholder="EMAIL" />
           <input type="password" placeholder="PASSWORD" />
           <button type="submit"> <Link to ="/dashboard"> REGISTER </Link></button>
         </form>
       </div>
      <div className="form-container sign-in-container">
         <form>
           <h1>Login</h1>
           <input type="email" placeholder="EMAIL" />
           <input type="password" placeholder="PASSWORD" />
           <button type="submit"> <Link to ="/dashboard"> LOGIN </Link></button>
         </form>
       </div>
      <div className="overlay-container">
         <div className="overlay">
           <div className="overlay-panel overlay-left">
             <button className="ghost" id="signIn" onClick= {()=> setAddClass("")}>
               GO TO LOGIN
             </button>
           </div>
           <div className="overlay-panel overlay-right">
             <button className="ghost" id="signUp" onClick= {()=> setAddClass("right-panel-active")}>
                GO TO REGISTER
             </button>
           </div>
          </div>
       </div>
    </div>

    <div>
    <Routes>
        <Route path='/dashboard' element= {<DashBoard/>}></Route>
    </Routes>
    </div>

   
    </BrowserRouter>
  
    );
};
export default LoginRegister;