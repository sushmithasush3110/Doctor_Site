import specicard from '../assets/front_view.jpg'
import memcard from '../assets/doc_nurse.jpg'
import servicescard from '../assets/woman-running.jpg'
export default function CardSection() {
    return (
        <div className="container" style={{margin:'60px'}}>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card" style={{ borderRadius: '30px' }}>
                        {/* <img src={specicard} class="card-img-top" alt="..." /> */}
                        <div className="card-body" style={{ backgroundImage: `url(${specicard})`, backgroundSize: 'cover', paddingTop: '200px', paddingLeft: '0px', paddingRight: '0px', paddingBottom: '0px', borderRadius: '30px' }}>
                            <div style={{ background: "#f2f2f2bd", padding: '30px', borderRadius: '0px 0px 30px 30px' }}>
                                <h5 className="card-title">Specializations</h5>
                                <ul>
                                    <li>Spine Surgeon (Ortho)</li>
                                    <li>Spine And Pain Specialist</li>
                                    <li>Orthopedic surgeon</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ borderRadius: '30px' }}>
                        <div className="card-body" style={{ backgroundImage: `url(${memcard})`, backgroundSize: 'cover', paddingTop: '200px', paddingLeft: '0px', paddingRight: '0px', paddingBottom: '0px', borderRadius: '30px' }}>
                            <div style={{ background: "#f2f2f2bd", padding: '30px', borderRadius: '0px 0px 30px 30px' }}>
                                <h5 className="card-title">Memberships</h5>
                                <ul>
                                    <li>Indian Orthopaedic Association</li>
                                    <li>Indian Medical Association (IMA)</li>
                                    <li>Indian Arthroscopy Society</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div className="row" style={{ paddingTop: '60px'}} >
                <div className="container d-flex align-items-end" style={{ backgroundImage: `url(${servicescard})`, backgroundSize: 'cover', height: '600px', borderRadius:'30px' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className='row' style={{ background: "#f2f2f2bd", padding: '30px', borderRadius: '0px 0px 30px 30px', width:'71.3rem' }}>
                                <div className='row text-center'>
                                    <h5 className="card-title pb-5">Services</h5>
                                </div>
                                <div className='col-md-4'>
                                <ul>
                                        <li><a href='/Services/Frozenshoulder'>Frozen Shoulder Treatment</a></li>
                                        <li><a href='/Services/LigamentReconstruction'>Ligament Reconstruction</a></li>
                                        <li><a href='/Services/ShoulderArthroscopy'>Shoulder arthroscopy</a></li>
                                        <li><a href='/Services/KneeArthroscopy'>Knee arthroscopy</a></li>
                                        <li><a href='/Services/SpinalDeformityCorrection'>Spinal Deformity Correction</a></li>
                                        <li>neck and spine surgery</li>
                                        <li>Spinal Disorders</li>
                                        <li>Shoulder SLAP (Tear) Lesions</li>
                                    </ul>
                                </div>
                                <div className='col-md-4'>
                                <ul>
                                        <li><a href='/Services/ACLReconstruction'>ACL Reconstruction</a></li>
                                        <li><a href='/Services/Arthroscopy'>Arthroscopy</a></li>
                                        <li><a href='/Services/KneeOsteotomy'>Knee Osteotomy</a></li>
                                        <li><a href='/Services/KneeReplacement'>Knee Replacement</a></li>
                                        <li><a href='/Services/SpinalFusion'>Spinal Fusion</a></li>
                                        <li>Laminectomy</li>
                                        <li>Joint Replacement Surgery</li>
                                        <li>Spinal Surgery</li>
                                    </ul>
                                </div>
                                <div className='col-md-4'>
                                <ul>
                                        <li><a href='/Services/Fracture'>Fracture Treatment</a></li>
                                        <li><a href='/Services/HipKneeArthroplasty'>Primary Hip and Knee Arthroplasty</a></li>
                                        <li><a href='/Services/RevisionArthroplasty'>Revision Hip and Knee Arthroplasty</a></li>
                                        <li><a href='/Services/BankartRepair'>Bankart Repair</a></li>
                                        <li><a href='/Services/RotatorCuffInjury'>Rotator Cuff Injury Treatment</a></li>
                                        <li>Spinal Disc Surgery</li>
                                        <li>Kyphoplasty</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}