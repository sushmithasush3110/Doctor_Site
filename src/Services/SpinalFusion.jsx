import React from 'react';
import SpinalFusionImg from '../assets/spinal.jpg';

const SpinalFusion = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={SpinalFusionImg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Spinal Fusion</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Spinal fusion is a surgical procedure that involves joining two or more vertebrae in the spine to eliminate motion between them. This procedure is often performed to treat conditions such as spinal instability, deformities, or degenerative disc diseases.</p>

                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>During spinal fusion, the surgeon places bone or bone-like material within the space between two spinal vertebrae. Metal plates, screws, or rods may also be used to stabilize the spine and facilitate the fusion process.</p>

                            <h4>Symptoms:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Spinal Fusion:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Chronic Back Pain:</strong> Persistent back pain that does not respond to conservative treatments.</li>
                                <li><strong>Spinal Instability:</strong> Abnormal movement or alignment of the spine.</li>
                                <li><strong>Deformities:</strong> Spinal deformities such as scoliosis or kyphosis.</li>
                                <li><strong>Disc Degeneration:</strong> Degenerative disc diseases causing pain and discomfort.</li>
                            </ol>

                            <h4>Causes:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Spinal Fusion:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Spinal Instability:</strong> Resulting from trauma, degenerative conditions, or spinal deformities.</li>
                                <li><strong>Disc Degeneration:</strong> Breakdown of spinal discs leading to pain and instability.</li>
                                <li><strong>Scoliosis or Kyphosis:</strong> Abnormal curvature of the spine.</li>
                                <li><strong>Spinal Stenosis:</strong> Narrowing of the spinal canal causing pressure on nerves.</li>
                            </ol>

                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Spinal Fusion:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Physical Examination:</strong> Evaluation of the patient's medical history and physical examination to assess spinal symptoms and function.</li>
                                <li><strong>Imaging Studies:</strong> X-rays, MRI, or CT scans to visualize the spine and identify abnormalities.</li>
                                <li><strong>Discography:</strong> Injecting contrast dye into spinal discs to identify painful discs.</li>
                            </ol>

                            <h4>Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Spinal Fusion:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <li><strong>Interbody Fusion:</strong> Placement of bone graft or artificial material between vertebrae.</li>
                                <li><b>Posterior Fusion:</b> Fusion from the back of the spine using rods and screws.</li>
                                <li><b>Anterior Fusion:</b> Fusion from the front of the spine, often used for cervical spine issues.</li>
                                <li><b>Instrumentation:</b> Use of metal plates, screws, or rods to stabilize the spine during fusion.</li>
                            </ul>

                            <h4>Recovery and Rehabilitation:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Recovery Following Spinal Fusion:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <li><strong>Postoperative Care:</strong> Follow specific postoperative care instructions, including pain management and wound care.</li>
                                <li><b>Physical Therapy:</b> Rehabilitation exercises to restore spine strength, flexibility, and function.</li>
                                <li><b>Restricted Activities:</b> Limit certain activities to promote proper healing.</li>
                            </ul>

                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Spinal Fusion:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
                                <li><b>Implant Issues:</b> Complications related to metal implants, such as breakage or displacement.</li>
                                <li><b>Nonunion:</b> Failure of the bones to fuse properly.</li>
                                <li><b>Adjacent Segment Disease:</b> Degeneration of adjacent spinal segments over time.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpinalFusion;
