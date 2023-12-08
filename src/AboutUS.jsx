import React from 'react'
import docimg from './assets/docimg.png'
import './AboutUS.css';
const AboutUS = () => {
    return (
        <div className='abt'>
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
            <div className='main1'>
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

            <div className='con1'>
                <div className='subcontainer'>
                    <div className='background1'>
                        <div className='bg1'>
                            <h2>Education:</h2>
                            <p>MBBS - University of Kathmandu, 2003<br />
                                MS - Orthopaedics - Sardar Patel Post Graduate Institute of Dental Medical Sciences, 200<br />
                                M.Ch - Orthopaedics - University Of Dundee, Scotland, 2011</p>
                        </div>
                    </div>
                </div>
                <div className='container1'>
                    <div className='subcontainer1'>
                        <h2 className='bg2'>Experience:</h2>
                        <p>2006 - 2009 Senior Registrar at Nizam Institute of Medical Sciences.</p>
                        <p>2009 - 2010 Junior Consultant at Apollo Hospital</p>
                        <p>2010 - 2011 Fellowship at Nine wells Hospitals Dundee</p>
                        <p>2011 - Present Connsultant Orthopedic Surgeon at Apollo Hospital</p>
                        <p>2016 - 2016 Consultant Orthopaedic Surgeon at kims Hospital Kondapur</p>
                        <p>2016 - 2018 Global Cheif & Head of Department at Gleneagles Global Hospital, Lakdikapul</p>
                        <p>2019 - 2019 senior consultant spine and arthroscopy surgeon kims kondapur at kims hospital kondapur</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AboutUS