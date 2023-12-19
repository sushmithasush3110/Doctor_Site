import React from 'react'
import Servicesimg from './assets/OurServicesmain.jpg'

const specializationsmain = () => {
  return (
    <div className='text-md-justify' style={{ lineHeight: '2' }}>
      <div className='text-md-justify' style={{ lineHeight: '2' }}>
        <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
          <div className="col-md-12">
            <img src={Servicesimg} alt="" className='' style={{ width: "100%" }} />
            <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2', color: '#131212bd', borderRadius: '20px' }}>
              <h2>Our Specializations</h2>
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
                      <h6 className="card-title fw-bold">Spine Surgeon</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>A Spine Surgeon is a medical professional 
                      specialized in the diagnosis and surgical treatment of conditions affecting the spine. The spine 
                      surgeon plays a crucial role in addressing various spinal disorders, injuries, and deformities to 
                      improve the overall spine health of patients.</p>
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
                      <h6 className="card-title fw-bold">Spine and Pain Specialist</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>A Spine and Pain Specialist is a medical professional 
                      specializing in the diagnosis and management of conditions related to the spine and chronic pain. Their expertise 
                      involves a comprehensive approach to addressing and relieving pain associated with spinal disorders and other chronic
                       pain conditions.</p>
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
                      <h6 className="card-title fw-bold">Orthopedic surgeon</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>An orthopedic surgeon is a medical professional specializing in the diagnosis, treatment, and surgical intervention of musculoskeletal conditions. This includes bones, joints, ligaments, tendons, and muscles. Orthopedic surgeons play a crucial role in restoring mobility, alleviating pain, and improving the overall function of the musculoskeletal system.</p>
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
                      <h6 className="card-title fw-bold">Shoulder Arthroscopy</h6>
                      <p className="card-text" style={{ fontSize: '14px' }}>It is a minimally invasive surgical
                        procedure to diagnose and treat shoulder joint issues using a specialized camera and instruments.</p>
                      <a href="/Services/ShoulderArthroscopy" className="btn btn-sm btn-primary border-0">View more</a>
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

export default specializationsmain;