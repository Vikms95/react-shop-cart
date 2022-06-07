import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus, faTrashCan, faStar, faEye, faCirclePlus, faCircleMinus, faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import toOneDecimal from '../../utils/toOneDecimal';

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
    setIsModalRendered,
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
    <div
      className="item"
      data-image={image}
      data-title={title}
    >
      <div>
        <img
          className="item-image"
          src={image}
          alt={slug}
          onClick={() => addItemToGameInfo(title, gameInfoModalRef)}
          aria-hidden="true"
        />
        <FontAwesomeIcon
          icon={faEye}
          className="game-details-icon"
          onClick={() => addItemToGameInfo(title, gameInfoModalRef)}
        />
        <button
          type="button"
          onClick={
            (isItemInCart(title))
              ? () => removeItemFromCart(title)
              : () => addItemToCart(image, title)
          }
          className="toggle-item-button"
        >
          {(isItemInCart(title))
            ? 'Remove'
            : 'Add to cart'}

        </button>
        <div className="rating">
          <span className="rating-score">
            {(rating === 0)
              ? <span className="no-reviews">Pending</span>
              : toOneDecimal(rating)}
          </span>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={`display-item-in-cart ${(
          isItemInCart(title))
          ? 'show'
          : 'hidden'}`}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>

        <h2 className="item-text">{title}</h2>
      </div>
      <div className={`item-buttons ${
        (isItemInCart(title))
          ? 'show'
          : 'hidden'}`}
      >
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
