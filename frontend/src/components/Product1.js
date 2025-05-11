import React, { useState } from 'react'
import { useUser } from './UserContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Product1() {
  const [furniture, setFurniture] = useState([
    { id: 1, image: '../images/product-1.png', name: "Nordic Chair", qty: 1, price: 25000.0, discount: 10 },
    { id: 2, image: '../images/product-2.png', name: "Nordic Chair", qty: 1, price: 45000.0, discount: 10 },
    { id: 3, image: '../images/product-3.png', name: "Kruzo Aero Chair", qty: 1, price: 20000.0, discount: 10 },
    { id: 4, image: '../images/product-1.png', name: "Ergonomic Chair", qty: 1, price: 30000.0, discount: 10 },
    { id: 1, image: '../images/product-1.png', name: "Nordic Chair", qty: 1, price: 25000.0, discount: 10 },
    { id: 2, image: '../images/product-2.png', name: "Nordic Chair", qty: 1, price: 45000.0, discount: 10 },
    { id: 3, image: '../images/product-3.png', name: "Kruzo Aero Chair", qty: 1, price: 20000.0, discount: 10 },
    { id: 4, image: '../images/product-1.png', name: "Ergonomic Chair", qty: 1, price: 30000.0, discount: 10 },
  ])
  const { user, setUser, cart, setCart, bookings, setBookings } = useUser()
  // console.log(cart)

  function addtocart(cartitem, index) {

    setCart([...cart, cartitem])
    // document.getElementById(`item${index + 1}`).style.display = "none";
    let thiscartitem = { ...cartitem, "user": user }
    fetch("http://localhost:8080/cart/addtocart", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thiscartitem)
    }).then(() => {
      fetch(`http://localhost:8080/cart/getMyCart/${user.id}`, {
        method: "get",
      }).then((result1) => {
        result1.json().then((resp1) => {
          console.log(resp1)
          setCart(resp1)
        }).catch((err) => {
          setCart([])
        })
      })
    })
  }
  return (
    <div className='container pb-5 product' >
      <div className='row row-cols-1 row-cols-md-4 g-5 mt-5 text-center pb-5'>
        {
          furniture.map((item, index) => {

            {
              if (bookings.some((bookingitem) => bookingitem.id === item.id))
                return <></>
              else {
                if (cart.some((cartitem) => cartitem.id === item.id)) {
                  let checkedcartItem = cart.find(cartitem => cartitem.id === item.id && cartitem.user.id === user.id);
                  // console.log(cartItem)
                  item = checkedcartItem
                }
                // const cartItem = cart.find(cartitem => cartitem.id === item.id && cartitem.user.id === user.id);
                // const itemToLink = cartItem ? cartItem : item;
                // const encodedItemString = encodeURIComponent(JSON.stringify(itemToLink));

                const encodedItemString = encodeURIComponent(JSON.stringify(item));
                return (

                  < div className='col' key={index} >

                    <div className='card h-100 shadow border-0' style={{ backgroundColor: "#eff2f1" }}>
                      <div className='badge-container'>
                        <span class="notify-badge rounded-pill">{item.discount}% off
                        </span>
                        <img src={item.image} width={200} alt='' className='card-img-top' />
                      </div>


                      <div className='card-body'>
                        <h3>{item.name}</h3>
                        <p className='fs-4'>{item.price} ₹</p>
                        <p className='fs-4'></p>
                        {/* <Link to={`/bookform/${encodeURIComponent(JSON.stringify(item))}`} > <Button style={{ backgroundColor: "rgb(59, 93, 80)" }} title='Buy Now'>Buy Now</Button></Link> <br /> */}

                        <Link to={`/bookform/${encodedItemString}`}>
                          <Button style={{ backgroundColor: "rgb(59, 93, 80)" }} title='Buy Now'>Buy Now</Button>
                        </Link><br />
                        {/* {cartItem ? (
                          <Link to={`/bookform/${encodedItemString}`}>
                            <Button style={{ backgroundColor: "rgb(59, 93, 80)" }} title='Buy Now'>Buy Now</Button>
                          </Link>
                        ) : (
                          <Link to={`/bookform/${encodedItemString}`}>
                            <Button style={{ backgroundColor: "rgb(59, 93, 80)" }} title='Buy Now'>Buy Now</Button>
                          </Link>
                        )} <br /> */}




                        {cart.some((cartitem) => cartitem.id === item.id) ? null : <i class="fa-solid fa-circle-plus fs-2 mt-3" id={`item${index + 1}`} title='Add To Cart' onClick={() => addtocart(item, index)}></i>}


                      </div>
                    </div>
                  </div>
                )
              }
            }
          })

        }
      </div>
    </div >
  )
}

export default Product1
