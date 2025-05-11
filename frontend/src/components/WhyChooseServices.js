import React, { Component } from 'react'

export default class WhyChooseServices extends Component {
  constructor() {
    super()
    this.state = {
      service: [
        { icon: "<span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: 'rgb(220, 229, 228)' }}><i className='fa-solid fa-truck position-relative top-0 start-0 translate-middle fs-4></i>", tag: "Fast & Free Shipping", info: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
        { icon: "<span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: 'rgb(220, 229, 228)' }}><i class='fa-solid fa-bag-shopping position-relative top-0 start-0 translate-middle fs-3'></i></span>", tag: "Easy to Shop", info: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
        { icon: "<span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: 'rgb(220, 229, 228)' }}><i class='fa-solid fa-life-ring position-relative top-0 start-0 translate-middle fs-3'></i></span>", tag: "24/7 Support", info: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
        { icon: "<span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: 'rgb(220, 229, 228)' }}><i class='fa-solid fa-retweet position-relative top-0 start-0 translate-middle fs-3'></i></span>", tag: "Hassle Free Returns", info: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },

      ]
    }
  }
  render() {
    return (
      <div className='container mt-5 mb-5 pb-5'>
        <div className='row row-cols-1 row-cols-md-4'>
          {/* {
            this.state.service.map((item, index) => {
              return <div className='mt-5'>
                <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
                
                  <i className="fa-solid fa-truck position-relative top-0 start-0 translate-middle fs-4"></i></span>
                <h6 className='mt-3'>Fast & Free Shipping</h6>
                <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
            })

          } */}

          <div className='mt-5'>
            <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i className="fa-solid fa-truck position-relative top-0 start-0 translate-middle fs-4"></i></span>
            <h6 className='mt-3'>Fast & Free Shipping</h6>
            <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className='mt-5'>
            <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class='fa-solid fa-bag-shopping position-relative top-0 start-0 translate-middle fs-3'></i></span>
            <h6 className='mt-3'>Easy to Shop</h6>
            <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className='mt-5'>
            <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class='fa-solid fa-life-ring position-relative top-0 start-0 translate-middle fs-3'></i></span>
            <h6 className='mt-3'>24/7 Support</h6>
            <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className='mt-5'>
            <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class='fa-solid fa-retweet position-relative top-0 start-0 translate-middle fs-3'></i></span>
            <h6 className='mt-3'>Fast & Free Shipping</h6>
            <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className='mt-5'>
            <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i className="fa-solid fa-truck position-relative top-0 start-0 translate-middle fs-4"></i></span>
            <h6 className='mt-3'>Fast & Free Shipping</h6>
            <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className='mt-5'>
            <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class='fa-solid fa-bag-shopping position-relative top-0 start-0 translate-middle fs-3'></i></span>
            <h6 className='mt-3'>Easy to Shop</h6>
            <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className='mt-5'>
            <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class='fa-solid fa-life-ring position-relative top-0 start-0 translate-middle fs-3'></i></span>
            <h6 className='mt-3'>24/7 Support</h6>
            <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className='mt-5'>
            <span className='me-2 rounded-circle p-2 mt-5' style={{ backgroundColor: "rgb(220, 229, 228)" }}>
              <i class='fa-solid fa-retweet position-relative top-0 start-0 translate-middle fs-3'></i></span>
            <h6 className='mt-3'>Fast & Free Shipping</h6>
            <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>


        </div>
      </div>
    )
  }
}
