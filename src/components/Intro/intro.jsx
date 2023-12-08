import React from "react";
import './intro.css';
import headerimg from '../../assets/doctors-stethoscope-white-background.jpg'

const Intro=() => {
    return (
        <section id="intro">
            <div className="introcontent">
                <p className="intropara">
                <span className="headtext"> <span className="hello">Hello, </span>I'm <span className="name">Dr.Ajay Kumar Parchuri</span> Orthopedic Surgeon
                </span>
                </p>
                
                <p className="intropara">I am a Orthopedic Excellence: Expert Care for<br/> Your Mobility and Well-being</p>
            </div>
            <img src={ headerimg } alt="HeaderImage" className="bg"></img>
            
        </section>
    )
}
export default Intro;