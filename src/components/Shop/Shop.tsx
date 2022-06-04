import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import urlHandler from '../../utils/urlHandler';
import GameInfoModal from '../GameInfoModal/GameInfoModal';

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
  const [currentGameInfo, setCurrentGameInfo] = useState('');

  // Everytime url variable changes, fetch data
  const fetchItems = async () => {
    const urlToFetch = urlHandler(url);
    const response = await fetch(urlToFetch);
    const data = await response.json();
    console.log(data.results);
    setItems(data.results);
  };

  const renderItemsShop = () => items.map((item) => (
    <Item
      cartItems={cartItems}
      key={item.slug}
      alt={item.slug}
      image={item.background_image}
      title={item.name}
      rating={item.rating}
      addItemToCart={addItemToCart}
      removeItemFromCart={removeItemFromCart}
      incrementItem={incrementItem}
      decrementItem={decrementItem}
      isItemInCart={isItemInCart}
      setCurrentGameInfo={setCurrentGameInfo}
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
    <section className="shop-container">
      <GameInfoModal currentGameInfo={currentGameInfo} />
      {renderItemsShop()}
    </section>
  );
}

export default Shop;
