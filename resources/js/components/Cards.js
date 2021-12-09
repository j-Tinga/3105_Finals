import React from 'react';
import Card from './Card.js';
import '../../css/Cards.css'

const Cards = ({filtered}) => {
   
    return (  
        <div className = "Cards-grid">
         {filtered.map(asset => (
                    <Card key = {asset.id} asset = {asset}/> 
                ))}
        </div>
    );
}

export default Cards;