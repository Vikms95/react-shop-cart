import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
/* eslint-disable import/no-cycle */
import { ICartItem } from '../Shop/Shop';

interface Props{
  title: string
  cartItems: ICartItem[]
  isItemInCart: (event: any, ref?: any, condition?: any) => boolean
  decrementItem: (itemTitle: string) => void
  incrementItem: (itemTitle: string) => void
}

function ItemBottom(props: Props) {
  const {
    title,
    cartItems,
    isItemInCart,
    decrementItem,
    incrementItem,
  } = props;

  /**
   * Find item with the same title as the one
   * on this Item component and return its amount key
   */
  const renderItemAmount = () => {
    const itemToRender = cartItems.find((cartItem) => cartItem.title === title);
    return itemToRender.amount;
  };

  return (
    <>
      <h2 className="item-text">{title}</h2>
      <div className={`item-buttons ${
        (isItemInCart(title))
          ? 'show'
          : 'hidden'}`}
      >
        <button
          type="button"
          data-testid="decrement"
          className="decrement"
          onClick={() => decrementItem(title)}
        >
          <FontAwesomeIcon icon={faCircleMinus} />
        </button>
        <div className="amount-display">
          {' '}
          {isItemInCart(title) && renderItemAmount()}
          {' '}
        </div>
        <button
          type="button"
          data-testid="increment"
          className="increment"
          onClick={() => incrementItem(title)}
        >
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>
    </>
  );
}

export default ItemBottom;
