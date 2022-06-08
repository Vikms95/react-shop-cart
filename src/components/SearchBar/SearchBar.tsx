import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar(props) {
  const {
    inputRef,
    inputValue,
    handleInputChange,
    handleSearchClick,
  } = props;

  return (
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
  );
}

export default SearchBar;
