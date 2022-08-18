import './searchItem.css'

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="https://picsum.photos/300/300" alt="" />
            <div className="searchItemDesc">
                <h1 className="searchItemTitle">Tower Street Apartment</h1>
                <span className="searchItemDist">500m from center</span>
                <span className="searchItemTaxi">Free Airport Taxi</span>
                <span className="searchItemSubs">Studio Apartment with Air Conditioning</span>
                <span className="searchItemFeatures">Entire studio﹒1 bathroom﹒21m<sup>2</sup> 1 Full Bed</span>
                <span className="searchItemCancel">Free Cancellation</span>
                <span className="searchItemCancelSubs">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="searchItemDetailsText">
                    <span className="searchItemPrice">$123</span>
                    <span className="searchItemTax">Includes taxes and fees</span>
                    <button className='searchItemCheckBtn'>See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem