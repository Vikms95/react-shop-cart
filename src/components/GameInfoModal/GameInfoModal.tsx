import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft, faAngleRight, faDesktop, faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';

function GameInfoModal(props) {
  const { gameInfoModal, gameInfoModalRef, handleClickOutside } = props;
  const {
    images, platforms, genres, esrbRating,
  } = gameInfoModal;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const renderPlatformIcon = (platform) => {
    if (platform === 'Linux' || platform === 'Apple Macintosh') return undefined;

    const PLATFORMS = {
      PC: faDesktop,
      Xbox: faXbox,
      PlayStation: faPlaystation,
      Nintendo: faGamepad,
    };

    return PLATFORMS[platform];
  };

  const isNotLastIndex = (array, item) => (
    array.indexOf(item) !== array.length - 1
  );

  return (
    <div ref={gameInfoModalRef} className="game-info-modal">
      <FontAwesomeIcon icon={faAngleLeft} className="left-arrow" />
      <FontAwesomeIcon icon={faAngleRight} className="right-arrow" />
      <div className="game-info">
        <div className="game-platforms">

          {platforms.map((platform) => (
            <FontAwesomeIcon icon={renderPlatformIcon(platform.platform.name)} />
          ))}

        </div>

        <div className="game-genres">
          {genres.map((genre) => (
            <div>
              {' '}
              {genre.name}
              {' '}
              {isNotLastIndex(genres, genre) && '/'}
            </div>
          ))}

        </div>
        <div>{esrbRating?.name}</div>

      </div>
    </div>
  );
}

export default GameInfoModal;
