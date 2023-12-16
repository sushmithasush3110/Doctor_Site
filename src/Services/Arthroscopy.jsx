import React from 'react'
import Arthoimg from './Arthroscopymain.jpg'

const Arthroscopy = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={Arthoimg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Arthroscopy</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Arthroscopy is a minimally invasive surgical
                                procedure that involves the examination and treatment of the interior of a joint
                                using a specialized instrument called an arthroscope. Let's delve into the description,
                                symptoms, causes, diagnosis, and treatment associated with arthroscopy.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>It involves the insertion of a thin, flexible
                                tube with a camera (arthroscope) through small incisions near the joint. This allows the
                                surgeon to visualize the inside of the joint on a monitor. Additional small incisions may
                                be made for surgical instruments to perform procedures such as repairing ligaments, removing
                                damaged cartilage, or addressing other joint issues.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Arthroscopy:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Persistent Joint Pain:</strong> Chronic pain in a joint that does not respond to conservative treatments.</li>
                                <li><strong>Swelling and Inflammation:</strong> Recurrent or persistent swelling and inflammation in the joint.</li>
                                <li><strong>Limited Range of Motion:</strong> Difficulty moving the joint through its full range of motion.</li>
                                <li><strong>Joint Instability:</strong>  Feeling of joint instability or giving way.</li>
                                <li><strong>Locking or Catching:</strong>  Sensation of the joint locking or catching during movement.</li>
                                <li><strong>Injury or Trauma:</strong> Joint injuries, such as tears in ligaments or cartilage.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Arthroscopy:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Injuries: </strong>  Sports injuries, traumatic injuries, or accidents affecting the joint.</li>
                                <li><strong>Arthritis:</strong> Inflammatory joint conditions, such as osteoarthritis or rheumatoid arthritis.</li>
                                <li><strong>Torn Ligaments or Cartilage: </strong> Tears in the ligaments (e.g., ACL tear) or cartilage (e.g., meniscus tear).</li>
                                <li><strong>Joint Infections:</strong>Infections affecting the joint.</li>
                                <li><strong>Synovitis:</strong>Inflammation of the synovium, the lining of the joint.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Arthroscopy:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Physical Examination: </strong>The physician evaluates the patient's medical history and conducts a physical examination to assess joint symptoms and function.</li>
                                <li><strong>Imaging Studies: </strong>X-rays, MRI, or CT scans may be ordered to visualize the joint's internal structures and identify any abnormalities.</li>
                                <li><strong>Diagnostic Arthroscopy: </strong> In some cases, diagnostic arthroscopy may be performed to directly visualize the joint and assess the severity of the problem.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Arthroscopy:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Ligament or Cartilage Repair:</strong> Surgical repair of torn ligaments (e.g., ACL reconstruction) or damaged cartilage.</li>
                                    <li><b>Removal of Loose Bodies:</b> Removal of loose bone or cartilage fragments within the joint.</li>
                                    <li><b>Joint Debridement:</b> Removal of damaged or inflamed tissue to improve joint function.</li>
                                    <li><b>Synovectomy:</b> Removal of the synovium in cases of synovitis.</li>
                                    <li><b>Joint Fusion or Replacement:</b> In advanced cases of arthritis, joint fusion or replacement may be considered.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Arthroscopy:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at the incision sites.</li>
                                    <li><b>Bleeding:</b> Bleeding within the joint or at the incision sites.</li>
                                    <li><b>Nerve or Vascular Injury:</b> Rare instances of damage to nerves or blood vessels near the joint.</li>
                                    <li><b>Blood Clots:</b> Formation of blood clots in the legs.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Arthroscopy