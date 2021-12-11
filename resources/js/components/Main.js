import React from 'react';
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
       
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
