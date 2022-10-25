import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import ReserveModal from '../../components/reserveModal/ReserveModal'

const Hotel = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [sliderNumber, setSliderNumber] = useState(0)
    const [openSlider, setOpenSlider] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const { data, loading, error } = useFetch(`http://localhost:8000/api/hotels/find/${id}`)

    const { dates, options } = useContext(SearchContext)
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2 - date1);
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const days = dayDifference(dates[0].endDate.getTime(), dates[0].startDate.getTime());

    const handleOpen = (i) => {
        setSliderNumber(i);
        setOpenSlider(true);
    }

    const handleClick = () => {
        if(user){
            setOpenModal(true);
        } else {
            navigate("/login")
        }
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
        }
        else {
            newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
        }

        setSliderNumber(newSlideNumber)
    }

    const Photos = [
        {
            src: "https://picsum.photos/id/1/300/300"
        },
        {
            src: "https://picsum.photos/id/2/300/300"
        },
        {
            src: "https://picsum.photos/id/3/300/300"
        },
        {
            src: "https://picsum.photos/id/4/300/300"
        },
        {
            src: "https://picsum.photos/id/5/300/300"
        },
        {
            src: "https://picsum.photos/id/6/300/300"
        },
        {
            src: "https://picsum.photos/id/7/300/300"
        },
    ]

    return (
        <div>
            <Navbar />
            <Header type='list' />

            {openSlider &&
                <div className="slider">
                    <FontAwesomeIcon onClick={() => setOpenSlider(false)} icon={faCircleXmark} className="close" />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={Photos[sliderNumber].src} alt="" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                </div>
            }
            {loading ? ("Loading") : (

                <div className="hotelContainer">

                    <div className="hotelWrapper">
                        <button onClick={handleClick} className="bookNow">Reserve or Book Now!</button>
                        <h1 className="hotelTitle">{data.name}</h1>
                        <div className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.address}</span>
                        </div>
                        <div className="hotelDistance">
                            Excellent Location - {data.distance}m from center
                        </div>
                        <div className="hotelPriceHighlight">
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                        </div>
                        <div className="hotelImages">
                            {Photos.map((photo, index) => (
                                <div className="hotelImgWrapper">
                                    <img src={photo.src} onClick={() => handleOpen(index)} alt="" className="hotelImg" />
                                </div>
                            ))}
                        </div>

                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">{data.title}</h1>
                                <p className="hotelDescription">
                                    {data.description}
                                </p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a {days}-night stay!</h1>
                                <span>
                                    Located in the real heart of Krakow, this property has an
                                    excellent location score of 9.8!
                                </span>
                                <h2>
                                    <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                                </h2>
                                <button>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {openModal && <ReserveModal setOpen={setOpenModal} hotelId={id} />}

            <MailList />
            <Footer />
        </div>
    )
}

export default Hotel