import React from 'react'
import servicescard from '../assets/woman-running.jpg'
import jointlogo from '../assets/Jointlogo.png'
import fracimg from '../Services/Fractureimg.jpg'
import frozimg from '../Services/sportinjury.jpg'
import shouldimg from '../assets/ShoulderArthroscopyimg.jpg'
import kneeimg from '../assets/kneearthoimg.jpg'
import rotimg from '../assets/rotimg.jpg'
import spineimg from '../assets/spinedisc.jpg'
import hipndkneeimg from '../assets/hipimg.jpg'
const Servicescard = () => {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='text-center p-3'>
                            <h3 style={{color:'rgb(62, 147, 193)'}}>Featured Services</h3>
                        </div>
                        <div className='col-md-3 p-2'>
                            <div className='row p-2'>
                                <div className="card p-0" style={{ width: '18rem' }}>
                                    <img className="card-img-top" style={{objectFit:'fill'}} src={fracimg} alt="Card image cap" />
                                    <div className="card-body p-2">
                                        <h5 className="card-title">Fracture Treatment</h5>
                                        <p className="card-text" style={{ fontSize: '14px' }}>Treatment includes immobilising the bone with a plaster cast, or surgically inserting metal rods or plates to hold the bone pieces together.</p>
                                        <a href="/Services/Fracture" className="btn btn-sm text-white" style={{background:'#28a9e0'}}>View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 p-2'>
                            <div className='row p-2'>
                                <div className="card p-0" style={{ width: '18rem' }}>
                                    <img className="card-img-top" style={{height:'170px'}} src={frozimg} alt="Card image cap" />
                                    <div className="card-body p-2">
                                        <h5 className="card-title">Frozen Shoulder</h5>
                                        <p className="card-text" style={{ fontSize: '14px' }}>Frozen shoulder includes physical therapy, pain relief medications, and, in severe cases, surgical interventions to improve joint movement.</p>
                                        <a href="/Services/Frozenshoulder" className="btn btn-sm text-white" style={{background:'#28a9e0'}}>View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 p-2'>
                            <div className='row p-2'>
                                <div className="card p-0" style={{ width: '18rem' }}>
                                    <img className="card-img-top" style={{height:'170px'}} src={shouldimg} alt="Card image cap" />
                                    <div className="card-body p-2">
                                        <h5 className="card-title">Shoulder Arthroscopy</h5>
                                        <p className="card-text" style={{ fontSize: '14px' }}>It is a minimally invasive surgical procedure to diagnose and treat shoulder joint issues using a specialized camera and instruments.</p>
                                        <a href="/Services/ShoulderArthroscopy" className="btn btn-sm text-white" style={{background:'#28a9e0'}}>View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 p-2'>
                            <div className='row p-2'>
                                <div className="card p-0" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={kneeimg} alt="Card image cap" />
                                    <div className="card-body p-2">
                                        <h5 className="card-title">Knee arthroscopy</h5>
                                        <p className="card-text" style={{ fontSize: '14px' }}>It is a minimally invasive surgical procedure involving the use of an arthroscope to diagnose and treat joint issues through small incisions.</p>
                                        <a href="/Services/KneeArthroscopy" className="btn btn-sm text-white" style={{background:'#28a9e0'}}>View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                        <div className='row p-2'>
                                <div className="card p-0" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={rotimg} alt="Card image cap" />
                                    <div className="card-body p-2">
                                        <h5 className="card-title">Rotator Cuff Injury Treatment</h5>
                                        <p className="card-text" style={{ fontSize: '14px' }}>It involves a combination of rest, physical therapy, anti-inflammatory medications, and in some cases surgical intervention to repair the damaged tendon.</p>
                                        <a href="/Services/RotatorCuffInjury" className="btn btn-sm text-white" style={{background:'#28a9e0'}}>View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                        <div className='row p-2'>
                                <div className="card p-0" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={spineimg} alt="Card image cap" />
                                    <div className="card-body p-2">
                                        <h5 className="card-title">Spinal Disc Surgery</h5>
                                        <p className="card-text" style={{ fontSize: '14px' }}>It is surgery to remove the damaged part of a disk in the spine that has its soft center pushing out through the tough outer lining. A herniated disk can irritate or press on nearby nerves.</p>
                                        <a href="/Services/SpinalDiscSurgery" className="btn btn-sm text-white" style={{background:'#28a9e0'}}>View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                        <div className='row p-2'>
                                <div className="card p-0" style={{ width: '18rem'}}>
                                    <img className="card-img-top" src={hipndkneeimg} alt="Card image cap" />
                                    <div className="card-body p-2">
                                        <h5 className="card-title">Revision Hip & Knee Arthroplasty</h5>
                                        <p className="card-text" style={{ fontSize: '14px' }}>Revision hip replacement is a longer, more complex procedure. It requires extensive planning, as well as the use of specialized implants and tools, in order to achieve a good result.</p>
                                        <a href="/Services/RevisionArthroplasty" className="btn btn-sm text-white" style={{background:'#28a9e0'}}>View more</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicescard