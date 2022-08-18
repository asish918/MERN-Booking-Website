import { format } from "date-fns"
import { useState } from "react"
import { DateRange } from "react-date-range"
import { useLocation } from "react-router-dom"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import SearchItem from "../../components/searchItem/SearchItem"
import './list.css'

const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)

    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="listItem">
                            <label htmlFor="">Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="listItem">
                            <label htmlFor="">Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MMM/yyyy")} to ${format(date[0].endDate, "dd/MMM/yyyy")}`}</span>
                            {openDate &&
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    minDate={new Date()}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                // className="date"
                                />
                            }
                            <div className="listItem">
                                <label htmlFor="">Options</label>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Min price <small>per night</small></span>
                                    <input type="number" className="listOptionInput" />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Max price <small>per night</small></span>
                                    <input type="number" className="listOptionInput" />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Adult</span>
                                    <input type="number" min={1} className="listOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Children</span>
                                    <input type="number" min={0} className="listOptionInput" placeholder={options.children} />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Room</span>
                                    <input type="number" min={1} className="listOptionInput" placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List