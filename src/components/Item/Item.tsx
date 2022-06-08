import React from 'react';

import ItemTop from '../ItemTop/ItemTop';
import ItemImage from '../ItemImage/ItemImage';
import ItemBottom from '../ItemBottom/ItemBottom';

function Item(props) {
  const {
    cartItems,
    image,
    title,
    slug,
    rating,
    addItemToCart,
    removeItemFromCart,
    incrementItem,
    decrementItem,
    isItemInCart,
    addItemToGameInfo,
    gameInfoModalRef,
  } = props;

  return (
    <div
      className="item"
      data-image={image}
      data-title={title}
    >
      <ItemTop
        title={title}
        image={image}
        rating={rating}
        isItemInCart={isItemInCart}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />

      <ItemImage
        slug={slug}
        title={title}
        image={image}
        isItemInCart={isItemInCart}
        gameInfoModalRef={gameInfoModalRef}
        addItemToGameInfo={addItemToGameInfo}
      />

      <ItemBottom
        title={title}
        cartItems={cartItems}
        isItemInCart={isItemInCart}
        decrementItem={decrementItem}
        incrementItem={incrementItem}
      />
    </div>
  );
}

export default Item;
