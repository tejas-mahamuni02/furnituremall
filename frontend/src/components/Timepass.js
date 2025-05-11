import React from 'react'
import { useUser } from './UserContext'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyBookings() {
  let { user, setUser, cart, setCart, bookings, setBookings } = useUser()
  const incqty = (item) => {
    const updatedItem = { ...item, qty: item.qty + 1 };
    console.log(updatedItem)
    // updateCart(updatedItem);
  };
  function decqty(item) {
    if (item.qty > 1) {
      const updatedItem = { ...item, qty: item.qty - 1 };
      // updateCart(updatedItem)
    }
  }
  function changeprod(item) {
    console.log("Clicked Here ")
    console.log(item)
  }
  return (
    <div className='container py-5'  >
      <div className='card'>
        <div className=" p-5 mb-1 text-center">
          <div className='row row-cols-md-4 px-5  border border-bottom border-3 m-auto' style={{ width: "95%" }}>
            <div className="col">Image</div>
            <div className="col">Item Name</div>
            <div className="col">Item Price</div>
            <div className="col">QTY</div>

          </div>
          <div className="scroll">
            {
              bookings.map((item, index) => {
                return (
                  <div className='row row-cols-md-4 g-4 p-5 border  border-3 align-items-center m-auto' key={index} onClick={() => changeprod(item)} style={{ width: "95%" }}>
                    <div className="col">
                      <img src={item.image} alt="" height={200} />
                    </div>
                    <div className="col">{item.name}</div>
                    <div className="col">{item.price} ₹</div>
                    <div className="col">item-4</div>

                  </div>)
              })
            }



          </div>


        </div>

      </div>

    </div >
  )
}

export default MyBookings
