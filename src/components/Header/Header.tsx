/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import CartButton from '../CartButton/CartButton';
import Dropdown from '../Dropdown/Dropdown';

function Header(props) {
  const {
    setUrl,
    cartItems,
    isShopRendered,
  } = props;

  const [isDropdownRendered, setIsDropdownRendered] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Can merge with isClickOutsideModal
  const isClickOutsideDropdown = (event) => (
    dropdownRef.current
    && isDropdownRendered
    && !dropdownRef.current.contains(event.target)
  );

  const handleClickOutsideDropdown = (event) => {
    if (isClickOutsideDropdown(event)) {
      setIsDropdownRendered(false);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const eraseInputValue = () => {
    setInputValue('');
  };

  const handleSearchClick = (url) => {
    setUrl(url);
    eraseInputValue();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideDropdown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown);
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

      <div className="search-container">
        <div className="search-input-container">
          <input
            ref={inputRef}
            value={inputValue}
            type="text"
            onChange={handleInputChange}
            placeholder=" Search a game"
            className="search-input"
          />
          <hr className="search-input-bar" />
        </div>

        <button
          type="button"
          className="search-button"
          onClick={() => handleSearchClick(inputValue)}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

      </div>
      <button
        ref={dropdownRef}
        type="button"
        className="dropdown-button"
        onClick={() => setIsDropdownRendered(!isDropdownRendered)}
      >
        <FontAwesomeIcon icon={faBars} />
        {isDropdownRendered && <Dropdown handleSearchClick={handleSearchClick} />}
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
