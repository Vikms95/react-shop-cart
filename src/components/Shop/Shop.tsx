import React, { useEffect, useState, useRef } from 'react';
import Item from '../Item/Item';
import GameInfoModal from '../GameInfoModal/GameInfoModal';

interface Props{
  url: string
  items: any[]
  cartItems: any[]
  fetchItems: (urlToPass) => Promise<void>
  addItemToCart: (itemImage: any, itemTitle: any) => void
  removeItemFromCart: (itemTitle: any) => void
  incrementItem: (itemTitle: any) => void
  decrementItem: (itemTitle: any) => void
  setIsShopRendered: React.Dispatch<React.SetStateAction<boolean>>
  isItemInCart: (event: any, ref: any, condition: any) => boolean
  isClickOutside: (event: any, ref: any, condition: any) => boolean
}

function Shop(props: Props) {
  const {
    url,
    items,
    cartItems,
    fetchItems,
    addItemToCart,
    removeItemFromCart,
    incrementItem,
    decrementItem,
    setIsShopRendered,
    isItemInCart,
    isClickOutside,
  } = props;

  const [gameInfoModal, setGameInfoModal] = useState({});
  const [isModalRendered, setIsModalRendered] = useState(false);

  const gameInfoModalRef = useRef(null);

  const revealModal = () => {
    setIsModalRendered(true);
  };

  /**
   * Takes the info from the items prop
   * to prepare that which will be displayed on the GameInfoModal
   */
  const addItemToGameInfo = (itemTitle) => {
    const itemToAdd = items.find((item) => item.name === itemTitle);

    setGameInfoModal(() => (
      {
        title: itemToAdd.name,
        rating: itemToAdd.rating,
        image: itemToAdd.background_image,
        images: [...itemToAdd.short_screenshots],
        release: itemToAdd.released,
        platforms: itemToAdd.parent_platforms,
        genres: itemToAdd.genres,
        esrbRating: itemToAdd.esrb_rating,
      }
    ));

    revealModal();
  };

  const renderItemsShop = () => items.map((item) => (
    <Item
      key={item.name}
      cartItems={cartItems}
      slug={item.slug}
      image={item.background_image}
      title={item.name}
      rating={item.rating}
      addItemToCart={addItemToCart}
      removeItemFromCart={removeItemFromCart}
      incrementItem={incrementItem}
      decrementItem={decrementItem}
      isItemInCart={isItemInCart}
      addItemToGameInfo={addItemToGameInfo}
    />
  ));

  /**
   * Whenever the Shop is loaded, fetch the data
   * and only do it again when the URL prop is changed
   */
  useEffect(() => {
    fetchItems(url);
  }, [url]);

  /**
   * We set the isShopRendered prop on component
   * mount to let the components on the upper scope
   * know if the Shop is rendered
   */
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
        key={url}
        isItemInCart={isItemInCart}
        addItemToCart={addItemToCart}
        gameInfoModal={gameInfoModal}
        isClickOutside={isClickOutside}
        isModalRendered={isModalRendered}
        gameInfoModalRef={gameInfoModalRef}
        removeItemFromCart={removeItemFromCart}
        setIsModalRendered={setIsModalRendered}
      />
      )}
      {renderItemsShop()}
    </section>
  );
}

export default Shop;
