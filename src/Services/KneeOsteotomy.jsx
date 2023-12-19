import React from 'react';
import KneeOsteotomyImg from '../assets/KneeOsteotomymain.jpg';

const KneeOsteotomy = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={KneeOsteotomyImg} alt="Knee Osteotomy" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2  className='h4title'>Knee Osteotomy</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Definition:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>
                                Knee osteotomy is a surgical procedure that involves cutting and reshaping the bones around the knee joint. It is performed to redistribute the weight-bearing load on the knee, relieving pressure on damaged or arthritic areas.
                            </p>
                            <h6>Description:</h6>
                            <p style={{ paddingLeft: '40px' }}>
                                In knee osteotomy, the surgeon carefully cuts and repositions the bones of the knee joint to shift the weight-bearing load away from the damaged or arthritic part of the joint. This helps reduce pain and improve function.
                            </p>
                            <h4>Symptoms:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>
                                Symptoms Indicating the Need for Knee Osteotomy:
                            </p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Chronic Knee Pain:</strong> Persistent knee pain, especially on one side of the knee.</li>
                                <li><strong>Joint Instability:</strong> Feeling of knee instability or giving way.</li>
                                <li><strong>Limited Range of Motion:</strong> Difficulty moving the knee through its full range of motion.</li>
                                <li><strong>Joint Deformity:</strong> Development of a bow-legged or knock-kneed appearance.</li>
                                <li><strong>Arthritis:</strong> Presence of arthritis affecting one side of the knee joint.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>
                                Common Causes Requiring Knee Osteotomy:
                            </p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Unicompartmental Arthritis:</strong> Arthritis affecting only one side (compartment) of the knee joint.</li>
                                <li><strong>Malalignment:</strong> Abnormal alignment of the bones in the knee.</li>
                                <li><strong>Post-Traumatic Conditions:</strong> Conditions resulting from previous knee injuries.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>
                                Diagnostic Process for Knee Osteotomy:
                            </p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Medical History and Physical Examination:</strong> The physician evaluates the patient's medical history and conducts a physical examination to assess knee symptoms and function.</li>
                                <li><strong>Imaging Studies:</strong> X-rays, MRI, or CT scans may be ordered to visualize the knee's internal structures and identify any abnormalities.</li>
                            </ol>
                            <h4>Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>
                                Treatment Modalities in Knee Osteotomy:
                            </p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Bone Reshaping:</strong> The surgeon carefully cuts and reshapes the bones to realign the knee joint.</li>
                                    <li><strong>Internal Fixation:</strong> Surgical instruments such as plates and screws may be used to stabilize the reshaped bones.</li>
                                    <li><strong>Rehabilitation:</strong> Physical therapy is often prescribed to aid in recovery and improve knee strength and flexibility.</li>
                                </ol><br />
                            </ul>
                            <h4>Risks and Complications:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>
                                Potential Risks of Knee Osteotomy:
                            </p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol>
                                    <li><strong>Infection:</strong> Risk of infection at the incision sites.</li>
                                    <li><strong>Bleeding:</strong> Bleeding within the knee joint or at the incision sites.</li>
                                    <li><strong>Nerve or Vascular Injury:</strong> Rare instances of damage to nerves or blood vessels near the knee.</li>
                                    <li><strong>Delayed Healing:</strong> Delayed or incomplete healing of the reshaped bones.</li>
                                </ol><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KneeOsteotomy;
