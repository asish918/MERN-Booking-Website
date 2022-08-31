import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {

    const [sliderNumber, setSliderNumber] = useState(0)
    const [openSlider, setOpenSlider] = useState(false)

    const handleOpen = (i) => {
        setSliderNumber(i);
        setOpenSlider(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction==="l") {
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
                    <FontAwesomeIcon onClick={() => setOpenSlider(false)} icon={faCircleXmark} className="close"/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={Photos[sliderNumber].src} alt="" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")}/>
                </div>
            }
            <div className="hotelContainer">

                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <div className="hotelDistance">
                        Excellent Location - 500m from center
                    </div>
                    <div className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
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
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDescription">
                                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków–Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>

            <MailList />
            <Footer />
        </div>
    )
}

export default Hotel