import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartButton(props) {
  const { cartItems } = props;
  return (
    <button className="cart-button" type="button">
      <span>{cartItems.length}</span>
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
}

export default CartButton;
