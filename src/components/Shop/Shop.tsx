import React, { useEffect, useState, useRef } from 'react';
import Item from '../Item/Item';
import urlHandler from '../../utils/urlHandler';
import GameInfoModal from '../GameInfoModal/GameInfoModal';

function Shop(props) {
  const {
    url,
    rootRef,
    items,
    setItems,
    cartItems,
    fetchItems,
    incrementItem,
    decrementItem,
    addItemToCart,
    removeItemFromCart,
    isItemInCart,
    setIsShopRendered,
  } = props;

  const [gameInfoModal, setGameInfoModal] = useState({});
  const [isModalRendered, setIsModalRendered] = useState(false);
  const gameInfoModalRef = useRef(null);

  const revealModal = () => {
    setIsModalRendered(true);
  };

  const addItemToGameInfo = (itemTitle) => {
    const itemToAdd = items.find((item) => item.name === itemTitle);

    setGameInfoModal((prevItemCart) => ({
      title: itemToAdd.name,
      rating: itemToAdd.rating,
      image: itemToAdd.background_image,
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
    fetchItems(url);
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
        rootRef={rootRef}
        isItemInCart={isItemInCart}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
        gameInfoModal={gameInfoModal}
        gameInfoModalRef={gameInfoModalRef}
        setIsModalRendered={setIsModalRendered}
        handleClickOutside={handleClickOutside}
      />
      )}
      {renderItemsShop()}
    </section>
  );
}

export default Shop;
