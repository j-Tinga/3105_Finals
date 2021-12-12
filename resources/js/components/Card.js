import '../../css/Card.css'

const Card = ({asset}) => {
    return (
        <div>
            <div className = "Card-description">
                <div className = "Card-column">
                <img src= {asset.img} height = '300px' width = '300px'></img>
                    <p> {asset.collection}</p>
                    <p> {asset.id}</p>
                    <p> {asset.network}</p>
                </div>
                <div className = "Card-column" id = "Card-column-right">
                    {
                        (asset.price != 0)
                        ? <p> Price {asset.price}</p>
                        : (asset.offer != 0)
                            ? <p> Best offer {asset.offer}</p>
                            : <p></p>
                    }
                    {
                        (asset.last != 0)
                            ? <p> Last {asset.last}</p>
                            : <p></p>
                    }
                </div>
            </div>
            
            
        </div>
    );
}

export default Card;