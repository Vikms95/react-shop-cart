import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Shop from './components/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isShopRendered, setIShopRendered] = useState(false);

  const isItemInCart = (itemTitle) => (
    cartItems.some((item) => item.title === itemTitle)
  );

  /**
     *Take element image, title and props from
     *the clicked item and pass it to ShoppingCart state
     *if element is already in Cart, removeItemFromCart button
     *will appear
     */
  const addItemToCart = (itemImage, itemTitle) => {
    // Obsolete when conditional rendering is added
    if (isItemInCart(itemTitle)) return;

    setCartItems((prevCartItems) => (
      [...prevCartItems, { image: itemImage, title: itemTitle, amount: 1 }]
    ));
  };

  const removeItemFromCart = (itemTitle) => {
    if (!isItemInCart(itemTitle)) return;

    setCartItems((prevCartItems) => (
      prevCartItems.filter((item) => item.title !== itemTitle)
    ));
  };

  /**
   * Increments an Item that has been already
   * added to the cart by one unit
   */
  const incrementItem = (itemTitle) => {
    const itemToIncrement = cartItems.find((item) => item.title === itemTitle);
    setCartItems((prevCartItems) => (
      prevCartItems.map((item) => (
        (item === itemToIncrement)
          ? { ...item, amount: item.amount + 1 }
          : { ...item }

      ))));
  };

  /**
   * Decrements an Item that has been already
   * added to the cart by one unit
   */
  const decrementItem = (itemTitle) => {
    const itemToDecrement = cartItems.find((item) => item.title === itemTitle);
    if (itemToDecrement.amount === 1) {
      removeItemFromCart(itemTitle);
      return;
    }

    setCartItems((prevCartItems) => (
      prevCartItems.map((item) => (
        (item === itemToDecrement)
          ? { ...item, amount: item.amount - 1 }
          : { ...item }

      ))));
  };

  return (
    <BrowserRouter>
      <Header
        cartItems={cartItems}
        isShopRendered={isShopRendered}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={(
            <Shop
              cartItems={cartItems}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              setIsShopRendered={setIShopRendered}
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
