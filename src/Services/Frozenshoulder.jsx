import React from 'react'
import frozenimg from '../assets/frozenimg1.jpg'

const Frozenshoulder = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight:'2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom:'60px' }}>
                <div className="col-md-12">
                    <img src={frozenimg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor:'#f2f2f2bd', color:'#131212bd', borderRadius:'20px'  }}>
                        <h2>Frozen Shoulder Treatment</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px'}}>
                <div className='row' style={{ paddingLeft: '40px', textAlign:'justify'  }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Description:-</h4><hr/>
                            <p style={{ paddingLeft: '40px'}}>Frozen shoulder, also known as adhesive capsulitis, is a
                                condition characterized by pain and stiffness in the shoulder
                                joint. It often develops slowly over time and can limit the
                                range of motion in the shoulder. Here's an overview of the
                                symptoms, causes, and treatment options for frozen shoulder.</p>
                            <p style={{ paddingLeft: '40px' }}>It's important to note that the treatment plan may vary based
                                on the severity of the condition, and individual factors.
                                Consulting with a healthcare professional for a proper
                                diagnosis and tailored treatment plan is crucial if you
                                suspect you have a frozen shoulder. Early intervention
                                and appropriate management can significantly improve outcomes.</p>
                            <h4>Symptoms:-</h4><hr/>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Pain:</strong> Persistent pain in the shoulder, typically a dull or aching pain.</li>
                                <li><strong>Stiffness:</strong> Gradual onset of stiffness in the shoulder joint, making it difficult to move.</li>
                                <li><strong>Limited Range of Motion:</strong> Reduced ability to move the shoulder, especially when reaching overhead or behind the back.</li>
                                <li><strong>Difficulty Sleeping:</strong> The pain and stiffness can interfere with sleep, especially when lying on the affected side.</li>
                                <li><strong>Progressive Nature:</strong> Symptoms may worsen over time, and the condition can go through different stages.</li>
                            </ol>
                            <h4>Causes:</h4><hr/>
                            <p>The exact cause of frozen shoulder is not always clear, but certain factors may increase the risk:</p>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Age and Gender:</strong> It often affects people between the ages of 40 and 60, and women are more likely to develop frozen shoulder.</li>
                                <li><strong>Immobility:</strong>  Prolonged immobility or lack of use of the shoulder, such as after surgery, injury, or illness, can contribute.</li>
                                <li><strong>Systemic Diseases: </strong>Conditions such as diabetes, cardiovascular disease, and thyroid disorders are associated with an increased risk.</li>
                                <li><strong>Other Health Conditions:</strong>Certain health conditions, like Parkinson's disease, can be linked to frozen shoulder.</li>
                            </ol>
                            <h4>Treatment:</h4><hr/>
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Pain Management:</strong><br /> It often affects people between the ages of 40 and 60, and women are more likely to develop frozen shoulder.<br />In severe cases, your doctor might prescribe stronger pain medications.</li>
                                <li><strong>Physical Therapy:</strong><br />Physical therapy exercises are crucial to improve range of motion.<br />Therapists may use techniques to stretch and mobilize the shoulder joint.</li>
                                <li><strong>Heat and Ice Therapy:</strong><br />Applying heat or cold packs can help alleviate pain and reduce inflammation.</li>
                                <li><strong>Joint Distension:</strong><br />In some cases, a doctor may use distension, a procedure involving injecting sterile water into the joint capsule to stretch it.</li>
                                <li><strong>Anti-Inflammatory Medications:</strong><br /> Corticosteroid injections into the joint can reduce inflammation and provide relief.</li>
                                <li><strong>Home Exercises:</strong><br />Patients are often prescribed daily exercises to perform at home to maintain and improve shoulder mobility.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Frozenshoulder