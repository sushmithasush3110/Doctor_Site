import React from 'react'
import servicescard from '../assets/woman-running.jpg'

const Servicescard = () => {
    return (
        <div className='container p-3'>
            <div className='row'>
                <div className='col-md-12 Servicebgimg' style={{ backgroundImage: `url(${servicescard})`, backgroundSize: 'cover', padding:'300px 0px 0px 0px', borderRadius:'30px' }}>
                    <div className='card bgcolor' style={{ background: '#f2f2f2bd', padding:'4px', width:'100%', borderRadius:'0px 0px 30px 30px' }}>
                        <div className='row'>
                            <div className='row text-center pb-3'>
                                <h5 className="card-title">Services</h5>
                            </div>
                            <div className='col-md-4'>
                                <ul className='linkstyle'>
                                    <li><a href='/Services/Frozenshoulder'>Frozen Shoulder Treatment</a></li>
                                    <li><a href='/Services/LigamentReconstruction'>Ligament Reconstruction</a></li>
                                    <li><a href='/Services/ShoulderArthroscopy'>Shoulder Arthroscopy</a></li>
                                    <li><a href='/Services/KneeArthroscopy'>Knee arthroscopy</a></li>
                                    <li><a href='/Services/SpinalDeformityCorrection'>Spinal Deformity Correction</a></li>
                                    <li><a href='/Services/NeckSpineSurgery'>Neck and Spine Surgery</a></li>
                                    <li><a href='/Services/SpinalDisorders'>Spinal Disorders</a></li>
                                    <li><a href='/Services/SLAPLesions'>Shoulder SLAP (Tear) Lesions</a></li>
                                </ul>
                            </div>
                            <div className='col-md-4'>
                                <ul className='linkstyle'>
                                    <li><a href='/Services/ACLReconstruction'>ACL Reconstruction</a></li>
                                    <li><a href='/Services/Arthroscopy'>Arthroscopy</a></li>
                                    <li><a href='/Services/KneeOsteotomy'>Knee Osteotomy</a></li>
                                    <li><a href='/Services/KneeReplacement'>Knee Replacement</a></li>
                                    <li><a href='/Services/SpinalFusion'>Spinal Fusion</a></li>
                                    <li><a href='/Services/Laminectomy'>Laminectomy</a></li>
                                    <li><a href='/Services/JointReplacementSurgery'>Joint Replacement Surgery</a></li>
                                    <li><a href='/Services/SpinalSurgery'>Spinal Surgery</a></li>
                                </ul>
                            </div>
                            <div className='col-md-4'>
                                <ul className='linkstyle'>
                                    <li><a href='/Services/Fracture'>Fracture Treatment</a></li>
                                    <li><a href='/Services/HipKneeArthroplasty'>Primary Hip and Knee Arthroplasty</a></li>
                                    <li><a href='/Services/RevisionArthroplasty'>Revision Hip and Knee Arthroplasty</a></li>
                                    <li><a href='/Services/BankartRepair'>Bankart Repair</a></li>
                                    <li><a href='/Services/RotatorCuffInjury'>Rotator Cuff Injury Treatment</a></li>
                                    <li><a href='/Services/SpinalDiscSurgery'>Spinal Disc Surgery</a></li>
                                    <li><a href='/Services/Kyphoplasty'>Kyphoplasty</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicescard