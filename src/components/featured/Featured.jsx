import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {

    const { data, loading, error } = useFetch("http://localhost:8000/api/hotels/countByCity?cities=Mumbai,Delhi,Bengaluru")

    return (
        <div className='featured'>
            {loading ? ("Loading please wait") : (
                <>
                    <div className="featuredItem">
                        <img src="https://picsum.photos/300/300" alt="" />
                        <div className="featuredTitles">
                            <h1>Mumbai</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img src="https://picsum.photos/300/300" alt="" />
                        <div className="featuredTitles">
                            <h1>Delhi</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img src="https://picsum.photos/300/300" alt="" />
                        <div className="featuredTitles">
                            <h1>Bengaluru</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>
            )
            }

        </div>
    )
}

export default Featured