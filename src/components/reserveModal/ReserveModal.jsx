import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./reserve.css"
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";

const ReserveModal = ({ setOpen, hotelId }) => {
    const [selectedRooms, setSelectedRooms] = useState([]);

    const { data, loading, error } = useFetch(`http://localhost:8000/api/hotels/room/${hotelId}`);

    const { dates } = useContext(SearchContext);

    const getRangeDates = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let list = [];

        while (date <= end) {
            list.push(new Date().getTime());
            date.setDate(date.getDate() + 1);
        }

        return list;
    }

    const allDates = getRangeDates(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date => allDates.includes(new Date(date).getTime()));

        return !isFound;
    }

    const handleSelect = (e) => {
        const selected = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(selected ? [...selectedRooms, value] : selectedRooms.filter(item => item !== value));
    }

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            await Promise.all(selectedRooms.map(roomId => {
                const res = axios.put(`http://localhost:8000/api/room/availability/${roomId}`, {dates: allDates});
                return res.data;
            }))
            setOpen(false);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="reserve">
            <div className="reserveContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="reserveClose" onClick={() => setOpen(false)} />
                <span>Select your rooms:</span>
                {data.map((item, index) => (
                    <div className="reserveItem" key={index}>
                        <div className="reserveItemInfo">
                            <div className="reserveTitle">{item.title}</div>
                            <div className="reserveDesc">{item.desc}</div>
                            <div className="reserveMax">Max people: <b> {item.maxPeople}</b></div>
                            <div className="reservePrice">{item.price}</div>
                        </div>

                        <div className="reserveSelectRooms">

                            {item.roomNumbers.map((roomNumber, index) => (
                                <div className="room" key={index}>
                                    <label htmlFor="roomSelect">{roomNumber.number}</label>
                                    <input id="roomSelect" type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="reserveButton">Reserve Now</button>
            </div>
        </div>
    )
}

export default ReserveModal;