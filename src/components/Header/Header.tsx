import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';

function Header(props) {
  const { cartItems } = props;
  return (
    <nav className="navigation-bar">
      <Link to="/">
        <h2> Home </h2>
      </Link>
      <Link to="/shop">
        <h2> Shop </h2>
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
