import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';

function Header(props) {
  const { cartItems } = props;
  return (
    <nav className="navigation-bar">
      <Link to="/">
        <button type="button" className="header-button">
          <h2>Home</h2>
        </button>
      </Link>
      <Link to="/shop">
        <button type="button" className="header-button">
          <h2>Shop</h2>
        </button>
      </Link>
      <Link to="/cart">
        <CartButton
          cartItems={cartItems}
        />
      </Link>
    </nav>

  );
}

export default Header;
