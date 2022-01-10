import React from 'react';
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
                        <Route path = "/testRopstein" element = {<Ropstein />} />
                        <Route path = "/testLocal" element = {<Local />} />
                    </Routes>
                </div>
            </BrowserRouter>
            
        </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
