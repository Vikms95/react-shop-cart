/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import React, {
  useState, useRef, useEffect, SyntheticEvent,
} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartButton from '../CartButton/CartButton';
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/logo.png';

interface Props{
    setUrl: React.Dispatch<React.SetStateAction<string>>
    cartItems: object[]
    isShopRendered: boolean
    isClickOutside: (event: SyntheticEvent, dropdownRef, isDropdownRendered) => boolean
}

function Header(props: Props) {
  const {
    setUrl,
    cartItems,
    isShopRendered,
    isClickOutside,
  } = props;

  const [isDropdownRendered, setIsDropdownRendered] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleClickOutsideDropdown = (event) => {
    if (isClickOutside(event, dropdownRef, isDropdownRendered)) {
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

  /**
   * Adds event listener to check if each button click is located
   * within the Dropdown component, if not, close the component
   */
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

      <SearchBar
        inputRef={inputRef}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
      />
      <button
        ref={dropdownRef}
        type="button"
        className="dropdown-button"
        data-testid="dropdown-button"
        onClick={() => setIsDropdownRendered(!isDropdownRendered)}
      >
        <FontAwesomeIcon icon={faBars} />
        {(isDropdownRendered)
         && <Dropdown handleSearchClick={handleSearchClick} />}
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
