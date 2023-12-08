import React from 'react'
import docimg from './assets/docimg.png'
import './AboutUS.css';
const AboutUS = () => {
    return (
        <div>
            <div className='maininfo'>
                <img src={docimg} alt="Doctor Ajay kumar Image" className='doctorimg' />
                <div className="docinfo">
                    <p>Dr. Ajay Kumar Paruchuri after completion of P.G from Sardar Patel University as best
                        outgoing P.G in Orthopedics joined Nizam Institute of Medical Sciences as a Senior
                        Registrar with PadmaShri Prof. L. Narendranath and Dr. V. Surya Prakash Rao during
                        his tenure at Nizam Institute of Medical Sciences performed complex trauma, assisted
                        various Joint-preserving and replacement surgeries.</p>
                    <p>Also worked with Prof. V.B.N Prasad Head of Department Orthopedic Surgeon. Assisted
                        him in various Hip and Knee Reconstructive surgeries.</p>
                    <p>He has vast experience with Ilizarov Ring Fixture for deformation correction and Limb
                        Lengthening. During the course of work as Junior, Consultant with Dr. J.C Pingle in
                        Apollo Hospital performed various Joint Replacement procedures and Arthroscopy procedures.
                        During his fellowship program in the United Kingdom under Prof. Carlos Wigderowitz who was
                        eminent Upper Limb, Reconstructive Surgeon assisted his various surgeries.</p>
                    <p>He educates and tries to understand the problem of the patient before treating
                        and providing the necessary surgery. He performed about 2000 Joint Replacement and
                        Arthroscopic Reconstructive Surgeries. He is also specified in Micro Endoscopy Discectomies.</p>

                </div>
            </div>
            <div className='main'>
                <div className='secondsec'>
                    <div className='secondcard'>
                    <h2 className='head'>Registrations:</h2>
                    <p>55395 Andhra Pradesh Medical Council, 2006</p>
                    </div>
                </div>
                <div className='secondsec1'>
                    <div className='secondcard'>
                        <h2 className='head'>Awards and Recognizations:</h2>
                        <p>Performed 3000 Spinal Surgeries.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AboutUS