import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface Props{
  title: string
  image: string
  slug: string
  isItemInCart: (event: any, ref?: any, condition?: any) => boolean
  addItemToGameInfo: (itemTitle: string) => void
}

function ItemImage(props: Props) {
  const {
    title,
    image,
    slug,
    addItemToGameInfo,
    isItemInCart,
  } = props;

  return (
    <div className="">
      <img
        className="item-image"
        src={image}
        alt={slug}
        onClick={() => addItemToGameInfo(title)}
        aria-hidden="true"
      />
      <FontAwesomeIcon
        icon={faEye}
        data-testid="game-details-icon"
        className="game-details-icon"
        onClick={() => addItemToGameInfo(title)}
      />
      <div
        data-testid="display-item-in-cart"
        className={`display-item-in-cart ${(
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
