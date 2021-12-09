import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Account from './Account';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Dashboard from './Dashboard';
import History from './History'

function Main() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />

                <div>
                    <Routes>
                        <Route path="/account" element = {<Account/>}/> 
                        <Route path="/dashboard" element = {<Dashboard/>}/> 
                        <Route path = "/history" element = {<History />} />
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
