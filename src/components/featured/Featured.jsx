import './featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="https://picsum.photos/300/300" alt="" />
                <div className="featuredTitles">
                    <h1>Dubai</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            
            <div className="featuredItem">
                <img src="https://picsum.photos/300/300" alt="" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>789 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://picsum.photos/300/300" alt="" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>456 properties</h2>
                </div>
            </div>

        </div>
    )
}

export default Featured