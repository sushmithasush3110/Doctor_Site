import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Stories = () => {
  return (
    <div className='container-fluid p-5' style={{background:'#ccc'}}>
      <h2 className='text-center mb-3 pb-3' style={{color:'rgb(62, 147, 193)'}}>Testimonials</h2>
    <Carousel className='mx-auto' style={{ maxWidth: '800px', background: '#f2f2f2', borderRadius:'30px'}}>
      <Carousel.Item interval={1000} className='p-5 text-align-justify w-100' style={{borderRadius:'30px'}}>
        <div className='text-center'>
          <h4>Ankush Patial</h4>
          <h3>Visited For Bone FractureSpinal Therapy</h3>
          <p>Very much frustrated with the behavior of the staff there. They didn't even look at us and said the doctor is busy because we went the second time, so no fee. We try convincing for 20 mins but they didn't give a proper response and not even asked the doctor</p>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={500} className='p-5 text-align-justify'>
        <div className='text-center'>
          <h4>Sivaram ch</h4>
          <h3>Visited For Spine Mobilization</h3>
          <p>Very much frustrated with the ehaviour of the staff there. They didn't even look us and said doctor is busy because we went second time so no fee. We try convincing for 20 mins but they didn't give proper response and not even asked doctor</p>
        </div>
      </Carousel.Item>

      <Carousel.Item className='p-5 text-align-justify'>
        <div className='text-center'>
          <h4>Amarnath</h4>
          <h3>Visited For Spinal Surgery</h3>
          <p>i underwent spinal surgery at a well known hospital 3 years back,but my symptoms persisted even after surgery i tried to bear it for couple of years went to Kerala, Ayurveda and homeo none of them worked then i started visiting lots of spine surgeons but none of gave me the solution i went to dr ajay he ran some tests and diagnosed me as failed back so he suggested surgery again i waited for 3 months before i made my mind for surgery now it is 4 months of surgery im completely normal thanks to dr ajay .</p>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Stories;
