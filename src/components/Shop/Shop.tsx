import React, { useEffect, useState, useRef } from 'react';
import Modal from '../Modal/Modal';
/* eslint-disable import/no-cycle */
import Item from '../Item/Item';
import { ICartItem } from '../../App';

interface Props{
  items: any[]
  cartItems: ICartItem[]
  url: string | HTMLInputElement
  updateIsShopRendered: (value: boolean) => void
  incrementItem: (itemTitle: string) => void
  decrementItem: (itemTitle: string) => void
  isItemInCart: (itemTitle: string) => boolean
  removeItemFromCart: (itemTitle: string) => void
  addItemToCart: (itemImage: string, itemTitle: string) => void
  fetchItems: (urlToPass: string | HTMLInputElement) => Promise<void>
  isClickOutside: (event: MouseEvent, ref?: any, condition?: any) => boolean
}

function Shop(props: Props) {
  const {
    url,
    items,
    cartItems,
    fetchItems,
    isItemInCart,
    addItemToCart,
    incrementItem,
    decrementItem,
    isClickOutside,
    removeItemFromCart,
    updateIsShopRendered,
  } = props;

  const [gameInfoModal, setGameInfoModal] = useState({});
  const [isModalRendered, setIsModalRendered] = useState(false);

  const gameInfoModalRef = useRef(null);

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
    updateIsShopRendered(true);
    return () => {
      updateIsShopRendered(false);
    };
  }, []);

  const hideModal = () => {
    setIsModalRendered(false);
  };

  const revealModal = () => {
    setIsModalRendered(true);
  };

  /**
   * Takes the info from the items prop
   * to prepare that which will be displayed on the GameInfoModal
   */
  const addItemToGameInfo = (itemTitle: string) => {
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
      slug={item.slug}
      title={item.name}
      rating={item.rating}
      cartItems={cartItems}
      image={item.background_image}
      isItemInCart={isItemInCart}
      addItemToCart={addItemToCart}
      incrementItem={incrementItem}
      decrementItem={decrementItem}
      addItemToGameInfo={addItemToGameInfo}
      removeItemFromCart={removeItemFromCart}
    />
  ));

  return (
    <section className="shop-container">
      {isModalRendered && (
      <Modal
        key={url as string}
        gameInfoModal={gameInfoModal}
        isModalRendered={isModalRendered}
        gameInfoModalRef={gameInfoModalRef}
        hideModal={hideModal}
        isItemInCart={isItemInCart}
        addItemToCart={addItemToCart}
        isClickOutside={isClickOutside}
        removeItemFromCart={removeItemFromCart}
      />
      )}
      {renderItemsShop()}
    </section>
  );
}

export default Shop;
