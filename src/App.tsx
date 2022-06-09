import './styles/App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import urlHandler from './utils/urlHandler';

function App() {
  const [items, setItems] = useState([]);
  const [url, setUrl] = useState('popular');
  const [cartItems, setCartItems] = useState([]);
  const [isShopRendered, setIsShopRendered] = useState(false);
  const [isHomePageRendered, setIsHomePageRendered] = useState(false);

  /**
   *Gets element image, title and props from
    *the clicked item and pass it to ShoppingCart state
    *if element is already in Cart, removeItemFromCart button
    *will appear
  */
  const addItemToCart = (itemImage, itemTitle) => {
    setCartItems((prevCartItems) => (
      [...prevCartItems, { image: itemImage, title: itemTitle, amount: 1 }]
    ));
  };

  const removeItemFromCart = (itemTitle) => {
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

  const fetchItems = async (urlToPass) => {
    const urlToFetch = urlHandler(urlToPass);
    const response = await fetch(urlToFetch);
    const data = await response.json();
    setItems(data.results);
  };

  const isClickOutside = (event, ref, condition) => (
    ref.current
    && condition
    && !ref.current.contains(event.target)
  );

  const isItemInCart = (itemTitle) => (
    cartItems.some((item) => item.title === itemTitle)
  );

  return (
    <BrowserRouter>
      {!isHomePageRendered && (
      <Header
        setUrl={setUrl}
        cartItems={cartItems}
        isShopRendered={isShopRendered}
        isClickOutside={isClickOutside}
      />
      )}
      <Routes>
        <Route
          path="/"
          element={(
            <HomePage
              setIsHomePageRendered={setIsHomePageRendered}
            />
    )}
        />
        <Route
          path="/shop"
          element={(
            <Shop
              url={url}
              items={items}
              setItems={setItems}
              cartItems={cartItems}
              fetchItems={fetchItems}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              setIsShopRendered={setIsShopRendered}
              isItemInCart={isItemInCart}
              isClickOutside={isClickOutside}
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
