import React from 'react';
import BannerImg from '../assets/banner.jpg';

function Banner() {
    return (
        <>
            <div className='container-fluid position-relative' style={{ padding: "0px" }}>
                <div className="col-md-12">
                    <img src={BannerImg} alt="" className='' style={{ width: "100%" }} />
                </div>
                <div className='position-absolute' style={{top:'50%',right:'50%', transform:'translate(80%,5%)', lineHeight:'130%', fontSize:'27px',fontWeight:'600', lineHeight:'28px'}}>
                    <p>Hello,I'm <span style={{fontSize:'25px'}}>Dr.Ajay Kumar Parchuri</span> Orthopedic Surgeon<br/>
                    I am a Orthopedic Excellence: Expert Care for<br/>Your Mobility and Well-being</p>
                </div>
            </div>
        </>
    )
}

export default Banner;