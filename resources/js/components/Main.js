import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Account from './Account';

function Main() {
    return (
        <div className="container">
            <Header />
            <Account />
        </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
