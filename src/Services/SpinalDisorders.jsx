import React from 'react';
import SpinalDisordersImg from './spinaldisorderimg1.jpg';

const SpinalDisorders = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={SpinalDisordersImg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2>Spinal Disorders</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Spinal Disorders refer to conditions affecting the spine's structure and function, leading to various symptoms and impairments. Explore the description, symptoms, causes, diagnosis, and treatment associated with spinal disorders.</p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>Spinal disorders encompass a range of conditions affecting the spine, including the vertebrae, discs, and surrounding tissues. These conditions can cause pain, discomfort, and limitations in spinal mobility. Diagnosis and treatment often involve a comprehensive approach, considering the specific disorder and its impact on the individual's spine.</p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Symptoms Indicating Spinal Disorders:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Back Pain:</strong> Persistent or chronic pain in the back region.</li>
                                <li><strong>Radiating Pain:</strong> Pain that radiates to the arms, legs, or other areas.</li>
                                <li><strong>Numbness or Tingling:</strong> Sensations of numbness or tingling in the extremities.</li>
                                <li><strong>Weakness:</strong> Muscle weakness in the limbs.</li>
                                <li><strong>Changes in Bowel or Bladder Function:</strong> Bowel or bladder dysfunction associated with spinal nerve compression.</li>
                                <li><strong>Difficulty Walking:</strong> Impaired walking or coordination.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Common Causes of Spinal Disorders:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Herniated Discs: </strong> Protrusion of intervertebral discs, causing nerve compression.</li>
                                <li><strong>Spinal Stenosis:</strong> Narrowing of the spinal canal, leading to nerve compression.</li>
                                <li><strong>Scoliosis: </strong> Abnormal curvature of the spine.</li>
                                <li><strong>Degenerative Disc Disease:</strong> Wear and tear of spinal discs over time.</li>
                                <li><strong>Spinal Tumors:</strong> Abnormal growths affecting the spine.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Spinal Disorders:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Physical Examination: </strong>Evaluation of the patient's medical history and physical examination to assess spinal symptoms and function.</li>
                                <li><strong>Imaging Studies: </strong>X-rays, MRI, or CT scans to visualize the spine's internal structures and identify abnormalities.</li>
                                <li><strong>Electrodiagnostic Testing: </strong> Nerve conduction studies and electromyography to assess nerve function.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Treatment Modalities for Spinal Disorders:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Conservative Therapies:</strong> Physical therapy, medications, and lifestyle modifications.</li>
                                    <li><b>Minimally Invasive Procedures:</b> Procedures such as epidural injections or nerve blocks.</li>
                                    <li><b>Surgical Interventions:</b> Surgical options for severe cases, including spinal fusion or disc replacement.</li>
                                    <li><b>Rehabilitation:</b> Post-surgery rehabilitation and physical therapy.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>Potential Risks of Spinal Disorder Treatments:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at surgical sites.</li>
                                    <li><b>Bleeding:</b> Bleeding during or after surgical procedures.</li>
                                    <li><b>Nerve Damage:</b> Rare instances of nerve damage during surgery.</li>
                                    <li><b>Rehabilitation Challenges:</b> Challenges in post-surgery rehabilitation and recovery.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SpinalDisorders;
