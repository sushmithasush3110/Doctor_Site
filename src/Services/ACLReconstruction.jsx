import React from 'react'
import ACLimg from '../assets/ACLimg.jpg'

const ACLReconstruction = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight: '2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={ACLimg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor:'#f2f2f2bd', color:'#131212bd', borderRadius:'20px'  }}>
                        <h2>ACL Reconstruction</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Description:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>The anterior cruciate ligament (ACL) is important for maintaining stability of the knee joint, particularly in activities involving weaving, pivoting or kicking. The knee becomes unstable with a ruptured ACL and the joint may become more damaged over time. ACL reconstruction is the surgical treatment of choice to restore stability at the knee joint.</p>
                            <h4>Symptoms of ACL Injury:-</h4><hr />
                            <p>These injuries are common, especially among athletes participating in high-impact sports. Here's a detailed overview of ACL reconstruction, covering symptoms, causes, and treatment:</p>

                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Popping Sound:</strong>Many people report hearing a popping sound at the time of injury.</li>
                                <li><strong>Immediate Swelling:</strong>The knee often swells rapidly within a few hours of the injury.</li>
                                <li><strong>Pain:</strong> ACL injuries typically cause significant pain, especially during movement.</li>
                                <li><strong>Instability: </strong>Individuals may feel like the knee is giving way or unstable, making it challenging to bear weight.</li>
                            </ol>
                            <h4>Causes of ACL Injury:</h4><hr />
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Sports Injuries:</strong> ACL injuries frequently occur during sports that involve sudden stops, changes in direction, or jumping, such as soccer, basketball, and football.</li>
                                <li><strong>Direct Impact:</strong>A direct blow to the knee, such as a car accident or a fall, can also cause ACL injuries.</li>
                                <li><strong>Non-Contact Injuries:</strong>Many ACL injuries occur without direct contact, often due to sudden changes in direction or landing awkwardly.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Physical Examination: </strong>The doctor will assess the range of motion, stability, and swelling of the knee.</li>
                                <li><strong>Imaging Tests: </strong> X-rays may be done to rule out fractures, while MRI scans can provide detailed images of soft tissues like ligaments.</li>
                            </ol>
                            <h4>Treatment:</h4><hr />
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Non-Surgical Treatment:</strong><br />
                                    <ol style={{ listStyleType: 'disc' }}>
                                        <li>"Physical Therapy" : Strengthening the muscles around the knee can help stabilize it.<br /></li>
                                        <li>"Bracing" : Wearing a knee brace may provide additional support.</li>
                                    </ol></li>
                                <li>
                                    <strong>Surgical Treatment (ACL Reconstruction):</strong>
                                    <ol style={{ listStyleType: 'disc' }}>
                                        <li>ACL reconstruction surgery is often recommended for individuals with significant instability or those involved in high-demand sports.</li>
                                        <li>The procedure involves replacing the damaged ACL with a graft, usually taken from the patient's hamstring tendon or patellar tendon.</li>
                                        <li>Arthroscopic surgery is commonly used, involving smaller incisions and a camera to guide the surgeon.</li>
                                    </ol>
                                </li>
                            </ol>
                            <h4>Rehabilitation:</h4><hr />
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Early Stage (0-2 weeks):</strong><br />
                                    <ol style={{ listStyleType: 'disc' }}>
                                        <li>Focus on reducing pain and swelling.</li>
                                        <li>Gentle range of motion exercises.</li>
                                    </ol>
                                    <li><strong>Intermediate Stage (2-12 weeks):</strong></li>
                                    <ol style={{ listStyleType: 'disc' }}>
                                        <li>Progressive strengthening exercises.</li>
                                        <li>Balance and proprioception training.</li>
                                    </ol>
                                    <li><strong>Advanced Stage (3 months onward):</strong></li>
                                    <ol style={{ listStyleType: 'disc' }}>
                                        <li>Sports-specific training.</li>
                                        <li>Gradual return to full activities.</li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ACLReconstruction;