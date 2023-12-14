import React from "react";
import './footer.css';
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer=() => {
    return (
        <footer className="footer1">
        <div className="container1">
            <div className="row1">
                <div className="footer-col1">
                    <h4>Clinic</h4>
                    <ul>
                    <li><a href="/">Home</a></li>
                        <li><a href="/AboutUS">about us</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/#stories">Stories</a></li>
                    </ul>
                </div>
                <div className="footer-col1">
                    <h4>Specializations</h4>
                    <ul>
                        <li><a href="#">Spine Surgeon (Ortho)</a></li>
                        <li><a href="#">Spine And Pain Specialist</a></li>
                        <li><a href="#">Orthopedic surgeon</a></li>
                        <li><a href="#">Joint Replacement Surgeon</a></li>
                    </ul>
                </div>
                <div className="footer-col1">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">phone number : +9111111111</a></li>
                        <li><a href="#">Online Payment available</a></li>
                        <li><a href="#">Book Appiontments</a></li>
                    </ul>
                </div>
                <div className="footer-col1">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaSquareFacebook /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
   </footer>
    )
}
export default Footer;