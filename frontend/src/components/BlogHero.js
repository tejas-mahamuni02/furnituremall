import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function BlogHero() {
  return (
    <div className=' container-fluid' style={{ backgroundColor: "rgb(59, 93, 80)" }}>
      <Row className='px-5'>
        <Col md={5} className='mt-5'>
          <h1 className='text-white display-4 fw-bold mt-5'>Blog</h1>
          <p className='text-light'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <Button variant="warning" className='rounded-pill px-5 py-3'>Shop Now</Button>
          <Button variant="outline-light" className='rounded-pill px-5 py-3 ms-2'>Explore</Button>
        </Col>
        <Col md={7}>
          <img src='./images/couch.png' alt="couch" className='h-100 img-fluid w-100 float-end' ></img>
        </Col>
      </Row>

    </div>
  )
}

export default BlogHero
