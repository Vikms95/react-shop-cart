import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartButton(props) {
  const { cartItems, isShopRendered } = props;
  return (
    <button
      className={`cart-button ${isShopRendered ? 'show' : 'hidden'}`}
      type="button"
    >
      <div className="cart-icon">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="cart-items-amount">{cartItems.length}</span>
      </div>
    </button>
  );
}

export default CartButton;
