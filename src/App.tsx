import './styles/App.css';
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
/* eslint-disable import/no-cycle */
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import urlHandler from './utils/urlHandler';

export interface ICartItem{
  amount: number
  image: string
  title: string
}

function App() {
  const [items, setItems] = useState([]);
  const [isShopRendered, setIsShopRendered] = useState(false);
  const [cartItems, setCartItems] = useState<Array<ICartItem>>([]);
  const [isHomePageRendered, setIsHomePageRendered] = useState(false);
  const [url, setUrl] = useState<string | HTMLInputElement>('popular');

  const updateUrl = (state: string | HTMLInputElement) => {
    setUrl(state);
  };

  const updateIsShopRendered = (value: boolean) => {
    setIsShopRendered(value);
  };

  const updateIsHomePageRendered = (value: boolean) => {
    setIsHomePageRendered(value);
  };

  /**
   *Gets image and title from
    *the clicked item and pass it to CartItems state
  */
  const addItemToCart = (itemImage: string, itemTitle: string) => {
    setCartItems((prevCartItems) => (
      [...prevCartItems, { image: itemImage, title: itemTitle, amount: 1 }]
    ));
  };

  /**
   *Gets title from the clicked item and pass it to CartItems state
  */
  const removeItemFromCart = (itemTitle:string) => {
    setCartItems((prevCartItems) => (
      prevCartItems.filter((item) => item.title !== itemTitle)
    ));
  };

  /**
   * Increments an Item that has been already
   * added to the cart by one unit
   */
  const incrementItem = (itemTitle:string) => {
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
  const decrementItem = (itemTitle:string) => {
    const itemToDecrement = cartItems.find((item) => item.title === itemTitle);
    if (itemToDecrement?.amount === 1) {
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

  /**
   * Gets a string representing an URL, fetches that
   * URL and sets the items state to the returned data
   */
  const fetchItems = async (urlToPass: string | HTMLInputElement) => {
    const urlToFetch = urlHandler(urlToPass);
    const response = await fetch(urlToFetch);
    const data = await response.json();
    setItems(data.results);
  };

  /**
   * Takes a reference from an element and checks if
   * the click is within the element
   */
  const isClickOutside = (
    event: MouseEvent,
    ref?: React.MutableRefObject<any>,
    condition?: any,
  ) => (
    ref?.current
    && condition
    && !ref?.current.contains(event.target as HTMLInputElement)
  );

  /**
   * Checks if the passed item title is found
   * within the cartItems state
   */
  const isItemInCart = (itemTitle:string) => (
    cartItems.some((item) => item.title === itemTitle)
  );

  return (
    <HashRouter>
      {!isHomePageRendered && (
      <Navbar
        cartItems={cartItems}
        isShopRendered={isShopRendered}
        updateUrl={updateUrl}
        isClickOutside={isClickOutside}
      />
      )}
      <Routes>
        <Route
          path="/"
          element={(
            <HomePage
              updateIsHomePageRendered={updateIsHomePageRendered}
            />
    )}
        />
        <Route
          path="/shop"
          element={(
            <Shop
              url={url}
              items={items}
              cartItems={cartItems}
              fetchItems={fetchItems}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              updateIsShopRendered={updateIsShopRendered}
              isItemInCart={isItemInCart}
              isClickOutside={isClickOutside}
            />
    )}
        />
        <Route
          path="/cart"
          element={(
            <Cart
              cartItems={cartItems}
            />
    )}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
