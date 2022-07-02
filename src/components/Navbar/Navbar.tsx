import React, {
  useState, useRef, useEffect, SyntheticEvent,
} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import CartButton from './CartButton';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import logo from '../../assets/logo.png';

interface Props{
    updateUrl: (state: string | HTMLInputElement) => void;
    cartItems: object[]
    isShopRendered: boolean
    isClickOutside: (event: MouseEvent, dropdownRef: any, isDropdownRendered: any) => boolean
}

function Navbar(props: Props) {
  const {
    updateUrl,
    cartItems,
    isShopRendered,
    isClickOutside,
  } = props;

  const [inputValue, setInputValue] = useState<string>('');
  const [isDropdownRendered, setIsDropdownRendered] = useState(false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (isClickOutside(event, dropdownRef, isDropdownRendered)) {
      setIsDropdownRendered(false);
    }
  };

  const handleInputChange = (event: MouseEvent | SyntheticEvent) => {
    const inputElement = event.target as HTMLInputElement;
    setInputValue(inputElement.value);
  };

  const eraseInputValue = () => {
    setInputValue('');
  };

  const handleSearchClick = (url: string | HTMLInputElement) => {
    updateUrl(url);
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
      </div>

      <Link
        to="/"
        className="home-button-container"
      >
        <button
          type="button"
          className="header-button"
          data-button="home"
        >
          Home
        </button>
      </Link>
      <Link
        className="shop-button-container"
        to="/shop"
      >
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
          cartItems={cartItems}
          isShopRendered={isShopRendered}
        />
      </Link>

      <div className="responsive-dropdown-button">
        <FontAwesomeIcon icon={faEllipsis} />
        <ul className="responsive-dropdown-container">
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>

    </nav>

  );
}

export default Navbar;
