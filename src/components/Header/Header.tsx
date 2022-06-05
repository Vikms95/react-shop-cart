/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import CartButton from '../CartButton/CartButton';
import Dropdown from '../Dropdown/Dropdown';

function Header(props) {
  const { setUrl, cartItems, isShopRendered } = props;
  const [isDropdownRendered, setIsDropdownRendered] = useState(false);
  const dropdown = useRef(null);

  // Can merge with isClickOutsideModal
  const isClickOutsideDropdown = (event) => (
    dropdown.current
    && isDropdownRendered
    && !dropdown.current.contains(event.target)
  );

  const handleClickOutside = (event) => {
    if (isClickOutsideDropdown(event)) {
      setIsDropdownRendered(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <nav className="navigation-bar">
      <div className="logo-title-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="title">VGKeys</div>
      </div>
      <Link to="/">
        <button
          type="button"
          className="header-button"
          data-button="home"
        >
          Home
        </button>
      </Link>
      <Link to="/shop">
        <button
          type="button"
          className="header-button"
          data-button="shop"
        >
          Shop
        </button>
      </Link>
      <button
        ref={dropdown}
        type="button"
        className="dropdown-button"
        onClick={() => setIsDropdownRendered(!isDropdownRendered)}
      >
        <FontAwesomeIcon icon={faBars} />
        {isDropdownRendered && <Dropdown setUrl={setUrl} />}
      </button>

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
