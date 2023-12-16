import React from 'react';
import Hipkneeimg from './Hipkneeimgmain.jpg';

const HipKneeArthroplasty = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={Hipkneeimg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Primary Hip and Knee Arthroplasty</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Primary Hip and Knee Arthroplasty is a surgical procedure that involves the replacement of a damaged or arthritic hip or knee joint with an artificial joint, known as a prosthesis. Let's delve into the description, symptoms, causes, diagnosis, and treatment associated with hip and knee arthroplasty.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>It involves the removal of the damaged joint surfaces and replacing them with prosthetic components. This procedure is commonly performed to relieve pain, improve joint function, and enhance the quality of life for individuals with severe hip or knee joint conditions.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Arthroplasty:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Persistent Joint Pain:</strong> Chronic pain in the hip or knee that does not respond to conservative treatments.</li>
                                <li><strong>Reduced Range of Motion:</strong> Difficulty moving the hip or knee through its full range of motion.</li>
                                <li><strong>Joint Stiffness:</strong> Stiffness in the hip or knee that limits daily activities.</li>
                                <li><strong>Functional Impairment:</strong> Significant impairment in daily activities due to hip or knee joint issues.</li>
                                <li><strong>Joint Deformity:</strong> Structural deformities or abnormalities in the hip or knee joint.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Arthroplasty:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Osteoarthritis: </strong> Degenerative wear and tear of the hip or knee joint.</li>
                                <li><strong>Rheumatoid Arthritis:</strong> Autoimmune disorder affecting the hip or knee joint.</li>
                                <li><strong>Post-Traumatic Arthritis: </strong> Arthritis developing after a severe hip or knee injury.</li>
                                <li><strong>Avascular Necrosis:</strong> Loss of blood supply leading to hip or knee joint deterioration.</li>
                                <li><strong>Other Joint Conditions:</strong> Conditions such as hip dysplasia or congenital abnormalities.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Arthroplasty:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Physical Examination: </strong>The physician evaluates the patient's medical history and conducts a physical examination to assess hip or knee joint symptoms and function.</li>
                                <li><strong>Imaging Studies: </strong>X-rays, MRI, or CT scans may be ordered to visualize the hip or knee joint's internal structures and identify any abnormalities.</li>
                                <li><strong>Joint Aspiration:</strong> Fluid may be aspirated from the joint to assess for signs of infection or inflammation.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Arthroplasty:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Joint Replacement Surgery:</strong> Surgical replacement of the damaged hip or knee joint with prosthetic components.</li>
                                    <li><b>Minimally Invasive Techniques:</b> Some procedures may be performed using minimally invasive techniques to reduce recovery time.</li>
                                    <li><b>Rehabilitation:</b> Postoperative rehabilitation and physical therapy to promote joint function and mobility.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Arthroplasty:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
                                    <li><b>Blood Clots:</b> Formation of blood clots in the legs or lungs.</li>
                                    <li><b>Implant Dislocation:</b> Dislocation of the artificial joint components.</li>
                                    <li><b>Implant Wear:</b> Wear and tear of prosthetic components over time.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HipKneeArthroplasty;
