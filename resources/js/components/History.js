import React, {useState, useEffect} from 'react'
import '../../css/History.css'
import guppy from '../../img/guppy.png'
import bayc from '../../img/bayc.png'
import doodles1 from '../../img/doodles-1.png'
import doodles2 from '../../img/doodles-2.png'
import Cart from './Cart'

const History = () => {
    const [cart, setCart] = useState(
        [
            {
                type: "buy",
                cart: [guppy, bayc],
                price: 1,
                date: "1/1/2020"
            },
            {
                type: "sell",
                cart: [doodles1, doodles2],
                price: 8,
                date: "1/9/2020"
            }
        ]
    );
    return (
        <div className = "History-page">
            <ul className = "history-header">
                <li> Transaction </li>
                <li> Cart </li>
                <li> Price </li>
                <li> Date </li>
            </ul>

            <div className = "history-list">
                {cart.map(cartItem => (
                            <Cart key = {cartItem.id} cartItem = {cartItem}/> 
                        ))}
            </div>
        </div>
    );
}

export default History;