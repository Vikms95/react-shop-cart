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
import DropdownItem from './DropdownItem';

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
  const [isNavDropdownRendered, setIsNavDropdownRendered] = useState(false);
  const [isRespDropdownRendered, setIsRespDropdownRendered] = useState(false);

  const inputRef = useRef(null);
  const navbarDropdownRef = useRef(null);
  const respDropdownRef = useRef(null);

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (isClickOutside(event, navbarDropdownRef, isNavDropdownRendered)) {
      setIsNavDropdownRendered(false);
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
        ref={navbarDropdownRef}
        type="button"
        className="dropdown-button"
        data-testid="dropdown-button"
        onClick={() => setIsNavDropdownRendered(!isNavDropdownRendered)}
      >
        <FontAwesomeIcon icon={faBars} />
        {(isNavDropdownRendered)
         && (
         <Dropdown handleSearchClick={handleSearchClick}>
           <DropdownItem itemText="Popular" url="popular" handleSearchClick={handleSearchClick} />
           <DropdownItem itemText="Best rated" url="highestrated" handleSearchClick={handleSearchClick} />
           <DropdownItem itemText="Recently released" url="recentlyreleased" handleSearchClick={handleSearchClick} />
           <DropdownItem itemText="Upcoming" url="upcoming" handleSearchClick={handleSearchClick} />
         </Dropdown>
         )}
      </button>

      <Link to="/cart">
        <CartButton
          cartItems={cartItems}
          isShopRendered={isShopRendered}
        />
      </Link>
      <button
        ref={respDropdownRef}
        type="button"
        className="responsive-dropdown-button"
        onClick={() => setIsRespDropdownRendered(!isRespDropdownRendered)}
      >
        <FontAwesomeIcon icon={faEllipsis} />
        {(isRespDropdownRendered)
        && <Dropdown handleSearchClick={handleSearchClick} />}
        <ul className="responsive-dropdown-container">
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </button>

    </nav>

  );
}

export default Navbar;
