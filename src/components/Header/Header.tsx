import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';

function Header(props) {
  const { cartItems, isShopRendered } = props;

  const toggleUnderline = (event) => {
    const buttons = Array.from(document.querySelectorAll('[data-button]'));
    buttons.forEach((button) => button.classList.remove('underline'));
    event.target.classList.add('underline');
  };
  return (
    <nav className="navigation-bar">
      <Link to="/">
        <button
          type="button"
          className="header-button"
          data-button="home"
          onClick={(e) => toggleUnderline(e)}
        >
          Home
        </button>
      </Link>
      <Link to="/shop">
        <button
          type="button"
          className="header-button"
          data-button="shop"
          onClick={(e) => toggleUnderline(e)}
        >
          Shop
        </button>
      </Link>
      <Link to="/cart">
        <CartButton
          isShopRendered={isShopRendered}
          cartItems={cartItems}
        />
      </Link>
    </nav>

  );
}

export default Header;
