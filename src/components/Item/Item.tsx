import React, { SyntheticEvent } from 'react';
import ItemTop from '../ItemTop/ItemTop';
import ItemImage from '../ItemImage/ItemImage';
/* eslint-disable import/no-cycle */
import ItemBottom from '../ItemBottom/ItemBottom';
import { ICartItem } from '../../App';

interface Props{
    cartItems: ICartItem[]
    image: string
    title: string
    rating: string
    slug: string
    addItemToCart: (itemImage: string, itemTitle: string) => void
    removeItemFromCart: (itemTitle: string) => void
    incrementItem: (itemTitle: string) => void
    decrementItem: (itemTitle: string) => void
    isItemInCart: (itemTitle: string) => boolean
    addItemToGameInfo: (itemTitle: string) => void
}

function Item(props: Props) {
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
  } = props;

  return (
    <div
      className="item"
      data-testid="item"
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
