import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 mx-auto p-3">
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullName" placeholder="Your Full Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email Address" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6 mx-auto p-3">
          <h6><b>Contact Information</b></h6>
          <p><strong>Address:</strong> 123 Orthopedic Street, Cityville, State, Zip</p>
          <p><strong>Email:</strong> info@orthopedicclinic.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Location:</strong></p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d121769.53644129232!2d78.3157501399495!3d17.493281812225007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb91ed28d0b17b%3A0xf3c21851c3557425!2sMIG-251%2C%20Road%20No.%204%2C%20K%20P%20H%20B%20Phase%201%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!3m2!1d17.493298799999998!2d78.3981519!5e0!3m2!1sen!2sin!4v1702966699963!5m2!1sen!2sin" width="500" height="200" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='locationstyle'></iframe>'
        </div>
      </div>
    </div>
  );
}

export default ContactUs

