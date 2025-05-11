import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

function RegisterForm() {
  let navigate = useNavigate()
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [mobile, setmobile] = useState("")
  let [password, setPassword] = useState("")
  let [address, setAddress] = useState("")
  function save(e) {
    let user = { "name": name, "email": email, "mobile": mobile, "password": password, "address": address }
    e.preventDefault();
    fetch("http://localhost:8080/user/usersave", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    navigate('/')
  }
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className='container-fluid row  p-5  '>

      <div className=' container-fluid col-md-9  ' style={{ color: "#2f2f2f" }} >
        <h1 className='text-center'>Register Form</h1>
        <Form className='p-5' onSubmit={save} >
          <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Mobile</Form.Label>
            <Form.Control placeholder="Enter Mobile Number" value={mobile} onChange={(e) => setmobile(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form >
      </div >
    </div >
  )
}

export default RegisterForm
