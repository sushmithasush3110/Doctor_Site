import docimg1 from '../assets/docimg.png'
import Speclogo from '../assets/Speciallogo.png'
import memlogo from '../assets/memlogo.png'
import explogo from '../assets/quality.png'
export default function CardSection() {
    return (
        <div className='container-fluid p-0'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 pt-5'>
                        <div className='row'>
                            <div className='col-md-8 pt-5'>
                                <div className='row'>
                                    <h2>Dr Ajay kumar Parchuri</h2>
                                    <h3>MBBS,MS and M.CH</h3>
                                    <div><p><b style={{ color: 'rgb(157 83 83)' }}>BEST ORTHOPEDIC DOCTOR IN HYDERABAD </b>
                                        <small>WITH MORE THAN 18 YEARS OF EXPERIENCE IN CONSULTANT ORTHOPAEDICS, ARTHROSCOPY, TRAUMA & JOINT REPLACEMENT SURGEON</small></p></div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 p-3'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='row p-3'>
                                                    <div className="card border-0" style={{ width: "18rem;" }}>
                                                        <div className="card-body lh-base">
                                                            <img src={Speclogo} alt='' className='mb-2' style={{ width: "35%" }} />
                                                            <div className=''>
                                                                <h5 className="card-title">Specializations</h5>
                                                                <ul className='p-0'>
                                                                    <li>Spine Surgeon (Ortho)</li>
                                                                    <li>Spine And Pain Specialist</li>
                                                                    <li>Orthopedic surgeon</li>
                                                                    <li>Joint Replacement Surgeon</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='row p-3'>
                                                    <div className="card border-0" style={{ width: "18rem;" }}>
                                                        <div className="card-body lh-base ">
                                                            <img src={memlogo} alt='' className='mb-2' style={{ width: "35%" }} />
                                                            <h5 className="card-title">Memberships</h5>
                                                            <ul className='p-0'>
                                                                <li>Indian Orthopaedic Association</li>
                                                                <li>Indian Medical Association (IMA)</li>
                                                                <li>Indian Arthroscopy Society</li>
                                                                <li>&nbsp;</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row'>
                                    <img src={docimg1} alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-3' style={{ background: '#E9E9E9' }}>
                <div className='container p-5'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='row'>
                            <h4>Experience:</h4>
                            <ul>
                                <li>Consultant Orthopaedic & Arthroscopic Surgeon at Apollo Hospitals, Hyderabad</li>
                                <li>Junior Consultant at Apollo Hospitals, Hyderabad</li>
                                <li>Senior Registrar at Nizam's Institute of Medical Sciences (NIMS), Hyderabad</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <img src={explogo} alt='' className='mb-2' style={{ width: "50%" }} />
                    </div>
                </div>
                </div>
            </div>

        </div>

    )
}