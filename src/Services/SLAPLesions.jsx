import React from 'react';
import SLAPimg from '../assets/SLAPLesionsmain.jpg';

const SLAPLesions = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={SLAPimg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Shoulder SLAP (Tear) Lesions</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>A SLAP (Superior Labrum Anterior to Posterior) tear is a type of shoulder injury that affects the labrum, a ring of cartilage that surrounds the shoulder socket. Let's delve into the description, symptoms, causes, diagnosis, and treatment associated with SLAP lesions.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>A SLAP tear involves a specific area of the labrum located at the top (superior) part of the shoulder joint. It can result from acute trauma, such as a fall on an outstretched arm, or from repetitive overhead movements.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Presence of SLAP Lesions:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Shoulder Pain:</strong> Persistent pain deep within the shoulder joint.</li>
                                <li><strong>Popping or Clicking:</strong> Audible popping or clicking sounds during shoulder movements.</li>
                                <li><strong>Weakened Shoulder:</strong> Weakness or instability in the affected shoulder.</li>
                                <li><strong>Decreased Range of Motion:</strong> Limited range of motion, especially overhead.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes of SLAP Lesions:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Trauma:</strong> Acute trauma to the shoulder, such as a fall or a direct blow.</li>
                                <li><strong>Overuse:</strong> Repetitive overhead movements, common in athletes like baseball pitchers.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for SLAP Lesions:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Physical Examination: </strong> The physician conducts a thorough physical examination, assessing range of motion, stability, and specific shoulder tests.</li>
                                <li><strong>Imaging Studies: </strong> MRI or arthroscopy may be recommended to visualize the labrum and identify the SLAP tear.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities for SLAP Lesions:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <li><strong>Conservative Approaches:</strong> Physical therapy and activity modification to strengthen the shoulder muscles and reduce symptoms.</li>
                                <li><b>Arthroscopic Repair:</b> Surgical intervention, such as arthroscopic repair, may be considered for severe cases.</li>
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of SLAP Lesion Treatment:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
                                <li><b>Postoperative Stiffness:</b> Limited range of motion in the shoulder following surgery.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SLAPLesions;
