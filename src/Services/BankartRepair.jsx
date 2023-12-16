import React from 'react';
import BankartRepairImg from './Bankartrepairimg1.jpg';

const BankartRepair = () => {
  return (
    <div className='text-md-justify' style={{ lineHeight: '1.75' }}>
      <div className='container-fluid position-relative' style={{ padding: '0px', marginBottom: '60px' }}>
        <div className='col-md-12'>
          <img src={BankartRepairImg} alt='Bankart Repair Image' className='' style={{ width: '100%' }} />
          <div className='row position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#f2f2f2bd', color: '#131212bd', borderRadius: '20px' }}>
            <h2>Bankart Repair</h2>
          </div>
        </div>
      </div>

      <div className='container' style={{ background: '#f2f2f2', padding: '60px' }}>
        <div className='row' style={{ paddingLeft: '40px', textAlign: 'justify' }}>
          <div className='col-md-12'>
            <div className='row'>
              <h4>Definition:-</h4>
              <hr />
              <p style={{ paddingLeft: '40px' }}>
                Bankart Repair is a surgical procedure that addresses shoulder instability by repairing a tear in the labrum, a piece of cartilage attached to the shoulder socket. Let's explore the description, symptoms, causes, diagnosis, and treatment associated with Bankart Repair.
              </p>
              <h6>Description:</h6>
              <p style={{ paddingLeft: '40px' }}>
                Bankart Repair involves the surgical reattachment of the torn labrum to the rim of the shoulder socket. This procedure is commonly performed arthroscopically, allowing for minimally invasive surgery.
              </p>
              <h4>Symptoms:</h4>
              <hr />
              <p style={{ paddingLeft: '40px' }}>
                Symptoms Indicating the Need for Bankart Repair:
              </p>
              <ol style={{ paddingLeft: '40px' }}>
                <li>
                  <strong>Recurrent Shoulder Dislocations:</strong> Multiple instances of the shoulder dislocating or feeling unstable.
                </li>
                <li>
                  <strong>Persistent Shoulder Pain:</strong> Chronic pain in the shoulder, especially during certain movements.
                </li>
                <li>
                  <strong>Decreased Range of Motion:</strong> Limited ability to move the shoulder through its full range of motion.
                </li>
              </ol>
              <h4>Causes:</h4>
              <hr />
              <p style={{ paddingLeft: '40px' }}>
                Common Causes Requiring Bankart Repair:
              </p>
              <ol style={{ paddingLeft: '40px' }}>
                <li>
                  <strong>Shoulder Dislocation:</strong> A previous shoulder dislocation can lead to a Bankart lesion.
                </li>
                <li>
                  <strong>Trauma:</strong> Injuries, such as falls or collisions, can cause labral tears.
                </li>
                <li>
                  <strong>Overuse:</strong> Repetitive overhead movements or strain on the shoulder joint.
                </li>
              </ol>
              <h4>Diagnosis:</h4>
              <hr />
              <p style={{ paddingLeft: '40px' }}>
                Diagnostic Process for Bankart Repair:
              </p>
              <ol style={{ paddingLeft: '40px' }}>
                <li>
                  <strong>Medical History and Physical Examination:</strong> The physician evaluates the patient's medical history and conducts a physical examination to assess shoulder symptoms and function.
                </li>
                <li>
                  <strong>Imaging Studies:</strong> MRI or CT scans may be ordered to visualize the shoulder joint and identify labral tears.
                </li>
              </ol>
              <h4>Treatment:</h4>
              <hr />
              <p style={{ paddingLeft: '40px' }}>
                Treatment Modalities in Bankart Repair:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <ol>
                  <li>
                    <strong>Arthroscopic Bankart Repair:</strong> The torn labrum is reattached to the shoulder socket using arthroscopic techniques.
                  </li>
                  <li>
                    <strong>Rehabilitation Exercises:</strong> Post-surgery, physical therapy is essential to regain shoulder strength and stability.
                  </li>
                </ol>
              </ul>
              <h4>Recovery and Rehabilitation:</h4>
              <hr />
              <p style={{ paddingLeft: '40px' }}>
                Recovery Following Bankart Repair:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <ol>
                  <li>
                    <strong>Postoperative Care:</strong> Following the surgery, adherence to postoperative care instructions is crucial, including rest and physical therapy.
                  </li>
                  <li>
                    <strong>Gradual Return to Activities:</strong> The timeline for returning to regular activities will be guided by the surgeon based on individual healing.
                  </li>
                </ol>
              </ul>
              <h4>Risks and Complications:</h4>
              <hr />
              <p style={{ paddingLeft: '40px' }}>
                Potential Risks of Bankart Repair:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <ol>
                  <li>
                    <strong>Infection:</strong> Risk of infection at the surgical site.
                  </li>
                  <li>
                    <strong>Bleeding:</strong> Bleeding within the joint or at the incision sites.
                  </li>
                  <li>
                    <strong>Nerve or Vascular Injury:</strong> Rare instances of damage to nerves or blood vessels near the shoulder.
                  </li>
                </ol>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankartRepair;
