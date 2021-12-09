import account from '../../img/account.png'
import '../../css/Account.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inventory from './Inventory'
import History from './History'
import Header from './Header';
import Dashboard from './Dashboard';

const Account = () => {
    return(
        <div className = "Account-page">
            <img src = {account} alt="Account-img" className = "Account-pic"></img>
            <h1> Professerf </h1>

            <div>
                <Routes>
                    <Route path = "/" element = {<Inventory />} />
                    <Route path = "/account" element = {<Inventory />} />
                </Routes>
            </div>
        </div>
    );
}

export default Account;