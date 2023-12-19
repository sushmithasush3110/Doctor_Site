import React from 'react';
import LaminectomyImg from '../assets/LaminectomyMain.jpg';

const Laminectomy = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={LaminectomyImg} alt="" className='' style={{ width: "100%" }} />
                    {/* <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Laminectomy</h2>
                    </div> */}
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Laminectomy is a surgical procedure involving the removal of the lamina, a part of the vertebral bone. It is commonly performed to relieve pressure on the spinal cord or nerves in the spinal canal. Explore the description, symptoms, causes, diagnosis, and treatment associated with laminectomy.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>During laminectomy, the lamina is removed to create more space within the spinal canal. This can alleviate pressure on the spinal cord and nerves, addressing issues such as spinal stenosis or herniated discs.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Laminectomy:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Back Pain:</strong> Persistent back pain that may radiate to the legs.</li>
                                <li><strong>Nerve Pain:</strong> Shooting pain, numbness, or tingling in the limbs.</li>
                                <li><strong>Muscle Weakness:</strong> Weakness in the muscles, affecting mobility.</li>
                                <li><strong>Difficulty Walking:</strong> Impaired ability to walk due to pain or weakness.</li>
                                <li><strong>Bowel or Bladder Dysfunction:</strong> Rarely, severe cases may lead to bowel or bladder dysfunction.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Laminectomy:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Herniated Disc:</strong> Protrusion of a spinal disc, causing pressure on nerves.</li>
                                <li><strong>Spinal Stenosis:</strong> Narrowing of the spinal canal, leading to compression of nerves.</li>
                                <li><strong>Degenerative Disc Disease:</strong> Wear and tear of spinal discs over time.</li>
                                <li><strong>Spinal Tumors:</strong> Tumors affecting the spinal cord or surrounding structures.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Laminectomy:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Physical Examination: </strong>Evaluation of the patient's medical history and a physical examination to assess spinal symptoms and neurological function.</li>
                                <li><strong>Imaging Studies: </strong>X-rays, MRI, or CT scans are utilized to visualize the spine and identify abnormalities, such as herniated discs or spinal stenosis.</li>
                                <li><strong>Electromyography (EMG): </strong>EMG may be performed to assess nerve function and identify areas of compression or dysfunction.</li>
                            </ol>
                            <h4>Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Laminectomy:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Laminectomy Procedure:</strong> Surgical removal of the lamina to decompress the spinal canal.</li>
                                    <li><b>Spinal Fusion:</b> In some cases, spinal fusion may be performed to stabilize the spine after laminectomy.</li>
                                    <li><b>Rehabilitation:</b> Physical therapy and rehabilitation to aid recovery and restore mobility.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Laminectomy:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
                                    <li><b>Spinal Instability:</b> Rare instances of instability in the spine, especially if spinal fusion is not performed.</li>
                                    <li><b>Nerve Damage:</b> Possibility of nerve damage during the surgical procedure.</li>
                                    <li><b>Postoperative Pain:</b> Some patients may experience postoperative pain during recovery.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Laminectomy;
