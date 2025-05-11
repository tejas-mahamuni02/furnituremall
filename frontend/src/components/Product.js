import React, { Component } from 'react'

export default class Product extends Component {
  constructor() {
    super()
    this.state = {
      furniture: [
        { id: 1, image: './images/product-1.png', name: "Nordic Chair", price: 50.0 },
        { id: 2, image: './images/product-2.png', name: "Nordic Chair", price: 50.0 },
        { id: 3, image: './images/product-3.png', name: "Kruzo Aero Chair", price: 78.0 },
        { id: 4, image: './images/product-1.png', name: "Ergonomic Chair", price: 43.0 },
        { id: 1, image: './images/product-1.png', name: "Nordic Chair", price: 50.0 },
        { id: 2, image: './images/product-2.png', name: "Nordic Chair", price: 50.0 },
        { id: 3, image: './images/product-3.png', name: "Kruzo Aero Chair", price: 78.0 },
        { id: 4, image: './images/product-1.png', name: "Ergonomic Chair", price: 43.0 },
      ]
    }
    console.log(this.state.furniture[0])
  }
  render() {
    return (
      <div className='container pb-5' >
        <div className='row row-cols-1 row-cols-md-4 g-4 mt-5 text-center pb-5'>
          {
            this.state.furniture.map((item, index) => {
              return (
                <div className='col' >
                  <div className='card h-100 shadow border-0' style={{ backgroundColor: "#eff2f1" }}>
                    <img src={item.image} alt='' className='card-img-top' />
                    <div className='card-body'>
                      <h3>{item.name}</h3>
                      <p className='fs-4'>${item.price}</p>
                      <i class="fa-solid fa-circle-plus fs-2" title='Add To Cart'></i>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
