import React from "react";
import './cards.css';
import Surgeryimg from '../../assets/Surgeryimg.jpg';
import Specimg from '../../assets/Specimg.jpg'
import MemberCard1 from '../../assets/MemberCard.jpg'
export const SpecCard = () => {
    return (
        <div className="card1">
            <img src={Specimg} alt="Specialiazation_image" className="cardimg1"></img>
            <h2 className="cardhead1">Specialiazations</h2>
            <ul className="cardlist1">
                <li>Spine Surgeon (Ortho)</li>
                <li>Spine And Pain Specialist</li>
                <li>Orthopedic surgeon</li>
            </ul>
        </div>
    )
}
export const MemberCard = () => {
    return (
        <div className="card1">
            <img src={MemberCard1} alt="Specialiazation_image" className="cardimg1"></img>
            <h2 className="cardhead1">Memberships</h2>
            <ul className="cardlist1">
                <li>Indian Orthopaedic Association</li>
                <li>Indian Medical Association (IMA)</li>
                <li>Indian Arthroscopy Society</li>
            </ul>
        </div>
    )

}
export const SurveyCard = () => {
    return (
        <div className="mainsurveycard">
            <div className="card3">
                <div>
                    <img src={Surgeryimg} alt="Surgery_image" className="cardimg3"></img>
                </div>
                <div>
                    <h2 className="cardhead1">Services</h2>
                    <div className="card-container">

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

    )
}


