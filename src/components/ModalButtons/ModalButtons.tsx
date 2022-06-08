import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

function ModalButtons(props) {
  const {
    title,
    image,
    isItemInCart,
    removeItemFromCart,
    addItemToCart,
    setIsModalRendered,
  } = props;

  return (
    <>
      <button
        type="button"
        onClick={
              (isItemInCart(title))
                ? () => removeItemFromCart(title)
                : () => addItemToCart(image, title)
            }
        className="add-to-cart-modal"
      >
        {(isItemInCart(title))
          ? 'Remove from cart'
          : 'Add to cart'}
      </button>

      <FontAwesomeIcon
        onClick={() => setIsModalRendered(false)}
        icon={faCircleXmark}
        className="close-button"
      />
    </>
  );
}

export default ModalButtons;
