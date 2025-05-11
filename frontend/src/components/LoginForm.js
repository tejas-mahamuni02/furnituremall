
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

function LoginForm(props) {
  let navigate = useNavigate()
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  const { user, setUser, cart, setCart, bookings, setBookings } = useUser()

  function login(e) {
    e.preventDefault();
    fetch(`http://localhost:8080/user/getUser/${email}/${password}`, {
      method: "get",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        setUser(resp)
        getMyCartItems(resp)
        getMyBookings(resp)
      }).catch((err) => {

        setUser(null)
        setCart([])
        setBookings([])
      })
    })
    function getMyCartItems(user) {
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
    }
    function getMyBookings(user) {
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

    navigate('/')
  }

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);


  return (
    <div className='container-fluid row  p-5'>
      <div className=' container-fluid col-md-9  ' style={{ color: "#2f2f2f" }} >
        <h1 className='text-center'>Login Form</h1>
        <Form className='p-5' onSubmit={login} >
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form >
      </div >
    </div >
  )
}

export default LoginForm
