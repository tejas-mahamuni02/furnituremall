import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext()
// Create a provider component
export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  })

  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  })
  // const [cart, setCart] = useState([])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    if (cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart');
    }
    if (bookings) {
      localStorage.setItem('bookings', JSON.stringify(bookings))
    }
    else {
      localStorage.removeItem('bookings')
    }
  }, [user, cart, bookings]);

  return (
    <UserContext.Provider value={{ user, setUser, cart, setCart, bookings, setBookings }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);