import React from 'react'
import { Link } from 'react-router-dom'

function ProductSection() {
  let furni = [
    { id: 1, image: './images/product-2.png', name: "Nordic Chair", price: 50.0 },
    { id: 2, image: './images/product-3.png', name: "Kruzo Aero Chair", price: 78.0 },
    { id: 3, image: './images/product-1.png', name: "Ergonomic Chair", price: 43.0 },
  ]
  return (
    <div className='productsection mt-5 mb-5 py-5' id='products'>
      <div className='container mt-5 mb-5 ' style={{ color: "#2f2f2f" }}>
        <div className='row'>
          <div className='col-3' >
            <h3 className='mt-3'>Crafted with excellent material.</h3>
            <p className='mt-3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique </p>
            <Link to='/shop'><button type="button" class="btn p-3 rounded-pill mt-3" style={{ backgroundColor: "#2f2f2f", color: "white" }}>Explore</button></Link>
          </div>

          {
            furni.map((item, index) => {
              return <div className='col-3'>
                <div className='card h-100  border-0' style={{ backgroundColor: "#eff2f1" }}>
                  <img src={item.image} alt='' className='card-img-top' />
                  <div className='card-body'>
                    <h3>{item.name}</h3>
                    <p className='fs-4'>${item.price}</p>
                  </div>
                </div>
              </div>
            })
          }
          {/* <div className='col-3'>
            <div className='card h-100 shadow border-0'>
              <img src="" alt='' className='card-img-top' />
              <div className='card-body'>
                <h3>{item.name}</h3>
                <p className='fs-4'>${item.price}</p>
                <i class="fa-solid fa-circle-plus fs-2"></i>
              </div>
            </div>
          </div>
          <div className='col-3'></div>
          <div className='col-3'></div> */}
        </div>
      </div>
    </div>
  )
}

export default ProductSection
