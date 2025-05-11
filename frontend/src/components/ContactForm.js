import React from 'react'
import Button from 'react-bootstrap/Button';
function ContactForm() {
  return (
    <div className='container mt-5 mb-5 px-5'>
      <div className='w-75 m-auto'>
        <div className='row pt-5'>
          <div className='col-lg-4 d-flex'>
            <i class="fa-solid fa-location-dot text-white p-3 rounded-4 fs-4 " style={{ backgroundColor: "rgb(59, 93, 80)" }}></i>
            <div className='ms-2'>43 Raymouth Rd. Baltemoer, London 3910</div>
          </div>
          <div className='col-lg-4 d-flex' >
            <i class="fa-regular fa-envelope text-white p-3 rounded-4 fs-4" style={{ backgroundColor: "rgb(59, 93, 80)" }}></i>
            <div className='ms-2'>info@yourdomain.com</div>
          </div>
          <div className='col-lg-4 d-flex'>
            <i class="fa-solid fa-phone text-white p-3 rounded-4 fs-4" style={{ backgroundColor: "rgb(59, 93, 80)" }}></i>
            <div className='ms-2'>43 Raymouth Rd. Baltemoer, London 3910</div>
          </div>

        </div>

        <div className='pt-5 pb-5'>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="firstname" class="form-label">First Name</label>
              <input type="text" class="form-control py-2 fs-5 rounded-3 " id="firstname" />
            </div>
            <div class="col-md-6 ">
              <label for="lastname" class="form-label">Last Name</label>
              <input type="text" class="form-control py-2 fs-5 rounded-3" id="lastname" />
            </div>
            <div class="col-12">
              <label for="Emailaddress" class="form-label">Email Address</label>
              <input type="email" class="form-control py-2 fs-5 rounded-3" id="Emailaddress" />
            </div>
            <div class="col-12">
              <label for="Emailaddress" class="form-label">Email Address</label>
              <textarea rows={4} class="form-control py-2 fs-5 rounded-3 mb-5" id="Emailaddress" />
            </div>
            <Button className='rounded-5 px-3  py-2 ms-2 col-2 fw-bold bg-black mb-5'>Send Message</Button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactForm
