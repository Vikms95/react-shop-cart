import React from 'react';
import { } from '@fortawesome/react-fontawesome';

function CartButton(props) {
  const { cartItems } = props;
  return (
    <button className="cart-button" type="button">
      <div>{cartItems.length}</div>

    </button>
  );
}

export default CartButton;
