import React from 'react';
import ReactDOM from 'react-dom';
import LoginRegister from './LogInRegister';

function Main() {
    return (
        <div className="container">
           <LoginRegister />
        </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
