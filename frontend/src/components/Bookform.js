import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from './UserContext';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Bookform() {
  const { user, cart, setCart, setBookings } = useUser()
  const params = useParams();

  var [thisitem, setThisitem] = useState(JSON.parse(params.item))
  console.log(thisitem)
  console.log(thisitem.cartid)
  let [address, setAddress] = useState(user.address)
  let [packagingcharges, setPackagingCharges] = useState(100)
  let startingtotal = ((thisitem.price * thisitem.qty) - ((thisitem.price * thisitem.qty) * (thisitem.discount / 100)))
  let [total, setTotal] = useState(startingtotal)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/loginform');
    }
  }, [user, navigate, thisitem]);
  // console.log(cart.some((cartitem) => cartitem.id === thisitem.id && cartitem.userid === thisitem.userid))
  const incqty = (item) => {
    let updateditem = { ...item, qty: item.qty + 1 };
    setPackagingCharges(100 * updateditem.qty)
    setThisitem(updateditem);
    let total = ((updateditem.price * updateditem.qty) - ((updateditem.price * updateditem.qty) * (updateditem.discount / 100)));
    setTotal(total)
  };
  function decqty(item) {
    if (item.qty > 1) {
      let updateditem = { ...item, qty: item.qty - 1 };
      setPackagingCharges(100 * updateditem.qty)
      setThisitem(updateditem)
      let total = ((updateditem.price * updateditem.qty) - ((updateditem.price * updateditem.qty) * (updateditem.discount / 100)));
      setTotal(total)
    }
  }
  function deleteFromCart() {
    fetch(`http://localhost:8080/cart/deletefromcart/${thisitem.cartid}`, {
      method: "DELETE"
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
    }).catch(() => {
      console.log("Not Present in Cart")
    })
  }
  function getMyBookings() {
    fetch(`http://localhost:8080/bookings/getMyBookings/${user.id}`, {
      method: "get",
    }).then((result2) => {
      result2.json().then((resp2) => {
        setBookings(resp2)
      }).catch((err) => {
        setBookings([])
      })
    })
  }
  function bookproduct(e) {
    let bookingitem = { ...thisitem, address, packagingcharges, user, total }
    e.preventDefault();
    fetch("http://localhost:8080/bookings/save", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingitem)
    }).then(() => {
      console.log("Item Booked Successfully")
      // if (cart.some((cartitem) => cartitem.id === thisitem.id && cartitem.userid === thisitem.userid)) {
      //   let cartItem = cart.find(cartitem => cartitem.id === thisitem.id && cartitem.userid === user.id);
      //   setThisitem(cartItem)
      // }

      if (thisitem.cartid) {
        deleteFromCart()
      }
      getMyBookings()
      setThisitem(null)
      setTotal(0)
      navigate("/")

    }).catch((err) => {
      console.log(err)
    })
    console.log("Clicked")
  }
  return (
    <div className='container py-5 overflow-hidden mb-5 pb-5'  >
      <Form onSubmit={bookproduct}>
        <div className='row  g-3'>
          <div className='col-md-7 card p-3'>
            <div className='row'>
              <div className='col-md-6 text-center'><img src={thisitem.image} height={300} width={300} alt=''></img></div>
              <div className='col-md-6 fw-bold d-flex flex-column justify-content-evenly'>
                <h4>{thisitem.name}</h4>
                <h4 ><span className='text-decoration-line-through'>{thisitem.price} ₹ </span> &nbsp;&nbsp;<span>{thisitem.price - (thisitem.price * (thisitem.discount / 100))} ₹</span> &nbsp;&nbsp; <span style={{ color: "red" }} className='fs-6'>{thisitem.discount} %off</span></h4>

                <h5>QTY: &nbsp;&nbsp;<i class="fa-solid fa-circle-plus fs-4 me-3" title='Add To Cart' onClick={() => incqty(thisitem)} ></i><span id="qty" className='fs-4'>{thisitem.qty}</span><i class="fa-solid fa-circle-minus fs-4 ms-3" onClick={() => decqty(thisitem)}></i></h5>
              </div>
            </div>

          </div>
          <div className="col-md-1"></div>
          <div className='col-md-4 card p-3'>
            <h5>Price Details</h5>
            <hr />
            <div className='row  row-cols-md-2 g-3'>
              <div className='col'>Price ({thisitem.qty} items)</div>
              <div className='col fw-bold'>{thisitem.price * thisitem.qty} ₹</div>
              <div className="col">Discount</div>
              <div className='col fw-bold text-success'>- {(thisitem.price * thisitem.qty) * (thisitem.discount / 100)} ₹</div>
              <div className='col'>Delhivery Charges</div>
              <div className='col fw-bold'><span className='text-decoration-line-through'>₹100</span> <span className='text-success'>Free</span></div>
              <div className='col'>Secured Packaging Fee</div>
              <div className='col fw-bold'>{packagingcharges}</div>
            </div>
            <hr />
            <div className='row  row-cols-md-2 g-3'>
              <div className='col fw-bold fs-5'>Total Amount</div>
              <div className='col fw-bold fs-5'>{total}</div>
            </div>
            <hr />
            <div className='text-success fw-bold'>
              You will save ₹ {((thisitem.price * thisitem.qty) * (thisitem.discount / 100)) + 100} on this order
            </div>
          </div>
          <div className=' card p-4'>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address (You Can Change Address)</Form.Label>
              <Form.Control placeholder="Enter Name" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>
            <hr />
            <Form.Group as={Row} className="mb-3">

              <Col sm={{ span: 9, offset: 9 }}>
                <Button type="submit" className='px-5 py-2 fw-bold fs-5' style={{ backgroundColor: "rgb(59, 93, 80)" }} title='Buy Now'>Place Order</Button>
              </Col>
            </Form.Group>
          </div>

        </div>
      </Form>
    </div >
  )
}

export default Bookform
