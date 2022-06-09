import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import toOneDecimal from '../../utils/toOneDecimal';

interface Props{
  title: string
  image: string
  rating: string
  isItemInCart: (event: any, ref?: any, condition?: any) => boolean
  addItemToCart: (itemImage: string, itemTitle: string) => void
  removeItemFromCart: (itemTitle: string) => void
}

function ItemTop(props: Props) {
  const {
    title,
    image,
    rating,
    isItemInCart,
    removeItemFromCart,
    addItemToCart,
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
          {(parseFloat(rating) === 0)
            ? <span className="no-reviews">Pending</span>
            : toOneDecimal(rating)}
        </span>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
}

export default ItemTop;
