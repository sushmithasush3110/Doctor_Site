import React from "react";
import './cards.css';
export const SpecCard = () => {
    return (
        <div className="maincard" id="spec">
            <div className="maincard1">
            <div className="card1">
                <h2>Specialiazations</h2>
                <ul>
                    <li>Spine Surgeon (Ortho)</li>
                    <li>Spine And Pain Specialist</li>
                    <li>Orthopedic surgeon</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export const MemberCard = () => {
    return (
        <div className="maincard">
            <div className="maincard2">
            <div className="card1">
                <h2 >Memberships</h2>
                <ul>
                    <li>Indian Orthopaedic Association</li>
                    <li>Indian Medical Association (IMA)</li>
                    <li>Indian Arthroscopy Society</li>
                </ul>
            </div>
            </div>
        </div>
    )

}
export const SurveyCard = () => {
    return (
        <div className="subcard" id="services">
            <div className="subcard1">

                <div className="card2">
                    <div className="opacity">
                    <h2 className="head">Services</h2>
                    <div style={{ display: 'flex' }}>

                        <div className="list">
                            <ul>
                                <li>Frozen Shoulder Treatment</li>
                                <li>Ligament Reconstruction</li>
                                <li>Shoulder arthroscopy</li>
                                <li>Knee arthroscopy</li>
                                <li>Spinal Deformity Correction</li>
                                <li>neck and spine surgery</li>
                                <li>Spinal Disorders</li>
                                <li>Shoulder SLAP (Tear) Lesions</li>
                            </ul>
                        </div>
                        <div className="list">
                            <ul>
                                <li>ACL Reconstruction</li>
                                <li>Arthroscopy</li>
                                <li>Knee Osteotomy</li>
                                <li>Knee Replacement</li>
                                <li>Spinal Fusion</li>
                                <li>Laminectomy</li>
                                <li>Joint Replacement Surgery</li>
                                <li>Spinal Surgery</li>
                            </ul>
                        </div>
                        <div className="list">
                            <ul>
                                <li>Fracture Treatment</li>
                                <li>Primary Hip and Knee Arthroplasty</li>
                                <li>Revision Hip and Knee Arthroplasty</li>
                                <li>Bankart Repair</li>
                                <li>Rotator Cuff Injury Treatment</li>
                                <li>Spinal Disc Surgery</li>
                                <li>Kyphoplasty</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <div className="lastcard"><img src={Surgeryimg} alt="Surgery_image" className="cardimg3"></img></div> */}
        </div>

    )
}


