import React, { SyntheticEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface Props{
    inputRef: React.MutableRefObject<any>
    inputValue: string | HTMLInputElement
    handleInputChange: (event: SyntheticEvent) => void
    handleSearchClick: (inputValue: string | HTMLInputElement) => void
}

function SearchBar(props: Props) {
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
          value={inputValue as string}
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
