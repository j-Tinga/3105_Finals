import React, {useState, useEffect} from 'react'
import '../../css/Inventory.css'
import guppy from '../../img/guppy.png'
import bayc from '../../img/bayc.png'
import fidenza from '../../img/fidenza.png'
import kiki from '../../img/kiki.png'
import Cards from './Cards'

const Inventory = () => {
    const [assets, setAssets] = useState(
        [
            {
                collection: 'Guppy Gang',
                id: '2570',
                name: 'Guppy Gang #2570',
                img: guppy,
                network: 'Ethereum',
                price: 0,
                last: 0,
                offer: 0
            },
            {
                collection: 'BAYC',
                id: '3368',
                name: 'BAYC #3368',
                img: bayc,
                network: 'Ethereum',
                price: 42.1111,
                last: 12.1500,
                offer: 0
            },
            {
                collection: 'Fidenza',
                id: '938',
                name: 'Fidenza #938',
                img: fidenza,
                network: 'Ethereum',
                price: 0,
                last: 0,
                offer: 0
            },
            {
                collection: 'Kiki & Mozart',
                id: '11',
                name: 'Kiki and Mozart #11',
                img: kiki,
                network: 'Solana',
                price: 0,
                last: 8.2350,
                offer: 11.1500
            },      
        ]
    );
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState(assets);
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }
    
    const filterSearch = () => {
        setFiltered(assets.filter(asset => asset.name.toLowerCase().includes(search)));
    }
    const resetSearch = () => {
        setFiltered(assets);
        document.getElementById('search-input').value = '';
    }

    return (
        <div className = "Inventory-component">
            <div className = "Search">
                <input type="text" onChange={searchHandler} id = "search-input"></input>
                <button onClick={filterSearch} className="search-btn">Search</button>
                <button onClick={resetSearch} className="button">Reset</button>
            </div>

            <Cards filtered = {filtered}/>
        </div>
    );
}

export default Inventory;