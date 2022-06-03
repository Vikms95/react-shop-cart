import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
// import itemsArray from '../data/items';
import BestItems from '../../UrlHandler';

function Shop(props) {
  const {
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
    const response = await fetch(BestItems);
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
  }, []);

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
