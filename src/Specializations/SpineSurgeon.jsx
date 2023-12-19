import React from 'react';
import SpineSurgeonImage from '../assets/SpineSurgeon.jpg'; 

const SpineSurgeon = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: '0px', marginBottom: '60px' }}>
                <div className='col-md-12'>
                    <img src={SpineSurgeonImage} alt='Spine Surgeon' className='' style={{ width: '100%' }} />
                    <div
                        className='row position-absolute'
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                            backgroundColor: '#f2f2f2bd',
                            color: '#131212bd',
                            borderRadius: '20px',
                        }}
                    >
                        <h2>Spine Surgeon</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Introduction:</h4>
                            <p style={{ paddingLeft: '40px' }}>
                                A Spine Surgeon is a medical professional specialized in the diagnosis and surgical
                                treatment of conditions affecting the spine. The spine surgeon plays a crucial role in
                                addressing various spinal disorders, injuries, and deformities to improve the overall
                                spine health of patients.
                            </p>

                            <h4>Role of a Spine Surgeon:</h4>
                            <p style={{ paddingLeft: '40px' }}>
                                The primary responsibilities of a spine surgeon include assessing patient
                                conditions, recommending treatment options, and performing surgical procedures when
                                necessary. Spine surgeons work closely with other healthcare professionals to provide
                                comprehensive care for individuals with spine-related issues.
                            </p>

                            <h4>Conditions Treated:</h4>
                            <p style={{ paddingLeft: '40px' }}>
                                A spine surgeon addresses a wide range of conditions, including herniated discs,
                                spinal stenosis, scoliosis, vertebral fractures, and spinal tumors. The goal is to
                                relieve pain, improve function, and enhance the overall quality of life for patients
                                dealing with spine-related issues.
                            </p>

                            <h4>Diagnostic Process:</h4>
                            <p style={{ paddingLeft: '40px' }}>
                                The diagnostic process involves a thorough examination of the patient's medical
                                history, a physical examination, and various imaging studies such as X-rays, MRI, or CT
                                scans. These assessments help the spine surgeon accurately diagnose the underlying
                                spinal conditions.
                            </p>

                            <h4>Treatment Modalities:</h4>
                            <p style={{ paddingLeft: '40px' }}>
                                Spine surgeons employ various treatment modalities, including surgical procedures
                                like discectomy, spinal fusion, vertebroplasty, kyphoplasty, tumor resection, and
                                scoliosis correction. The choice of treatment depends on the specific condition and
                                the individual patient's needs.
                            </p>

                            <h4>Risks and Complications:</h4>
                            <p style={{ paddingLeft: '40px' }}>
                                While spine surgery can be highly beneficial, it carries potential risks and
                                complications. These may include the risk of infection, bleeding, nerve or vascular
                                injury, and spinal fluid leaks. The spine surgeon discusses these risks with the
                                patient and takes measures to minimize them during the surgical process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpineSurgeon;


// import React from 'react';
// import SpineSurgeryImg from '../assets/SpineSurgeon.jpg';

// const SpineSurgery = () => {
//     return (
//         <div className='text-md-justify' style={{ lineHeight: '2' }}>
//             <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
//                 <div className="col-md-12">
//                     <img src={SpineSurgeryImg} alt="" className='' style={{ width: "100%" }} />
//                     <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
//                         <h2>Spine Surgery (Ortho)</h2>
//                     </div>
//                 </div>
//             </div>

//             <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
//                 <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
//                     <div className='col-md-12'>
//                         <div className='row'>
//                             <h4>Definition:-</h4><hr />
//                             <p style={{ paddingLeft: '40px' }}>Spine surgery is a medical procedure that focuses on the diagnosis, treatment, and management of conditions affecting the spine. This involves surgical interventions to address spinal issues and improve the patient's overall spinal health.</p>
//                             <h6>Description:</h6>
//                             <p style={{ paddingLeft: '40px' }}>Spine surgery may involve various procedures, including the correction of spinal deformities, removal of spinal tumors, and addressing issues like herniated discs or spinal stenosis. Surgical techniques may vary depending on the specific condition and the patient's needs.</p>
//                             <h4>Symptoms:-</h4><hr />
//                             <p style={{ paddingLeft: '40px' }}>Symptoms Indicating the Need for Spine Surgery:</p>
//                             <ol style={{ paddingLeft: '40px' }}>
//                                 <li><strong>Chronic Back Pain:</strong> Persistent and debilitating back pain that does not respond to conservative treatments.</li>
//                                 <li><strong>Radiating Leg Pain:</strong> Pain radiating down the legs, often associated with nerve compression.</li>
//                                 <li><strong>Loss of Bowel or Bladder Control:</strong> Severe cases where spinal issues lead to loss of bowel or bladder control.</li>
//                                 <li><strong>Spinal Deformities:</strong> Structural abnormalities affecting the alignment of the spine.</li>
//                                 <li><strong>Neurological Symptoms:</strong> Symptoms like weakness, numbness, or tingling in the extremities.</li>
//                             </ol>
//                             <h4>Causes</h4><hr />
//                             <p style={{ paddingLeft: '40px' }}>Common Causes Requiring Spine Surgery:</p>
//                             <ol style={{ paddingLeft: '40px' }}>
//                                 <li><strong>Herniated Discs:</strong> Discs in the spine that bulge or rupture, causing pressure on nerves.</li>
//                                 <li><strong>Spinal Stenosis:</strong> Narrowing of the spinal canal, leading to compression of the spinal cord or nerves.</li>
//                                 <li><strong>Spinal Tumors:</strong> Abnormal growths in or around the spinal cord.</li>
//                                 <li><strong>Scoliosis:</strong> Abnormal sideways curvature of the spine.</li>
//                                 <li><strong>Vertebral Fractures:</strong> Fractures or breaks in the vertebrae.</li>
//                             </ol>
//                             <h4>Diagnosis:</h4><hr />
//                             <p style={{ paddingLeft: '40px' }}>Diagnostic Process for Spine Surgery:</p>
//                             <ol style={{ paddingLeft: '40px' }}>
//                                 <li><strong>Medical History and Physical Examination: </strong>Evaluation of the patient's medical history and a physical examination to assess spinal symptoms and function.</li>
//                                 <li><strong>Imaging Studies: </strong>X-rays, MRI, or CT scans may be ordered to visualize the spine's internal structures and identify any abnormalities.</li>
//                                 <li><strong>Electromyography (EMG) and Nerve Conduction Studies: </strong>Tests to assess nerve function and identify areas of nerve compression.</li>
//                             </ol>
//                             <h4 >Treatment:</h4><hr />
//                             <p style={{ paddingLeft: '40px' }}>Treatment Modalities in Spine Surgery:</p>
//                             <ul style={{ paddingLeft: '40px' }}>
//                                 <ol>
//                                     <li><strong>Discectomy:</strong> Surgical removal of a herniated or damaged disc.</li>
//                                     <li><b>Spinal Fusion:</b> Joining two or more vertebrae to stabilize the spine.</li>
//                                     <li><b>Vertebroplasty or Kyphoplasty:</b> Procedures to treat vertebral compression fractures.</li>
//                                     <li><b>Tumor Resection:</b> Surgical removal of spinal tumors.</li>
//                                     <li><b>Scoliosis Correction:</b> Surgical correction of abnormal spine curvature.</li>
//                                 </ol><br />
//                             </ul>
//                             <h4>Risks and Complications:</h4><hr />
//                             <p style={{ paddingLeft: '40px' }}>Potential Risks of Spine Surgery:</p>
//                             <ul style={{ paddingLeft: '40px' }}>
//                                 <ol>
//                                     <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
//                                     <li><b>Bleeding:</b> Bleeding during or after surgery.</li>
//                                     <li><b>Nerve Damage:</b> Potential damage to nerves during the surgical procedure.</li>
//                                     <li><b>Hardware Issues:</b> Complications related to implanted hardware (e.g., screws, rods).</li>
//                                 </ol><br />
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SpineSurgery;
