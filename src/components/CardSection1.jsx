import specicard from '../assets/front_view.jpg'
import memcard from '../assets/doc_nurse.jpg'

export default function CardSection() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-6 p-3'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="card" style={{ borderRadius: '30px', padding: '0px' }}>
                                        <div className="card-body" style={{ backgroundImage: `url(${specicard})`, backgroundSize: 'cover', padding: '200px 0px 0px 0px', borderRadius: '30px' }}>
                                            <div style={{ background: "#f2f2f2bd", borderRadius: '0px 0px 30px 30px', padding: '20px' }}>
                                                <h3 className="card-title">Specializations</h3>
                                                <ul>
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
                        </div>
                        <div className='col-md-6 p-3'>
                            <div className='row'>
                                <div className="card" style={{ borderRadius: '30px', padding: '0px' }}>
                                    <div className="card-body" style={{ backgroundImage: `url(${memcard})`, backgroundSize: 'cover', padding: '200px 0px 0px 0px', borderRadius: '30px' }}>
                                        <div style={{ background: "#f2f2f2bd", borderRadius: '0px 0px 30px 30px', padding: '30px' }}>
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
                    </div>
                </div>
            </div>
        </div>

    )
}