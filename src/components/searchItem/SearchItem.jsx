import { Link } from 'react-router-dom'
import './searchItem.css'

const SearchItem = ({ item }) => {
    return (
        <div className='searchItem'>
            <img src="https://picsum.photos/300/300" alt="" />
            <div className="searchItemDesc">
                <h1 className="searchItemTitle">{item.name}</h1>
                <span className="searchItemDist">{item.distance}m from center</span>
                <span className="searchItemTaxi">Free Airport Taxi</span>
                <span className="searchItemSubs">Studio Apartment with Air Conditioning</span>
                <span className="searchItemFeatures">{item.description}</span>
                <span className="searchItemCancel">Free Cancellation</span>
                <span className="searchItemCancelSubs">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="searchItemDetails">
                {item.rating &&
                    <div className="searchItemRating">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>
                }
                <div className="searchItemDetailsText">
                    <span className="searchItemPrice">${item.cheapestPrice}</span>
                    <span className="searchItemTax">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                    <button className='searchItemCheckBtn'>See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem