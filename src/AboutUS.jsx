import React from 'react';
import docimg from './assets/docimg.png';
import { Container, Row, Col } from 'react-bootstrap';
import BannerImg from './assets/title_bg.jpg';
import './AboutUS.css';

const AboutUS = () => {
    return (
        <div className='abt'>
            <div className='container-fluid position-relative' style={{ padding: "0px" }}>
                <div className="col-md-12">
                    <img src={BannerImg} alt="" className='' style={{ width: "100%" }} />
                </div>
                <div className='position-absolute text-white' style={{top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
                    <h1>About US</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row maininfo'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-4'>
                                {/* <div className='col-md-6 doctorimg'> */}
                                <img src={docimg} alt="Doctor Ajay Kumar Image" style={{ width: '90%', paddingLeft: '60px' }} />
                            </div>
                            <div className='col-md-8 docinfo' style={{ right: '0', padding: '40px 20px' }}>
                                {/* <div className='col-md-6 docinfo position-absolute' style={{right:'0', padding:'45px 25px 0 0'}}> */}
                                <p>Dr. Ajay Kumar Paruchuri after completion of P.G from Sardar Patel University as the best
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
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: '#f2f2f2', padding: '40px' }}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="row">
                            <div className='col-md-6' style={{ padding: "20px" }}>

                                <div className="row">
                                    <div className="col-md-12" style={{ background: "#fff", padding: "42px" }}>
                                        <div className='row'>
                                            <div className='col-md-12'><h3 style={{color:'#5590ed'}}>Registrations:</h3>
                                                <p>55395 Andhra Pradesh Medical Council, 2006</p></div>
                                        </div>
                                        <div className="row">
                                            <hr/>
                                        </div>
                                        <div className="row">
                                            <br/>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'><h3 style={{color:'#5590ed'}}>Awards and Recognizations:</h3>
                                                <p>Performed 3000 Spinal Surgeries.</p></div>
                                        </div>
                                        <div className="row">
                                            <hr/>
                                            <div className="row">
                                            <br/>
                                        </div>
                                        
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'><h3 style={{color:'#5590ed'}}>Education:</h3>
                                                <p>MBBS - University of Kathmandu, 2003<br />
                                                    MS - Orthopaedics - Sardar Patel Post Graduate Institute of Dental Medical Sciences, 200<br />
                                                    M.Ch - Orthopaedics - University Of Dundee, Scotland, 2011</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6' style={{ padding: "20px" }}>
                                <div className='row'>
                                    <div className="col-md-12" style={{ background: "#fff", padding: "30px" }}>
                                        <h2 style={{color:'#5590ed'}}>Experience:</h2>
                                        <p>2006 - 2009 Senior Registrar at Nizam Institute of Medical Sciences.</p>
                                        <p>2009 - 2010 Junior Consultant at Apollo Hospital</p>
                                        <p>2010 - 2011 Fellowship at Nine wells Hospitals Dundee</p>
                                        <p>2011 - Present Consultant Orthopedic Surgeon at Apollo Hospital</p>
                                        <p>2016 - 2016 Consultant Orthopaedic Surgeon at KIMS Hospital Kondapur</p>
                                        <p>2016 - 2018 Global Chief & Head of Department at Gleneagles Global Hospital, Lakdikapul</p>
                                        <p>2019 - 2019 Senior Consultant Spine and Arthroscopy Surgeon at KIMS Hospital Kondapur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Row className='main1'>
          <Col lg={6} className='secondsec'>
            <div className='secondcard'>
              <h2 className='head'>Registrations:</h2>
              <p>55395 Andhra Pradesh Medical Council, 2006</p>
            </div>
          </Col>

          <Col lg={6} className='secondsec1'>
            <div className='secondcard'>
              <h2 className='head'>Awards and Recognizations:</h2>
              <p>Performed 3000 Spinal Surgeries.</p>
            </div>
          </Col>
        </Row>

        <Row className='con1'>
          <Col lg={6} className='subcontainer'>
            <div className='background1'>
              <div className='bg1'>
                <h2>Education:</h2>
                <p>MBBS - University of Kathmandu, 2003<br />
                  MS - Orthopaedics - Sardar Patel Post Graduate Institute of Dental Medical Sciences, 200<br />
                  M.Ch - Orthopaedics - University Of Dundee, Scotland, 2011</p>
              </div>
            </div>
          </Col>

          <Col lg={6} className=''>
            <h2 className=''>Experience:</h2>
            <p>2006 - 2009 Senior Registrar at Nizam Institute of Medical Sciences.</p>
            <p>2009 - 2010 Junior Consultant at Apollo Hospital</p>
            <p>2010 - 2011 Fellowship at Nine wells Hospitals Dundee</p>
            <p>2011 - Present Consultant Orthopedic Surgeon at Apollo Hospital</p>
            <p>2016 - 2016 Consultant Orthopaedic Surgeon at KIMS Hospital Kondapur</p>
            <p>2016 - 2018 Global Chief & Head of Department at Gleneagles Global Hospital, Lakdikapul</p>
            <p>2019 - 2019 Senior Consultant Spine and Arthroscopy Surgeon at KIMS Hospital Kondapur</p>
          </Col>
        </Row> */}

        </div>
    );
};

export default AboutUS;
