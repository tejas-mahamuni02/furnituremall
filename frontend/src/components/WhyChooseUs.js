import React from 'react'

function WhyChooseUs() {
  return (
    <div className='whychooseus mt-5 mb-5 py-5'>
      <div className='container pb-5' style={{ color: "#2f2f2f" }}>
        <div className='row'>
          <div className='col-md-7'>
            <div className='row'>
              <h3>Why Choose Us</h3>
              <p className='col-md-10'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            </div>
            <div className='row'>
              <div className='col-md-6 mt-5'>
                <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
                  <i className="fa-solid fa-truck position-relative top-0 start-0 translate-middle fs-4"></i></span>
                <h6 className='mt-3'>Fast & Free Shipping</h6>
                <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
              <div className='col-md-6 mt-5'>
                <span className='me-2 rounded-circle p-2 mt-5 ' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
                  <i class="fa-solid fa-bag-shopping position-relative top-0 start-0 translate-middle fs-3"></i></span>
                <h6 className='mt-3'>Easy to Shop</h6>
                <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 mt-5'>
                <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
                  <i class="fa-solid fa-life-ring position-relative top-0 start-0 translate-middle fs-3"></i></span>
                <h6 className='mt-3'>24/7 Support </h6>
                <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
              <div className='col-md-6 mt-5'>
                <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
                  <i class="fa-solid fa-retweet position-relative top-0 start-0 translate-middle fs-3"></i></span>
                <h6 className='mt-3'>Hassle Free Returns</h6>
                <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <img src='./images/why-choose-us-img.jpg' alt='' width={550} className='rounded-5'></img>
          </div>
        </div>
      </div>
    </div >
  )
}

export default WhyChooseUs
