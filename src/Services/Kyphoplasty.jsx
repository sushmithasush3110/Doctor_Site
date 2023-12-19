import React from 'react';
import KyphoplastyImg from '../assets/KyphoplastyMain.jpg';

const Kyphoplasty = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={KyphoplastyImg} alt="" className='' style={{ width: "100%" }} />
                    {/* <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Kyphoplasty</h2>
                    </div> */}
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Kyphoplasty is a minimally invasive surgical procedure designed to treat vertebral compression fractures. Explore the description, symptoms, causes, diagnosis, and treatment associated with kyphoplasty.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>It involves the insertion of a balloon-like device into the fractured vertebra, followed by the injection of bone cement. This helps restore vertebral height, alleviate pain, and stabilize the fractured area.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Kyphoplasty:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Severe Back Pain:</strong> Intense and persistent pain in the back, especially after a sudden movement or injury.</li>
                                <li><strong>Loss of Vertebral Height:</strong> Observable reduction in vertebral height due to compression fractures.</li>
                                <li><strong>Limited Spinal Mobility:</strong> Difficulty in bending or twisting the spine.</li>
                                <li><strong>Deformity:</strong> Development of a hunchback or kyphosis.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Kyphoplasty:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Osteoporosis:</strong> Weakening of the bones, often seen in postmenopausal women and the elderly.</li>
                                <li><strong>Trauma:</strong> Fractures resulting from a fall or accident.</li>
                                <li><strong>Metastatic Cancer:</strong> Spread of cancer to the spine, causing fractures.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Kyphoplasty:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Imaging:</strong> Evaluation of the patient's medical history and imaging studies, such as X-rays or MRI, to identify vertebral compression fractures.</li>
                                <li><strong>Physical Examination:</strong> Assessment of spinal mobility and neurological function.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Kyphoplasty:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Balloon Insertion:</strong> Placement of a balloon-like device to create space in the fractured vertebra.</li>
                                    <li><b>Cement Injection:</b> Introduction of bone cement to stabilize the vertebral fracture.</li>
                                    <li><b>Restoration of Vertebral Height:</b> The procedure aims to restore vertebral height and reduce pain.</li>
                                    <li><b>Pain Relief:</b> Alleviation of pain associated with vertebral compression fractures.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Kyphoplasty:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at the insertion site.</li>
                                    <li><b>Bleeding:</b> Bleeding within the vertebral body or at the insertion site.</li>
                                    <li><b>Allergic Reaction:</b> Rare instances of an allergic reaction to the bone cement.</li>
                                    <li><b>Fracture:</b> Possible risk of new fractures in adjacent vertebrae.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kyphoplasty;
