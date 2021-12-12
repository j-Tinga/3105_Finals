import account from '../../img/account.png'
import '../../css/Account.css'
import Inventory from './Inventory'
import Header from './Header';

const Account = () => {
    return(
        <div>
        <Header/>
            <div className = "Account-page">
                <img src = {account} alt="Account-img" className = "Account-pic"></img>
                <h1> Professerf </h1>

                <Inventory />
            </div>
        </div>

    );
}

export default Account;