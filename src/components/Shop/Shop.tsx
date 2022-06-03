import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
// import itemsArray from '../data/items';
import urlHandler from '../../utils/urlHandler';

function Shop(props) {
  const {
    url,
    cartItems,
    incrementItem,
    decrementItem,
    addItemToCart,
    removeItemFromCart,
    isItemInCart,
    setIsShopRendered,
  } = props;

  const [items, setItems] = useState([]);

  // Everytime url variable changes, fetch data
  const fetchItems = async () => {
    const urlToFetch = urlHandler(url);
    console.log(urlToFetch);
    const response = await fetch(urlToFetch);
    const data = await response.json();
    setItems(data.results);
  };

  const renderItemsShop = () => items.map((item) => (
    <Item
      cartItems={cartItems}
      key={item.slug}
      alt={item.slug}
      image={item.background_image}
      title={item.name}
      addItemToCart={addItemToCart}
      removeItemFromCart={removeItemFromCart}
      incrementItem={incrementItem}
      decrementItem={decrementItem}
      isItemInCart={isItemInCart}
    />
  ));

  useEffect(() => {
    fetchItems();
  }, [url]);

  useEffect(() => {
    setIsShopRendered(true);
    return () => {
      setIsShopRendered(false);
    };
  }, []);

  return (
    <section
      className="shop-container"
    >
      {renderItemsShop()}
    </section>
  );
}

export default Shop;
