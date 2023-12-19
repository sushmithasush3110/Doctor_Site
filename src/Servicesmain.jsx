import React from 'react'
import Servicesimg from './assets/OurServicesmain.jpg'

const Servicesmain = () => {
  return (
    <div className='text-md-justify' style={{ lineHeight: '2' }}>
      <div className='text-md-justify' style={{ lineHeight: '2' }}>
        <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
          <div className="col-md-12">
            <img src={Servicesimg} alt="" className='' style={{ width: "100%" }} />
            <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2', color: '#131212bd', borderRadius: '20px' }}>
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Frozen Shoulder Treatment</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It includes physical therapy,
                        pain relief medications, and, in severe cases, surgical interventions to improve joint movement.</p>
                      <a href="/Services/Frozenshoulder" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Ligament Reconstruction</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>Ligament reconstruction surgically replaces
                        a torn ligament with graft tissue to restore joint stability and function</p>
                      <a href="/Services/LigamentReconstruction" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Shoulder Arthroscopy</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It is a minimally invasive surgical
                        procedure to diagnose and treat shoulder joint issues using a specialized camera and instruments.</p>
                      <a href="/Services/ShoulderArthroscopy" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Knee arthroscopy</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It is a minimally invasive surgical procedure
                        involving the use of an arthroscope to diagnose and treat joint issues through small incisions..</p>
                      <a href="/Services/KneeArthroscopy" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Spinal Deformity Correction</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It involves realigning
                        the spine using surgical techniques like spinal fusion  or osteotomies (cutting and repositioning bone),
                        addressing pain, improving function, and restoring posture. </p>
                      <a href="/Services/SpinalDeformityCorrection" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Neck and Spine Surgery</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>Delicate procedures addressing disorders in the neck and spine,
                        often involving minimally invasivetechniques to repair or stabilize vertebrae, discs, and nerves,
                        aiming to alleviate pain and restore function.</p>
                      <a href="/Services/NeckSpineSurgery" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Spinal Disorders</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>
                        A diverse and complex bunch of conditions affecting the spine, causing pain, deformity, and nerve dysfunction, often
                        diagnosed through imaging and treated with physical therapy, medication, or surgery.</p>
                      <a href="/Services/SpinalDisorders" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Shoulder SLAP (Tear) Lesions</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>Shoulder SLAP (Superior Labral Anterior to Posterior)
                        tears are injuries that occur in the superior portion of the labrum, often associated with trauma or overuse,
                        affecting the stability of the shoulder joint.</p>
                      <a href="/Services/SLAPLesions" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">ACL Reconstruction</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>ACL reconstruction is surgery to reconstruct the
                        ligament in the center of your knee. The anterior cruciate ligament (ACL) connects your shin bone (tibia)
                        to your thigh bone (femur). </p>
                      <a href="/Services/ACLReconstruction" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Arthroscopy</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>Arthroscopy is a procedure for diagnosing and
                        treating joint problems. A surgeon inserts a narrow tube attached to a fiber-optic video camera through
                        a small incision — about the size of a buttonhole. </p>
                      <a href="/Services/Arthroscopy" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Knee Replacement</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It is a surgical procedure that replaces a damaged 
                      knee joint with artificial implants. It's commonly performed to treat severe pain and disability caused by 
                      conditions like arthritis.</p>
                      <a href="/Services/KneeReplacement" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Knee Osteotomy</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It involves the intentional cutting and reshaping
                        of the bone around the knee joint to redistribute weight and alleviate pressure, often used to address
                        certain types of knee deformities. </p>
                      <a href="/Services/KneeOsteotomy" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
            <div className='row'>
            <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Spinal Fusion</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>Spinal fusion is a surgical procedure that
                        involves joining two or more vertebrae to stabilize the spine and alleviate pain by promoting the
                        growth of bone between the fused spinal segments.</p>
                      <a href="/Services/SpinalFusion" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Laminectomy</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It is a surgical procedure involving
                        the removal of the lamina, a portion of the vertebral bone, to alleviate pressure on the spinal cord
                        or nerves and address conditions such as spinal stenosis.</p>
                      <a href="/Services/Laminectomy" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Joint Replacement Surgery</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>Joint replacement surgery involves the removal
                        of damaged or diseased joint components and their replacement with artificial implants to restore
                        function and alleviate pain.</p>
                      <a href="/Services/JointReplacementSurgery" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Spinal Surgery</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It is a procedure performed
                        to address issues related to the spine, such as herniated discs, spinal deformities, often
                        involving the use of surgical techniques to alleviate pain or stabilize the spine.</p>
                      <a href="/Services/SpinalSurgery" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className='row'>
            <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Fracture Treatment</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>Treatment includes immobilising the bone with a
                       plaster cast, or surgically inserting metal rods or plates to hold the bone pieces together.</p>
                      <a href="/Services/Fracture" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Primary Hip and Knee Arthroplasty</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>This Surgery uses Implants
                        made from metal, high density polyethylene or ceramic to replace a diseased or worn out hip joint.</p>
                      <a href="/Services/HipKneeArthroplasty" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Revision Hip and Knee Arthroplasty</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>In this procedure, your doctor removes some or
                        all of the parts of the original prosthesis and replaces them with new ones.</p>
                      <a href="/Services/RevisionArthroplasty" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Bankart Repair</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>Bankart repair is a surgical procedure aimed at
                        stabilizing the shoulder joint by reattaching and tightening the torn or detached labrum to address
                        recurrent dislocations.</p>
                      <a href="/Services/BankartRepair" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className='row'>
            <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Rotator Cuff Injury Treatment</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It involves
                        a combination of rest, physical therapy, anti-inflammatory medications, and in some cases, surgical
                        intervention to repair the damaged tendon.</p>
                      <a href="/Services/RotatorCuffInjury" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Spinal Disc Surgery</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>Diskectomy is surgery to remove the damaged part
                       of a disk in the spine that has its soft center pushing out through the tough outer lining. A herniated
                        disk can irritate or press on nearby nerves.</p>
                      <a href="/Services/SpinalDiscSurgery" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 p-3'>
                <div className='row'>
                  <div className="card" style={{ width: "18rem;" }}>
                    <div className="card-body text-md-center lh-base ">
                      <img src="" alt='' className='mb-2' style={{ background: "#ccc", height: "90px", width: "90px" }} />
                      <h6 className="card-title fw-bold">Kyphoplasty</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>kyphoplasty injects special cement into your 
                      vertebrae — with the additional step of creating space for the treatment with a balloon-like device (balloon vertebroplasty).</p>
                      <a href="/Services/Kyphoplasty" className="btn btn-sm btn-primary border-0">View more</a>
                    </div>
                  </div>
                </div>
              </div> 
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Servicesmain