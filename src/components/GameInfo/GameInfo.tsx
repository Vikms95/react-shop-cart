import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDesktop, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons';
import toOneDecimal from '../../utils/toOneDecimal';

function GameInfo(props) {
  const {
    title,
    rating,
    platforms,
    genres,
    esrbRating,
    isNotLastIndex,

  } = props;

  const renderPlatformIcon = (platform) => {
    // We return undefined with Linux and Apple
    //  to avoid repeated PC icons
    if (platform === 'Linux' || platform === 'Apple Macintosh') return undefined;

    const PLATFORMS = {
      PC: faDesktop,
      Xbox: faXbox,
      PlayStation: faPlaystation,
      Nintendo: faGamepad,
    };

    return PLATFORMS[platform];
  };

  const hasGameGenres = () => genres.length > 0;

  return (
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
            {platforms.map(({ platform }) => (
              <FontAwesomeIcon
                key={platform.name}
                icon={renderPlatformIcon(platform.name)}
              />
            ))}
          </div>
        </div>

        { hasGameGenres && (
        <div className="game-genres-container">
          <div className="game-genres-title">
            Genres
            <hr />
          </div>
          <div className="game-genres">
            {genres.map((genre) => (
              <div
                key={genre.name}
              >
                {' '}
                {genre.name}
                {' '}
                {isNotLastIndex(genres, genre) && '/'}
              </div>
            ))}
          </div>
        </div>
        )}

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
  );
}

export default GameInfo;
