import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Shop from './components/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const isItemInCart = (itemTitle) => (
    cartItems.some((item) => item.title === itemTitle)
  );

  /**
     *Take element image, title and props from
     *the clicked item and pass it to ShoppingCart state
     *if element is already in Cart, removeItemFromCart button
     *will appear
     */
  const addItemToCart = (event, itemImage, itemTitle) => {
    // Obsolete when conditional rendering add
    if (isItemInCart(itemTitle)) return;

    setCartItems((prevCartItems) => (
      [...prevCartItems, { image: itemImage, title: itemTitle }]
    ));
  };

  const removeItemFromCart = (event, itemTitle) => {
    if (!isItemInCart(itemTitle)) return;

    setCartItems((prevCartItems) => (
      prevCartItems.filter((item) => item.title === itemTitle)
    ));
  };

  return (
    <BrowserRouter>
      <Header
        cartItems={cartItems}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={(
            <Shop
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              isItemInCart={isItemInCart}
            />
)}
        />
        <Route
          path="/cart"
          element={(
            <ShoppingCart
              cartItems={cartItems}
            />
)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
