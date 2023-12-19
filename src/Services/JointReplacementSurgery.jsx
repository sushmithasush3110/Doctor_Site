import React from 'react'
import JointReplacementImg from '../assets/JointReplacementMain.jpg'

const JointReplacementSurgery = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={JointReplacementImg} alt="" className='' style={{ width: "100%" }} />
                    {/* <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Joint Replacement Surgery</h2>
                    </div> */}
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Joint Replacement Surgery is a medical procedure that involves replacing a damaged or worn-out joint with an artificial joint or prosthesis. Explore the details of this surgical intervention, including its description, symptoms, causes, diagnosis, and treatment.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>This surgery entails the removal of the damaged joint components and the implantation of an artificial joint made of metal, plastic, or ceramic. Common joint replacements include hips and knees, aiming to relieve pain and restore joint function.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Joint Replacement Surgery:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Severe Joint Pain:</strong> Persistent and severe pain that hinders daily activities.</li>
                                <li><strong>Limitation in Mobility:</strong> Significant restrictions in joint movement affecting daily life.</li>
                                <li><strong>Joint Stiffness:</strong> Persistent stiffness, especially after periods of inactivity.</li>
                                <li><strong>Chronic Swelling:</strong> Long-term swelling and inflammation in the joint.</li>
                                <li><strong>Failure of Conservative Treatments:</strong> Ineffectiveness of non-surgical treatments for pain relief.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Joint Replacement Surgery:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Osteoarthritis:</strong> Degenerative joint disease causing the breakdown of joint cartilage.</li>
                                <li><strong>Rheumatoid Arthritis:</strong> Autoimmune disorder leading to joint inflammation and damage.</li>
                                <li><strong>Post-Traumatic Arthritis:</strong> Joint damage resulting from injuries or fractures.</li>
                                <li><strong>Joint Deformities:</strong> Abnormalities in joint structure affecting function.</li>
                                <li><strong>Avascular Necrosis:</strong> Loss of blood supply to the joint, causing bone death.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Joint Replacement Surgery:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical Evaluation:</strong> Assessment of medical history and physical examination to determine joint condition.</li>
                                <li><strong>Imaging Studies:</strong> X-rays, MRI, or CT scans to visualize joint anatomy and assess damage.</li>
                                <li><strong>Orthopedic Consultation:</strong> Consultation with an orthopedic surgeon for evaluation and treatment planning.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Joint Replacement Surgery:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Joint Replacement:</strong> Surgical removal of damaged joint components and replacement with an artificial prosthesis.</li>
                                    <li><b>Rehabilitation:</b> Post-surgery physical therapy to enhance joint function and recovery.</li>
                                    <li><b>Pain Management:</b> Medications and therapies to manage post-surgical pain.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Joint Replacement Surgery:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
                                    <li><b>Implant Loosening:</b> Gradual loosening of the artificial joint over time.</li>
                                    <li><b>Blood Clots:</b> Formation of blood clots in the legs or lungs.</li>
                                    <li><b>Nerve or Blood Vessel Damage:</b> Rare instances of damage to nearby nerves or blood vessels.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JointReplacementSurgery
