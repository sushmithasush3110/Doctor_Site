import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logoimg from '../assets/logomain.png';

function Header() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <div className='col-12'>
            <div className="row">
              <div className="col-5">
                <div className='row'>
                  <a className="navbar-brand" href="/"><img src={logoimg} style={{ width: '50%' }} alt="Logo"></img></a>
                </div>
              </div>

              <div className="col-7">
                <div className='row'>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{alignItems:'end', float:'right', width:'fit-content'}}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0"  style={{alignItems:'end',display:'flex', flexDirection:'column'}}>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/AboutUS">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Services">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/ContactUS">Contact Us</a>
                      </li>
                    </ul>
                  </div>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-black ">
        <div class="container-fluid">
          <a className="navbar-brand" href="/" style={{width:'65%'}}><img src={logoimg} style={{ width: '30%' }} alt="Logo"></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
            <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="/AboutUS">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="/Services">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="/ContactUS">Contact Us</a>
                      </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;



