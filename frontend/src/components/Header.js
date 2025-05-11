import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart } from "react-icons/bs";
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Contact from './Contact';
import { Button } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useUser } from './UserContext';
import MyCart from './MyCart';
import Bookform from './Bookform';
import { useEffect } from 'react';
import MyProfile from './MyProfile';
import Mydata from './Mydata';
import MyBookings from './MyBookings';


function Header() {

  const { user, cart, bookings } = useUser()

  function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('bookings')
    fetch("http://localhost:8080/user/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    window.location.reload();
  }

  return (
    <BrowserRouter>
      <div className="container-fluid  p-0" >
        <Navbar data-bs-theme="dark" className='container-fluid  text-white' style={{ backgroundColor: "rgb(59, 93, 80)" }}>
          <Container>
            <Link to='/'><Navbar.Brand href="#home" className='fs-2 fw-bold text-white'>Furni.</Navbar.Brand></Link>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fs-5">
                <Nav.Link className='p-3'><Link to='/'>Home</Link></Nav.Link>
                {user ? <Nav.Link className='p-3'><Link to='/shop'>Shop</Link></Nav.Link> : null}
                <Nav.Link className='p-3'><Link to='/about'>About Us</Link></Nav.Link>
                <Nav.Link className='p-3'><Link to='/services'>Services</Link></Nav.Link>
                <Nav.Link className='p-3'><Link to='/blog'>Blog</Link></Nav.Link>
                <Nav.Link className='p-3'><Link to='/contact'>Contact Us</Link></Nav.Link>
                {user ? <Nav.Link className='p-3' onClick={logout}>Logout</Nav.Link> : <Nav.Link className='p-3'> <Link to='/loginform'><Button variant="warning" className='rounded  text-black' >Login</Button></Link></Nav.Link>}
                {user ? null : <Nav.Link className='p-3'><Link to='/registerform'> <Button variant="warning" className='rounded  text-black'>Register</Button></Link></Nav.Link>}
                {user ? <> <Nav.Link className='p-3'><Link to='/MyProfile'><i className="fa-regular fa-user fs-4 text-white"></i></Link></Nav.Link>
                  <Nav.Link className='p-3'><Link to='/MyCart'><BsCart className='fs-4 mb-2 text-white' /><sup className='fs-5'>{cart.length}</sup></Link></Nav.Link></> : null}
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>

        {/* <Modern></Modern> */}

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/registerform' element={<RegisterForm />}></Route>
          <Route path='/loginform' element={<LoginForm />}></Route>
          <Route path='/MyCart' element={<MyCart />}></Route>
          <Route path='/bookform/:item' element={<Bookform />}></Route>
          <Route path='/MyProfile/' element={<MyProfile />}>
            <Route path='mydata' element={<Mydata />}></Route>
            <Route path='mybookings' element={<MyBookings />}></Route>
          </Route>
        </Routes>

      </div >
    </BrowserRouter>
  );

}
export default Header;
