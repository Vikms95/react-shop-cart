import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

function Item(props) {
  const {
    cartItems,
    image,
    title,
    slug,
    addItemToCart,
    incrementItem,
    decrementItem,
    isItemInCart,
  } = props;

  /**
   * Find item with the same title as the one
   * on this Item component and return its amount key
   */
  const renderItemAmount = () => {
    const item = cartItems.find((cartItem) => cartItem.title === title);
    return item.amount;
  };

  return (
    <div
      className="item"
      data-image={image}
      data-title={title}
    >
      <div>
        <img className="item-image" src={image} alt={slug} />
        <button
          type="button"
          onClick={() => addItemToCart(image, title)}
          className="toggle-item-button"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <div className="display-item-amount">
          {isItemInCart(title) && `x${renderItemAmount()}` }
        </div>

        <h2 className="item-text">{title}</h2>
      </div>
      <div className={`item-buttons ${isItemInCart(title) ? 'show' : 'hidden'}`}>
        <button
          type="button"
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
          className="increment"
          onClick={() => incrementItem(title)}
        >
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>
    </div>
  );
}

export default Item;
