import React from 'react'
import SpinalSurgeryImg from './SpinalSurgeryMain.jpg'

const SpinalSurgery = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={SpinalSurgeryImg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Spinal Surgery</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Spinal Surgery is a medical procedure that involves the examination and treatment of the spine using specialized surgical techniques. Let's delve into the description, symptoms, causes, diagnosis, and treatment associated with spinal surgery.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>It involves the surgical intervention of the spine to address various conditions. This may include procedures such as spinal fusion, disc replacement, decompression surgeries, and other techniques aimed at relieving spinal issues.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Spinal Surgery:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Chronic Back Pain:</strong> Persistent and severe back pain that does not respond to conservative treatments.</li>
                                <li><strong>Radiating Pain:</strong> Pain that radiates down the legs or arms, indicating potential nerve compression.</li>
                                <li><strong>Numbness or Tingling:</strong> Numbness or tingling sensations in the extremities.</li>
                                <li><strong>Muscle Weakness:</strong> Progressive muscle weakness in the limbs.</li>
                                <li><strong>Loss of Bowel or Bladder Control:</strong> Severe cases may involve loss of bowel or bladder control, indicating a serious spinal issue.</li>
                                <li><strong>Spinal Deformities:</strong> Structural deformities of the spine, such as scoliosis.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Spinal Surgery:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Herniated Discs:</strong> Bulging or herniated discs causing nerve compression.</li>
                                <li><strong>Spinal Stenosis:</strong> Narrowing of the spinal canal, putting pressure on the nerves.</li>
                                <li><strong>Spinal Fractures:</strong> Fractures of the vertebrae due to trauma or osteoporosis.</li>
                                <li><strong>Degenerative Disc Disease:</strong> Wear and tear of spinal discs leading to pain and instability.</li>
                                <li><strong>Spinal Tumors:</strong> Abnormal growths in or around the spine requiring surgical removal.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Spinal Surgery:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Physical Examination: </strong>The physician evaluates the patient's medical history and conducts a physical examination to assess spinal symptoms and function.</li>
                                <li><strong>Imaging Studies: </strong>X-rays, MRI, or CT scans may be ordered to visualize the spine's internal structures and identify any abnormalities.</li>
                                <li><strong>Electromyography (EMG): </strong> In some cases, EMG may be performed to assess nerve and muscle function.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Spinal Surgery:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Spinal Fusion:</strong> Surgical fusion of vertebrae to stabilize the spine.</li>
                                    <li><b>Disc Replacement:</b> Replacement of damaged spinal discs with artificial ones.</li>
                                    <li><b>Decompression Surgeries:</b> Procedures to relieve pressure on nerves, such as laminectomy or discectomy.</li>
                                    <li><b>Spinal Instrumentation:</b> Use of implants and instrumentation to support the spine during fusion.</li>
                                    <li><b>Tumor Removal:</b> Surgical removal of spinal tumors.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Spinal Surgery:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
                                    <li><b>Bleeding:</b> Bleeding during or after surgery.</li>
                                    <li><b>Nerve Damage:</b> Rare instances of damage to nerves during surgery.</li>
                                    <li><b>Implant-related Issues:</b> Complications related to spinal implants.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpinalSurgery
