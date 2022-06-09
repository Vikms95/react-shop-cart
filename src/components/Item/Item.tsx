import React from 'react';
import ItemTop from '../ItemTop/ItemTop';
import ItemImage from '../ItemImage/ItemImage';
import ItemBottom from '../ItemBottom/ItemBottom';

interface Props{
    cartItems: any[]
    image: any
    title: any
    rating: any
    slug: any
    addItemToCart: (itemImage: any, itemTitle: any) => void
    removeItemFromCart: (itemTitle: any) => void
    incrementItem: (itemTitle: any) => void
    decrementItem: (itemTitle: any) => void
    isItemInCart: (event: any, ref: any, condition: any) => boolean
    addItemToGameInfo: (itemTitle: any) => void
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
