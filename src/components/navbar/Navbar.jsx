import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">Booking</span>

                <div className="navItems">
                    <button className="navButton">Login</button>
                    <button className="navButton">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar