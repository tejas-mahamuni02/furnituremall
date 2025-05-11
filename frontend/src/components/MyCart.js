import React, { useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { useUser } from './UserContext';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
function MyCart() {
  const { user, cart, setCart } = useUser()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/loginform');
    }
  }, [user, navigate]);

  const updateCart = (updatedItem) => {
    fetch("http://localhost:8080/cart/updatetocart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }).then((response) => {
      if (response.ok) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === updatedItem.id ? updatedItem : item
          )
        );
      }
    }).catch((error) => {
      console.error("Error updating cart item:", error);
    });
  };

  const incqty = (item) => {
    const updatedItem = { ...item, qty: item.qty + 1 };
    console.log(updatedItem)
    updateCart(updatedItem);
  };
  function decqty(item) {
    if (item.qty > 1) {
      const updatedItem = { ...item, qty: item.qty - 1 };
      updateCart(updatedItem)
    }
  }
  function deletefromcart(item) {
    fetch(`http://localhost:8080/cart/deletefromcart/${item.cartid}`, {
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
    }).catch((err) => {
      console.log("error to delete item")
    })
  }
  function gettotal() {
    let total = 0
    cart.map((item) => {
      total = total + (item.price * item.qty - ((item.price * item.qty) * (item.discount / 100)));
      // total = total + item.price * item.qty;
    })
    return total
  }
  return (
    <div className='container py-5'  >
      <div className='card'>
        <div className=" p-5 mb-1 text-center">
          <table className='table mt-4'>
            <thead><tr><th>ID</th><th>PRODUCT</th><th>PRODUCT NAME</th><th>Quantity</th><th>DISCOUNT</th><th>PRICE</th><th>BUY</th><th>DELETE</th></tr></thead>
            <tbody>
              {

                cart.map((c, i) => {
                  return (
                    <tr key={i}>
                      <td>{c.id}</td>
                      <td><img src={c.image} height={100} width={100} alt='' /></td>
                      <td>{c.name}</td>
                      <td><i class="fa-solid fa-circle-plus fs-4 me-3" title='Add To Cart' onClick={() => incqty(c)} ></i><span id="qty" className='fs-4'>{c.qty}</span><i class="fa-solid fa-circle-minus fs-4 ms-3" onClick={() => decqty(c)}></i></td>
                      <td>{c.discount}</td>
                      <td><p className='text-decoration-line-through'>{c.price * c.qty} ₹</p>
                        <b>{c.price * c.qty - ((c.price * c.qty) * (c.discount / 100))} ₹</b></td>
                      <td> <Link to={`/bookform/${encodeURIComponent(JSON.stringify(c))}`} ><Button style={{ backgroundColor: "rgb(59, 93, 80)" }} title='Buy Now'>Buy Now</Button></Link></td>
                      <td><MdDelete className='fs-2 text-danger' onClick={() => deletefromcart(c)} /></td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr><td colSpan={2}>{cart.length} items: </td><td colSpan={2}>Total Cart Cost:{gettotal()} ₹ </td></tr>
            </tfoot>
          </table>
        </div>

      </div>

    </div >
  )
}

export default MyCart
