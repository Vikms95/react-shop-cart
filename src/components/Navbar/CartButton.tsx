import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

interface Props{
  cartItems: object[]
  isShopRendered: boolean
}

function CartButton(props: Props) {
  const { cartItems, isShopRendered } = props;

  return (
    <button
      data-testid="cart-button"
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
