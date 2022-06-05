import React, { useEffect, useState, useRef } from 'react';
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
  const [gameInfoModal, setGameInfoModal] = useState({});
  const [isModalRendered, setIsModalRendered] = useState(false);
  const gameInfoModalRef = useRef(null);

  const fetchItems = async () => {
    const urlToFetch = urlHandler(url);
    const response = await fetch(urlToFetch);
    const data = await response.json();
    console.log(data.results);
    setItems(data.results);
  };

  const revealModal = () => {
    setIsModalRendered(true);
  };

  const addItemToGameInfo = (itemTitle, infoModal) => {
    const itemToAdd = items.find((item) => item.name === itemTitle);

    setGameInfoModal((prevItemCart) => ({
      images: [...itemToAdd.short_screenshots],
      release: itemToAdd.released,
      platforms: itemToAdd.parent_platforms,
      genres: itemToAdd.genres,
      esrbRating: itemToAdd.esrb_rating,
    }));

    revealModal();
  };

  const isClickOutsideModal = (event) => (
    gameInfoModalRef.current
    && isModalRendered
    && !gameInfoModalRef.current.contains(event.target)
  );

  const handleClickOutside = (event) => {
    if (isClickOutsideModal(event)) {
      setIsModalRendered(false);
    }
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
      gameInfoModalRef={gameInfoModalRef}
      addItemToGameInfo={addItemToGameInfo}
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
      {isModalRendered && (
      <GameInfoModal
        gameInfoModal={gameInfoModal}
        gameInfoModalRef={gameInfoModalRef}
        handleClickOutside={handleClickOutside}
      />
      )}
      {renderItemsShop()}
    </section>
  );
}

export default Shop;
