import './featuredProperties.css'
import useFetch from '../../hooks/useFetch';

const FeaturedProperties = () => {
    const { data, loading, error } = useFetch("http://localhost:8000/api/hotels?max=10000");


    return (
        <div className='fp'>
            {loading ? "Loading.." : <>
                {data.map(item => (
                    <div className="fpItem" key={item._id}>
                        <img src="https://picsum.photos/300/300" alt=""/>
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                        {item.rating && <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>}
                    </div>
                ))}
            </>}
        </div>
    )
}

export default FeaturedProperties