import account from '../../img/account.png'
import '../../css/Account.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inventory from './Inventory'
import History from './History'

const Account = () => {
    return(
        <BrowserRouter>
        <div className = "Account-page">
            <img src = {account} alt="Account-img" className = "Account-pic"></img>
            <h1> Professerf </h1>

            <nav className = "Nav-menu">
                <ul className = "Menu-list">
                    <li><Link to="/account"> Inventory </Link></li>
                    <li><Link to="/account/history"> History </Link></li>
                </ul>
            </nav>

            <div>
                <Routes>
                    <Route path = "/" element = {<Inventory />} />
                    <Route path = "/account" element = {<Inventory />} />
                    <Route path = "/account/history" element = {<History />} />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Account;