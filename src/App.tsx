import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import React, { useRef, useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Shop from './components/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import urlHandler from './utils/urlHandler';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isShopRendered, setIsShopRendered] = useState(false);
  const [isHomePageRendered, setIsHomePageRendered] = useState(false);
  const [url, setUrl] = useState('popular');
  const rootRef = useRef(null);

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

  const fetchItems = async (urlToPass) => {
    const urlToFetch = urlHandler(urlToPass);
    const response = await fetch(urlToFetch);
    const data = await response.json();
    console.log(data.results);
    setItems(data.results);
  };

  return (
    <main ref={rootRef} className="App">
      <BrowserRouter>
        {!isHomePageRendered && (
        <Header
          url={url}
          setUrl={setUrl}
          cartItems={cartItems}
          fetchItems={fetchItems}
          isShopRendered={isShopRendered}
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
                rootRef={rootRef}
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
    </main>
  );
}

export default App;
