import "./propertyList.css"
import useFetch from '../../hooks/useFetch'

const PropertyList = () => {
    const { data, loading, error } = useFetch("http://localhost:8000/api/hotels/countByType");
    const images = [
        "https://picsum.photos/300/300",
        "https://picsum.photos/300/300",
        "https://picsum.photos/300/300",
        "https://picsum.photos/300/300",
        "https://picsum.photos/300/300",
    ];
    return (
        <div className="pList">
            {loading ? ("loading") : (
                <>
                    {data && images.map((img, index) => (

                        <div className="pListItem" key={index}>
                        <img src={img} alt="" />

                        <div className="pListTitles">
                                <h1>{data[index]?.type}s</h1>
                            <h2>{data[index]?.count} {data[index]?.type}s</h2>
                        </div>
                    </div>
                    ))
                    }
                </>
            )
            }
        </div>
    )
}

export default PropertyList