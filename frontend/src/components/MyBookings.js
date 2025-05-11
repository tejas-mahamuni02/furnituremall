import React, { useState } from 'react'
import { useUser } from './UserContext'
import { Button, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { List } from 'react-content-loader'


function MyBookings() {
  let { user, setUser, cart, setCart, bookings, setBookings } = useUser()

  let [currentbooking, setCurrentBookings] = useState(null);
  function changeprod(item) {
    console.log("Clicked Here ")
    console.log(item)
    setCurrentBookings(item)
  }
  return (
    <div className='container row row-cols-md-2  '  >
      <div className='col'>
        <div className="mb-1 text-center fixTableHead">
          <table className='table'>
            <thead><tr><th>PRODUCT</th><th>PRODUCT NAME</th><th>PRICE</th><th>Quantity</th></tr></thead>
            <tbody >
              {
                bookings.map((item, i) => {
                  return (
                    <tr key={i} onClick={() => changeprod(item)} className='align-items-center fw-bold' title='Click Item To See Details'>
                      <td><img src={item.image} width={170} alt='' /></td>
                      <td>{item.name}</td>
                      <td>{item.price} ₹</td>
                      <td>{item.qty}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

      </div>
      <div className=" text-dark col ">
        <div class="row">

          <div class="card">
            <div class="card-body row">
              {currentbooking ?
                <>
                  <h5 class="card-title">Order</h5>
                  <div className="row row-cols-2 g-2 col-md-9">
                    <div className="col">Order ID</div>
                    <div className="col fw-bold">{currentbooking.bookingid}</div>
                    <div className="col">Total </div>
                    <div className="col fw-bold">{currentbooking.total} ₹</div>
                    <div className="col">Discount</div>
                    <div className="col fw-bold">{currentbooking.discount} %</div>
                    <div className="col">Shipping</div>
                    <div className="col fw-bold"><span className='text-success'>Free</span></div>
                    <div className="col">Packaging Charges</div>
                    <div className="col fw-bold">{currentbooking.packagingcharges} ₹</div>
                    <div className="col">Location</div>
                    <div className="col fw-bold">{currentbooking.address} </div>
                    <div className="col">Status</div>
                    <div className="col fw-bold"><span className='text-success'>Delhivered</span></div>
                  </div>
                  <div className='col-md-3 '>
                    <img src={currentbooking.image} width={150} alt='' />
                  </div>
                </>
                :
                <>
                  <h5 class="card-title">Order</h5>
                  <List />
                </>
              }
            </div>

          </div>

        </div>

      </div>
    </div >
  )
}

export default MyBookings
