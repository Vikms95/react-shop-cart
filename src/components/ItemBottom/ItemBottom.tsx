import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function ItemBottom(props) {
  const {
    cartItems,
    decrementItem,
    isItemInCart,
    title,
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
