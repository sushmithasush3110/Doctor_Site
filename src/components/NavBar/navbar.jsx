import React from "react";
import './navbar.css';
import logo from '../../assets/logo1.jpg';
const Navbar=() => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="navMenu">
                <a href="/" className="navmenulistitems">Home</a>
                <a href="/AboutUS" className="navmenulistitems">About us</a>
                <a href="/#spec" className="navmenulistitems">Specializations</a>
                <a href="/#services" className="navmenulistitems">Services</a>
                <a href="/#stories" className="navmenulistitems">Stories</a>
                <a href="/ContactUS" className="navmenulistitems">Contact us</a>
            </div>

            <button className="navBtn">Appointments</button>
        </nav>
    )
}
export default Navbar;