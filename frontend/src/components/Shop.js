import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';
import Product1 from './Product1';
function Shop(props) {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate('/loginform');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Optionally, you can return a loading spinner or a message here
  }
  return (
    <div style={{ backgroundColor: "#eff2f1" }} className='pb-5'>
      <div className=' container-fluid' style={{ backgroundColor: "rgb(59, 93, 80)" }}>
        <Row className='px-5'>
          <Col className='mt-5 pb-5 px-5'>
            <h1 className='text-white display-4 fw-bold py-5'>Shop {user.name}</h1>
          </Col>
        </Row>

      </div>
      {/* <Product className="py-5 mb-5"></Product> */}
      <Product1 className="py-5 mb-5"></Product1>
    </div>
  )
}

export default Shop
