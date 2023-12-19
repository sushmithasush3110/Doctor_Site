import React from 'react'
import SpinalDeformityImg from '../assets/SpinalDeformityCorrection.jpg';

const SpinalDeformityCorrection = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={SpinalDeformityImg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#d6d5d5', color: 'black', borderRadius: '20px' }}>
                        <h2>Spinal Deformity Correction</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Spinal deformity correction is a surgical
                                procedure that aims to address and rectify abnormal curvature or alignment of the spine. Let's explore the details of this procedure, including its description, symptoms, causes, diagnosis, and treatment.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>This surgical procedure involves the realignment of the spine to correct deformities such as scoliosis (sideways curvature), kyphosis (forward rounding), or lordosis (backward bending). It may utilize various techniques and instrumentation to achieve proper spinal alignment.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Spinal Deformity Correction:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Back Pain:</strong> Persistent and severe back pain.</li>
                                <li><strong>Visible Curvature:</strong> Abnormal curvature of the spine visible to the naked eye.</li>
                                <li><strong>Difficulty Breathing:</strong> Severe deformities may affect lung function and cause breathing difficulties.</li>
                                <li><strong>Limited Range of Motion:</strong> Restricted movement due to spinal deformities.</li>
                                <li><strong>Neurological Symptoms:</strong> Numbness, weakness, or tingling in the extremities.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Spinal Deformity Correction:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Idiopathic Scoliosis:</strong> Unknown cause leading to sideways curvature.</li>
                                <li><strong>Congenital Deformities:</strong> Abnormalities present at birth.</li>
                                <li><strong>Neuromuscular Conditions:</strong> Conditions affecting muscles and nerves.</li>
                                <li><strong>Degenerative Conditions:</strong> Wear and tear of spinal discs causing deformities.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Spinal Deformity Correction:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Physical Examination: </strong>Evaluation of the patient's medical history and a thorough physical examination.</li>
                                <li><strong>Imaging Studies: </strong>X-rays, CT scans, or MRI to visualize the spine's structure and curvature.</li>
                                <li><strong>Neurological Assessment:</strong> Evaluation of neurological function to assess any nerve-related issues.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Spinal Deformity Correction:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Surgical Correction:</strong> Realignment of the spine through surgical procedures.</li>
                                    <li><b>Instrumentation:</b> Use of rods, screws, and other devices to support and stabilize the spine.</li>
                                    <li><b>Fusion:</b> Fusion of vertebrae to promote spinal stability.</li>
                                    <li><b>Bracing:</b> Braces may be recommended for growing individuals with scoliosis.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Spinal Deformity Correction:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
                                    <li><b>Blood Loss:</b> Surgical procedures may involve blood loss.</li>
                                    <li><b>Instrumentation Issues:</b> Complications related to implanted devices.</li>
                                    <li><b>Nerve or Spinal Cord Injury:</b> Rare instances of nerve or spinal cord damage.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SpinalDeformityCorrection;
