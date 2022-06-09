import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDesktop, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import toOneDecimal from '../../utils/toOneDecimal';

interface IPlatform{
  name: string
}

interface IPlatformObject{
    platform: IPlatform
}

interface IGenre{
  name: string
}

interface IEsrbRating{
  name: string
}

interface Props{
    title: string
    rating: string
    platforms: IPlatformObject[]
    genres: IGenre[] | null
    esrbRating: IEsrbRating | null
}

function ModalGameInfo(props: Props) {
  const {
    title,
    rating,
    platforms,
    genres,
    esrbRating,

  } = props;

  /**
   * Returns a FA icon based on the string taken as parameter
   */
  const renderPlatformIcon = (platform: IPlatform) => {
    // We return undefined with Linux and Apple to avoid repeated PC icons
    if (platform.name === 'Linux' || platform.name === 'Apple Macintosh') return undefined;

    const PLATFORMS = {
      PC: faDesktop,
      Xbox: faXbox,
      PlayStation: faPlaystation,
      Nintendo: faGamepad,
    };

    return PLATFORMS[platform.name as keyof typeof PLATFORMS];
  };

  /**
   * Used to apply conditional rendering on the game genres
   */
  const hasGameGenres = () => genres!.length > 0;

  /**
   * Used to render a '/' only if there is another genre upcoming
   */
  const isNotLastIndex = (
    array: IGenre[] | null,
    item: IGenre,
  ) => array!.indexOf(item) !== array!.length - 1;

  return (
    <div className="game-info">

      <div className="game-info-top-row">
        <b className="game-info-title">
          {title}
        </b>
        <div className="rating-game-info">
          <span className="rating-score-game-info">
            {(parseFloat(rating) === 0)
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
                key={platform.name as React.Key}
                icon={renderPlatformIcon(platform) as IconProp}
              />
            ))}
          </div>
        </div>

        { hasGameGenres() && (
        <div className="game-genres-container">
          <div className="game-genres-title">
            Genres
            <hr />
          </div>
          <div className="game-genres">
            {genres!.map((genre) => (
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

export default ModalGameInfo;
