import React from 'react'
import RotatorCuffImg from './Rotatorcufftearimg.jpg';

const RotatorCuffInjury = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={RotatorCuffImg} alt="Rotator Cuff Injury" className='' style={{ width: "100%" }} />
                    {/* <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Rotator Cuff Injury Treatment</h2>
                    </div> */}
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Rotator cuff injury is a condition affecting the group of muscles and tendons surrounding the shoulder joint. Let's explore the symptoms, causes, diagnosis, and treatment associated with rotator cuff injuries.</p>

                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Symptoms of Rotator Cuff Injury:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <li><strong>Shoulder Pain:</strong> Persistent pain in the shoulder, especially during specific movements.</li>
                                <li><strong>Weakened Arm:</strong> Weakness in the affected arm, making certain activities challenging.</li>
                                <li><strong>Difficulty Sleeping:</strong> Discomfort or pain that interferes with sleep, particularly when lying on the affected side.</li>
                                <li><strong>Reduced Range of Motion:</strong> Limited ability to move the shoulder through its full range of motion.</li>
                                <li><strong>Crackling Sensation:</strong> A crackling or popping sensation during certain shoulder movements.</li>
                            </ul>

                            <h4>Causes:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes of Rotator Cuff Injuries:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <li><strong>Overuse or Repetitive Stress:</strong> Repeated overhead arm movements or activities that strain the shoulder.</li>
                                <li><strong>Age:</strong> Degeneration of the tendons with age, making them more susceptible to injury.</li>
                                <li><strong>Trauma:</strong> Acute injuries, such as falls or impacts, leading to rotator cuff tears.</li>
                                <li><strong>Impingement:</strong> Compression of the rotator cuff tendons in the shoulder joint.</li>
                            </ul>

                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnosis of Rotator Cuff Injuries:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <li><strong>Physical Examination:</strong> Evaluation of shoulder movement, strength, and tenderness.</li>
                                <li><strong>Imaging Tests:</strong> X-rays, MRI, or ultrasound to visualize the shoulder structures and identify tears or inflammation.</li>
                            </ul>

                            <h4>Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Approaches for Rotator Cuff Injuries:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <li><strong>Rest and Activity Modification:</strong> Avoiding activities that aggravate symptoms and allowing the shoulder to rest.</li>
                                <li><strong>Physical Therapy:</strong> Specific exercises to strengthen the shoulder muscles and improve range of motion.</li>
                                <li><strong>Medications:</strong> Pain relievers and anti-inflammatory drugs to manage pain and reduce inflammation.</li>
                                <li><strong>Corticosteroid Injections:</strong> Injections to alleviate inflammation and pain in the shoulder joint.</li>
                                <li><strong>Surgical Intervention:</strong> In cases of severe tears, surgery may be considered for repair.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RotatorCuffInjury;
