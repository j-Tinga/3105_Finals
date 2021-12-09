import '../../css/Dashboard.css';
import dash1 from '../../img/dash1.png'
import dash2 from '../../img/dash2.png'
import dash3 from '../../img/dash3.png'
import dashAsset1 from '../../img/dashAsset1.png'
import dashAsset2 from '../../img/dashAsset2.png'
import dashAsset3 from '../../img/dashAsset3.png'
import dashAsset4 from '../../img/dashAsset4.png'
import Cards from './Cards'
import React, {useState, useEffect} from 'react'

const Dashboard = () => {
    const [assets, setAssets] = useState(
        [
            {
                collection: 'Degen Crypto',
                id: '2521',
                name: 'Degen Crypto #2521',
                img: dashAsset1,
                network: 'Cardano',
                price: 0,
                last: 0,
                offer: 0
            },
            {
                collection: 'Red Panda',
                id: '3368',
                name: 'BAYC #3368',
                img: dashAsset2,
                network: 'Ethereum',
                price: 42.1111,
                last: 12.1500,
                offer: 0
            },
            {
                collection: 'Fidenza',
                id: '938',
                name: 'Fidenza #938',
                img: dashAsset3,
                network: 'Ethereum',
                price: 0,
                last: 0,
                offer: 0
            },
            {
                collection: 'Kiki & Mozart',
                id: '11',
                name: 'Kiki and Mozart #11',
                img: dashAsset4,
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
        <div className='Dashboard'>
            <div className='span' id = 'text'>
                <p>En Eff Tee Marketplace is the go-to NFT marketplace from all blockchains
                    Find the NFT from any blockchain in this marketplace</p>
            </div>
            <div className='span'>
                <img src= {dash1} height = '100px' width = '100px'></img>
                <img src= {dash2} height = '100px' width = '100px'></img>
                <img src= {dash3} height = '100px' width = '100px'></img>
            </div>

            <div className = "Search">
                <input type="text" onChange={searchHandler} id = "search-input"></input>
                <button onClick={filterSearch} className="search-btn">Search</button>
                <button onClick={resetSearch} className="button">Reset</button>
            </div>

            <Cards filtered = {filtered}/>
        </div>
    );
}

export default Dashboard;