import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleLeft,
  faAngleRight,
  faDesktop,
  faGamepad,
  faStar,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import toOneDecimal from '../../utils/toOneDecimal';

function GameInfoModal(props) {
  const {
    rootRef,
    isItemInCart,
    addItemToCart,
    removeItemFromCart,
    gameInfoModal,
    gameInfoModalRef,
    handleClickOutside,
    setIsModalRendered,
  } = props;

  const {
    title,
    rating,
    image,
    images,
    platforms,
    genres,
    esrbRating,
  } = gameInfoModal;

  const [imageToShow, setImageToShow] = useState(0);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const changeToPreviousImage = () => {
    setImageToShow((prevImageToShow) => (
      (prevImageToShow === 0)
        ? images.length - 1
        : prevImageToShow - 1
    ));
  };

  const changeToNextImage = () => {
    setImageToShow((prevImageToShow) => (
      (prevImageToShow === images.length - 1)
        ? 0
        : prevImageToShow + 1
    ));
  };

  /**
   * We set an interval to change to the next
   * game every 8 seconds. We clear the interval
   * when the component is unmounted
   */
  useEffect(() => {
    const NEXT_IMAGE_INTERVAL = 8000;
    const interval = setInterval(() => {
      changeToNextImage();
    }, NEXT_IMAGE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

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

  const isNotLastIndex = (array, item) => array.indexOf(item) !== array.length - 1;

  return (
    <div className="modal-background-blur">
      <div
        ref={gameInfoModalRef}
        style={{
          backgroundImage: `url(${images[imageToShow].image})`,
        }}
        className="game-info-modal"
      >
        <button
          type="button"
          onClick={
              (isItemInCart(title))
                ? () => removeItemFromCart(title)
                : () => addItemToCart(image, title)
            }
          className="add-to-cart-modal"
        >
          {(isItemInCart(title))
            ? 'Remove from cart'
            : 'Add to cart'}
        </button>
        <FontAwesomeIcon
          onClick={() => setIsModalRendered(false)}
          icon={faCircleXmark}
          className="close-button"
        />
        <FontAwesomeIcon
          onClick={changeToPreviousImage}
          icon={faAngleLeft}
          className="left-arrow"
        />
        <FontAwesomeIcon
          onClick={changeToNextImage}
          icon={faAngleRight}
          className="right-arrow"
        />
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
                  <FontAwesomeIcon icon={renderPlatformIcon(platform.name)} />
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
    </div>
  );
}

export default GameInfoModal;
