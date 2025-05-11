import React from 'react'


export default function Footer() {
  return (
    <div className='container mt-5 p-50 d-flex flex-column' >
      <div className='row'>
        <div className='col-6 mt-5'>
          <div className='row'>
            <i className="fa-regular fa-envelope col-1"></i>
            <p className='col-5'> Subscribe to Newsletter</p>
          </div>
          <div className='row d-flex flex-row '>
            <input type="text" className="form-control p-2 me-3 w-25 col-4" id="exampleFormControlInput1" placeholder="Enter Your Name" />
            <input type="email" className="form-control w-25 col-4 me-3" id="exampleFormControlInput1" placeholder="Enter Your Email" />
            <button type="button" className="btn col-2 rounded" style={{ backgroundColor: "rgb(59, 93, 80)" }}><i className="fa-solid fa-paper-plane fs-6" style={{ color: "white" }}></i></button>
          </div>
        </div>
        <div className='col-6'>
          <img src='./images/sofa.png' alt='' height={300} className='float-end me-5 position-relative bottom-50 start-50 translate-middle-x' />
        </div>
      </div>
      <div className='row'>
        <h1>Furni</h1>
      </div>
      <div className='row'>
        <div className='col-4'>
          <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
          <div class="d-flex">
            <button type="button" class="btn  rounded-circle btn-md-square me-2" style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class="fa-brands fa-twitter" style={{ color: "rgb(59, 93, 80)" }}></i></button>
            <button type="button" class="btn  rounded-circle btn-md-square me-2" style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class="fa-brands fa-facebook-f" style={{ color: "rgb(59, 93, 80)" }}></i></button>
            <button type="button" class="btn  rounded-circle btn-md-square me-2" style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class="fa-brands fa-youtube" style={{ color: "rgb(59, 93, 80)" }}></i></button>
            <button type="button" class="btn  rounded-circle btn-md-square me-2" style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class="fa-brands fa-linkedin" style={{ color: "rgb(59, 93, 80)" }}></i></button>

          </div>
        </div>
        <div className='col-2'>
          <ul class="list-unstyled px-4">
            <li class="mb-3">About Us</li>
            <li class="mb-3">Services</li>
            <li class="mb-3">Blog</li>
            <li class="mb-3">Contact Us</li>
          </ul>

        </div>
        <div className='col-2'>
          <ul class="list-unstyled px-4">
            <li class="mb-3">Support</li>
            <li class="mb-3">Knowledge Base </li>
            <li class="mb-3">Live Chat</li>

          </ul>
        </div>
        <div className='col-2'>
          <ul class="list-unstyled px-4">
            <li class="mb-3">Jobs</li>
            <li class="mb-3">Our Team</li>
            <li class="mb-3">Leadership</li>
            <li class="mb-3">Privacy Policy</li>
          </ul>
        </div>
        <div className='col-2'>
          <ul class="list-unstyled px-4">
            <li class="mb-3">Nordiac Chair</li>
            <li class="mb-3">Kruzo Aero</li>
            <li class="mb-3">Ergonomic Chair</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <p className='fs-5 mt-3 col-6'>Copyright © 2024. All Rights Reserved. — Designed By Shrutika  and Tejas </p>
        <p className='col-6'>
          <ul className='float-end list-unstyled d-flex mt-3'>
            <li className='ms-3'>Terms & Conditions</li>
            <li className='ms-3'>Privacy Policy</li>
          </ul>
        </p>
      </div>
    </div>
  )
}
