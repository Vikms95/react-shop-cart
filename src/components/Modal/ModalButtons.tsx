import React, { SyntheticEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

interface Props {
    title: string
    image: string
    hideModal: () => void
    isItemInCart: (event: string, ref?: any, condition?: any) => boolean
    addItemToCart: (itemImage: string, itemTitle: string) => void
    removeItemFromCart: (itemTitle: string) => void
}

function ModalButtons(props: Props) {
  const {
    title,
    image,
    hideModal,
    isItemInCart,
    removeItemFromCart,
    addItemToCart,
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
        onClick={() => hideModal()}
        icon={faCircleXmark}
        className="close-button"
      />
    </>
  );
}

export default ModalButtons;
