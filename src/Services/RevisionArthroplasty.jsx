import React from 'react';
import RevisionArthroplastyImg from '../assets/Revarthroplastyimg.jpg';

const RevisionArthroplasty = () => {
  return (
    <div className='text-md-justify' style={{ lineHeight: '2' }}>
      <div className='container-fluid position-relative' style={{ padding: "0px", marginBottom: '60px' }}>
        <div className="col-md-12">
          <img src={RevisionArthroplastyImg} alt="" className='' style={{ width: "100%" }} />
          <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
            <h2>Revision Hip and Knee Arthroplasty</h2>
          </div>
        </div>
      </div>

      <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
        <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
          <div className='col-md-12'>
            <div className='row'>
              <h4>Definition:</h4><hr />
              <p style={{ paddingLeft: '40px' }}>
                Revision Hip and Knee Arthroplasty is a surgical procedure involving the replacement or repair of a previously implanted artificial hip or knee joint. This procedure is performed when the initial joint replacement has complications or fails to function correctly.
              </p>
              <h4>Description:</h4>
              <p style={{ paddingLeft: '40px' }}>
                Revision Arthroplasty entails the removal of the original implant, correction of any issues, and the installation of new components to restore joint function. It is a more complex procedure than the primary joint replacement.
              </p>
              <h4>Symptoms:</h4><hr />
              <p style={{ paddingLeft: '40px' }}>
                Indications for Revision Hip and Knee Arthroplasty include:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <li><strong>Persistent Joint Pain:</strong> Continual pain in the hip or knee region after the initial joint replacement.</li>
                <li><strong>Loosening of Implant:</strong> Instability or feeling of the joint being loose.</li>
                <li><strong>Infection:</strong> Presence of an infection in or around the artificial joint.</li>
                <li><strong>Fracture:</strong> Fractures around the implant area.</li>
                <li><strong>Wear and Tear:</strong> Wear and tear of the artificial joint components leading to malfunction.</li>
              </ul>
              <h4>Causes:</h4><hr />
              <p style={{ paddingLeft: '40px' }}>
                Common Causes Requiring Revision Hip and Knee Arthroplasty:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <li><strong>Implant Wear:</strong> Deterioration of artificial joint components over time.</li>
                <li><strong>Implant Loosening:</strong> Poor fixation of the initial implant leading to instability.</li>
                <li><strong>Joint Instability:</strong> Dislocation or instability of the artificial joint.</li>
                <li><strong>Infection:</strong> Infection in or around the joint.</li>
                <li><strong>Fracture:</strong> Fractures affecting the stability of the implant.</li>
              </ul>
              <h4>Diagnosis:</h4><hr />
              <p style={{ paddingLeft: '40px' }}>
                Diagnosis involves a thorough assessment of the patient's symptoms, medical history, and imaging studies such as X-rays and MRIs to identify the cause of joint dysfunction.
              </p>
              <h4 >Treatment:</h4><hr />
              <p style={{ paddingLeft: '40px' }}>
                Treatment Modalities in Revision Hip and Knee Arthroplasty:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <ol>
                  <li><strong>Implant Removal:</strong> Extraction of the existing artificial joint components.</li>
                  <li><b>Correction of Issues:</b> Addressing any issues, such as infection or instability.</li>
                  <li><b>New Implant:</b> Implantation of new joint components to restore function.</li>
                  <li><b>Rehabilitation:</b> Postoperative rehabilitation to regain joint strength and function.</li>
                </ol><br />
              </ul>
              <h4>Risks and Complications:</h4><hr />
              <p style={{ paddingLeft: '40px' }}>
                Potential Risks of Revision Hip and Knee Arthroplasty:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <ol>
                  <li><strong>Infection:</strong> Risk of infection at the surgical site.</li>
                  <li><b>Bleeding:</b> Potential for bleeding during and after the procedure.</li>
                  <li><b>Nerve or Vascular Injury:</b> Rare instances of damage to nerves or blood vessels near the joint.</li>
                  <li><b>Implant Failure:</b> Possibility of failure of the new joint components.</li>
                </ol><br />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevisionArthroplasty;
