import React from 'react'
import Fracimg from '../assets/Fracture1img.jpg'

const Fracture = () => {
    return (
        <div className='text-md-justify' style={{ lineHeight:'2' }}>
            <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
                <div className="col-md-12">
                    <img src={Fracimg} alt="" className='' style={{ width: "100%" }} />
                    <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
                        <h2 className='h4title'>Fracture Treatment</h2>
                    </div>
                </div>
            </div>

            <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
                <div className='row' style={{textAlign: 'justify' }}>
                    <div className='col-md-12'>
                        <div className='row'>
                            <h4>Description:-</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>A fracture, commonly known as a broken bone,
                                is a complete or partial crack in the bone's structure.
                                It can occur due to various reasons, ranging from physical impact to underlying medical conditions.</p>
                            <h4>Types of Fractures</h4><hr />
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Closed Fracture:</strong><br />Bone break without piercing the skin.</li>
                                <li><strong>Open Fracture:</strong><br />Bone breaks through the skin, posing a risk of infection.</li>
                                <li><strong>Greenstick Fracture:</strong><br />Partial break, common in children.</li>
                                <li><strong>Comminuted Fracture:</strong><br />Bone shatters into multiple fragments.</li>
                            </ol>
                            <h4>Symptoms:-</h4><hr />
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Pain:</strong> This is the most common symptom, typically localized to the injured area and intensifying with movement.</li>
                                <li><strong>Swelling:</strong> Inflammation and fluid buildup are natural responses to injury, causing the affected area to appear puffy and tender.</li>
                                <li><strong>Loss of function:</strong> Depending on the fracture's location and severity, movement and weight-bearing on the injured area may be significantly limited.</li>
                                <li><strong>Bruising:</strong> Discoloration due to internal bleeding often occurs around the injured bone.</li>
                                <li><strong>Numbness or tingling:</strong> Nerve damage or compression due to the fracture can lead to sensations of numbness or tingling in the affected area.</li>
                            </ol>
                            <h4>Causes</h4><hr />
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Physical trauma: </strong> Accidents, falls, sports injuries, and direct blows to the body are common causes of fractures.</li>
                                <li><strong>Stress fractures: </strong>Repeated stress on a bone, often from sports or certain activities, can cause hairline cracks to develop over time.</li>
                                <li><strong>Bone diseases:</strong>Conditions like osteoporosis, osteomalacia, and Paget's disease weaken bones, making them more susceptible to fractures.</li>
                                <li><strong>Medical treatments:</strong>Certain medications, such as corticosteroids, can increase bone fragility and risk of fractures.</li>
                            </ol>
                            <h4>Diagnosis:</h4><hr />
                            <ol style={{ paddingLeft: '40px' }}>
                                <li><strong>Physical examination: </strong>A doctor will assess the injured area for pain, swelling, deformity, and range of motion.</li>
                                <li><strong>X-rays: </strong>These are the primary imaging tool to confirm a fracture, reveal its location and severity, and assess bone alignment.</li>
                                <li><strong>Other imaging tests: </strong>CT scans, MRIs, or bone scans may be needed in some cases to visualize complex fractures or associated soft tissue injuries.</li>
                            </ol>
                            <h4 >Treatment:</h4><hr />
                            <p style={{ paddingLeft: '40px' }}>The treatment approach for a fracture depends on several factors, including:</p>
                            <ul style={{ paddingLeft: '40px' }}>
                                <ol style={{ listStyleType: 'disc' }}>
                                    <li><strong>Type of fracture:</strong>  Whether it's a complete or partial break, a simple or complex fracture, and whether the bone ends are displaced.</li>
                                    <li><b>Location of the fracture:</b> Wearing a knee brace may provide additional support.</li>
                                    <li><b>Severity of the fracture:</b> Whether there's minimal displacement or significant bone fragments, involving joints or blood vessels.</li>
                                    <li><b>Patient's age and overall health:</b> Younger individuals with good health generally heal faster and may opt for less invasive treatments.</li>
                                </ol><br/>
                                <p>Here are the main types of fracture treatment:</p>
                                <li>
                                    <ol style={{ listStyleType: 'disc' }}>
                                        <li><strong>Non-surgical treatments:</strong></li>
                                        <ol style={{ listStyleType: 'circle' }}>
                                            <li><b>Immobilization: </b> Splints, casts, or braces are used to keep the broken bone ends aligned and minimize movement, promoting healing.</li>
                                            <li><b>Pain management:</b>Medication is prescribed to manage pain and discomfort.</li>
                                            <li><b>Physical therapy:</b> After the fracture heals, exercises are recommended to regain strength, flexibility, and function in the affected area.</li>
                                        </ol>
                                    </ol>
                                </li>
                                <li>
                                    <ol style={{ listStyleType: 'disc' }}>
                                        <li><strong>Surgical treatments:</strong></li>
                                        <ol style={{ listStyleType: 'circle' }}>
                                        <li><b>Closed reduction: </b> The doctor manually repositions the bone fragments without making an incision.</li>
                                            <li><b>Open reduction and internal fixation (ORIF):</b>Surgery is performed to realign the bone fragments and stabilize them using plates, screws, or rods.</li>
                                            <li><b>Bone grafting:</b> In severe cases where bone is missing or damaged, a graft from another part of the body can be used to aid healing.</li>
                                        </ol>
                                    </ol>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fracture