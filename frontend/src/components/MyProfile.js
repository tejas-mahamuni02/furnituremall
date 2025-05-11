import React, { useEffect } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import { Nav } from 'react-bootstrap';

function MyProfile() {
  const { user, cart, setCart } = useUser()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/loginform');
    }
  }, [user, navigate]);
  return (


    <div className='container py-5'  >
      <div className='card'>
        <div className="p-2  text-center ">
          <Nav justify variant="underline" defaultActiveKey="/MyProfile/mydata">
            <Nav.Item>
              <Nav.Link as={Link} to="/MyProfile/mydata" eventKey="link-1" className='myprofilenavlink text-dark fw-bold'>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/MyProfile/mybookings" eventKey="link-2" className='myprofilenavlink text-dark fw-bold'>My Bookings</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="p-3 m-3 text-dark border border-1" id=''>
          <Outlet></Outlet>
        </div>


      </div>

    </div >



  )
}

export default MyProfile
