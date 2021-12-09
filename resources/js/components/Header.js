import '../../css/Header.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className = "Header">
            <span className = "Title"> En Eff Tee marketplace </span>
            <span className = "Menu"> Logout </span>
            <span className='Menu'> <Link to="/account"> Account </Link></span>
            <span className='Menu'> <Link to="/history"> History </Link></span>
            <span className='Menu'> <Link to ="/dashboard"> Dashboard </Link></span>
        </div>
    );
}

export default Header;