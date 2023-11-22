import React from "react";
import './intro.css';
import headerimg from '../../assets/headerimg.jpg'

const Intro=() => {
    return (
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello, </span>
                <span className="headtext">I'm <span className="name">Dr.Ajay Kumar Parchuri</span><br/> Orthopedic Surgeon
                </span>
                <p className="intropara">I am a Orthopedic Excellence: Expert Care for<br/> Your Mobility and Well-being</p>
            </div>
            <img src={ headerimg } alt="HeaderImage" className="bg"></img>
            
        </section>
    )
}
export default Intro;