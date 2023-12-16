import React from 'react';
import DiscSurgeryImg from './DiscSurgeryMain.jpg';

const SpinalDiscSurgery = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: '0px', marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={DiscSurgeryImg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Spinal Disc Surgery</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Spinal Disc Surgery is a medical procedure
                                that involves the examination and treatment of issues related to spinal discs.
                                Let's delve into the description, symptoms, causes, diagnosis, and treatment associated with spinal disc surgery.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>It involves surgical interventions to address problems with spinal discs, such as herniated discs or degenerative disc disease. Surgeons may perform procedures like discectomy or spinal fusion to alleviate symptoms and improve spinal stability.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Spinal Disc Surgery:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Chronic Back Pain:</strong> Persistent and debilitating back pain that doesn't respond to conservative treatments.</li>
                                <li><strong>Radiating Leg Pain:</strong> Pain radiating down the legs, often associated with nerve compression.</li>
                                <li><strong>Numbness or Weakness:</strong> Numbness or weakness in the limbs, indicating nerve involvement.</li>
                                <li><strong>Loss of Bladder or Bowel Control:</strong> Severe cases may present with loss of bladder or bowel control, requiring urgent intervention.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Spinal Disc Surgery:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Herniated Disc:</strong> Rupture of the outer layer of a spinal disc, leading to compression of nearby nerves.</li>
                                <li><strong>Degenerative Disc Disease:</strong> Wear and tear of spinal discs over time, causing pain and reduced mobility.</li>
                                <li><strong>Spinal Stenosis:</strong> Narrowing of the spinal canal, putting pressure on the spinal cord and nerves.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Spinal Disc Surgery:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Physical Examination: </strong>The physician evaluates the patient's medical history and conducts a physical examination to assess spinal symptoms and neurological function.</li>
                                <li><strong>Imaging Studies: </strong>MRI or CT scans may be ordered to visualize the spine's internal structures and identify disc abnormalities.</li>
                                <li><strong>Electromyography (EMG): </strong> In some cases, EMG may be performed to assess nerve function and identify compression.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Spinal Disc Surgery:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Discectomy:</strong> Surgical removal of the herniated portion of a disc to relieve nerve compression.</li>
                                    <li><b>Spinal Fusion:</b> Joining two or more vertebrae to stabilize the spine and reduce pain.</li>
                                    <li><b>Artificial Disc Replacement:</b> Replacement of a damaged disc with an artificial one to maintain mobility.</li>
                                    <li><b>Foraminotomy:</b> Enlargement of the spinal canal to relieve pressure on nerves.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Spinal Disc Surgery:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
                                    <li><b>Bleeding:</b> Bleeding during or after the surgery.</li>
                                    <li><b>Nerve Damage:</b> Rare instances of damage to nerves during the procedure.</li>
                                    <li><b>Failure to Relieve Symptoms:</b> In some cases, surgery may not completely alleviate symptoms.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpinalDiscSurgery;
