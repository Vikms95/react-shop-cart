import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function ItemImage(props) {
  const {
    title,
    image,
    slug,
    gameInfoModalRef,
    addItemToGameInfo,
    isItemInCart,
  } = props;

  return (
    <div className="">
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
      <div className={`display-item-in-cart ${(
        isItemInCart(title))
        ? 'show'
        : 'hidden'}`}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
}

export default ItemImage;
