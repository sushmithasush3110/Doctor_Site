import React from "react";
import './navbar.css';
import logo from '../../assets/logo1.jpg';
import { Link } from 'react-scroll';
const Navbar=() => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="navMenu">
                <Link className="navmenulistitems">Home</Link>
                <Link className="navmenulistitems">About us</Link>
                <Link className="navmenulistitems">Services</Link>
                <Link className="navmenulistitems">Specializations</Link>
                <Link className="navmenulistitems">Stories</Link>
                <Link className="navmenulistitems">Contact us</Link>
            </div>

            <button className="navBtn">Appointments</button>
        </nav>
    )
}
export default Navbar;