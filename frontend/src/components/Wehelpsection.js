import React from 'react'
import './style.css'
function Wehelpsection() {
  return (
    <div className='wehelpsection mt-5 pt-4 pb-0'>
      <div className='container' style={{ color: "#2f2f2f" }}>
        <div className='row'>
          <div className='col-md-7'>
            <img src='./images/img-grid-1.jpg' alt='' height={550} className='rounded '></img>
            <img src='/images/img-grid-2.jpg' alt='' width={200} className='rounded ms-5 position-absolute start-25 mb-5'></img>
            <div className=' w-25 h-25 position-relative bottom-25 start-50 '>
              <img src='/images/img-grid-3.jpg' alt='' height={450} className='rounded position-relative bottom-100 end-100'></img></div>

          </div>
          <div className='col-md-5'>
            <h2 className='w-75'>We Help You Make Modern Interior Design</h2>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
            <div className='row row-cols-1 row-cols-md-2 g-2 mt-3'>
              <div className='row'>
                <ul className='ullist'>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ul>
              </div>
              <div className='row'>
                <ul className='ullist'>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ul>
              </div>
              <div className='row'>
                <ul className='ullist'>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ul>
              </div>
              <div className='row'>
                <ul className='ullist'>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ul>
              </div>
            </div>
            <button type="button" class="btn px-4 py-2 rounded-pill mt-3 fw-bold" style={{ backgroundColor: "#2f2f2f", color: "white" }}>Explore</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Wehelpsection
