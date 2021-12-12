import React from 'react';
<<<<<<< HEAD
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import LoginRegister from './LogInRegister';

function Main() {
    return (
        <BrowserRouter>
         <div className="container">
           <LoginRegister />
         </div>
        </BrowserRouter>
       
=======
import ReactDOM from 'react-dom';
import Account from './Account';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Dashboard from './Dashboard';
import History from './History'
import LoginRegister from './LoginRegister'

function Main() {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element = {<LoginRegister/>}/> 
                        <Route path="/account" element = {<Account/>}/> 
                        <Route path="/dashboard" element = {<Dashboard/>}/> 
                        <Route path = "/history" element = {<History />} />
                    </Routes>
                </div>
            </BrowserRouter>
            
        </div>
>>>>>>> 35a6ad70040747411744e1cdc56613907686911c
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
