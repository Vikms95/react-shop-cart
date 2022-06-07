import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft, faAngleRight, faDesktop, faGamepad, faStar,
} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import toOneDecimal from '../../utils/toOneDecimal';

function GameInfoModal(props) {
  const { gameInfoModal, gameInfoModalRef, handleClickOutside } = props;
  const {
    title, rating, images, platforms, genres, esrbRating,
  } = gameInfoModal;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const renderPlatformIcon = (platform) => {
    // We return undefined with Linux and Apple to avoid
    // repeated PC icons
    if (platform === 'Linux' || platform === 'Apple Macintosh') return undefined;

    const PLATFORMS = {
      PC: faDesktop,
      Xbox: faXbox,
      PlayStation: faPlaystation,
      Nintendo: faGamepad,
    };

    return PLATFORMS[platform];
  };

  const isNotLastIndex = (array, item) => array.indexOf(item) !== array.length - 1;

  return (
    <div
      ref={gameInfoModalRef}
      style={{
        backgroundImage: `url(${images[1].image})`,
        backgroundSize: 'cover',

      }}
      className="game-info-modal"
    >
      <FontAwesomeIcon icon={faAngleLeft} className="left-arrow" />
      <FontAwesomeIcon icon={faAngleRight} className="right-arrow" />
      <div className="game-info">
        <div className="game-info-top-row">
          <b className="game-info-title">
            {title}
          </b>
          <div className="rating-game-info">
            <span className="rating-score-game-info">
              {(rating === 0)
                ? <span className="no-reviews">Pending</span>
                : toOneDecimal(rating)}
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
        </div>
        <div className="game-info-bottom-row">
          <div className="game-platforms-container">
            <div className="game-platforms-title">
              Platforms
              <hr />
            </div>
            <div className="game-platforms">
              {platforms.map((platform) => (
                <FontAwesomeIcon icon={renderPlatformIcon(platform.platform.name)} />
              ))}
            </div>
          </div>

          <div className="game-genres-container">
            <div className="game-genres-title">
              Genres
              <hr />
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
          </div>

          {esrbRating && (
          <div className="game-esrb-rating-container">
            <div className="game-esrb-rating-title">
              ESRB
              <hr />
            </div>
            <div className="game-esrb-rating">
              {esrbRating.name}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameInfoModal;
