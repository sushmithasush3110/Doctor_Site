import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './testimonial.css'
export default function TestimonialCard({name, tagline, content}) {
    return (
        <>
         
        <div className="testimonial">
            <div className="firsttest">
                <div className="innercard">
                    <p>{name}</p>
                    <h3>{tagline}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </div>
        </>
    );
}