import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
//@ts-ignore
import toOneDecimal from '../../utils/toOneDecimal';

function ItemTop(props) {
  const {
    title, image, rating, isItemInCart, removeItemFromCart, addItemToCart,
  } = props;

  return (
    <div>
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
    </div>
  );
}

export default ItemTop;
