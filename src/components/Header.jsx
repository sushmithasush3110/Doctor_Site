import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logoimg from '../assets/logo.png';

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light p-3">
        <div class="container-fluid">
          <a className="navbar-brand " href="/" style={{width:'70%'}}><img src={logoimg}className='logostyle' alt="Logo"></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
            <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="/AboutUS">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Services">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/ContactUS">Contact Us</a>
                      </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;



