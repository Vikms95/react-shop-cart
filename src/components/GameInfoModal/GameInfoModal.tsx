/* eslint-disable no-use-before-define */
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
} from '@fortawesome/free-solid-svg-icons';
import toOneDecimal from '../../utils/toOneDecimal';
import ImageSliderArrow from '../ImageSliderArrow/ImageSliderArrow';
import ModalButtons from '../ModalButtons/ModalButtons';
import GameInfo from '../GameInfo/GameInfo';

function GameInfoModal(props) {
  const {
    isItemInCart,
    addItemToCart,
    removeItemFromCart,
    gameInfoModal,
    gameInfoModalRef,
    isClickOutside,
    isModalRendered,
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

  const NEXT_IMAGE_INTERVAL = useRef(8000);
  const interval = useRef(null);

  const setNextImageInterval = () => {
    setInterval(() => {
      changeToNextImage();
    }, NEXT_IMAGE_INTERVAL.current);
  };

  const resetInterval = () => {
    clearInterval(interval.current);
    interval.current = setNextImageInterval();
  };

  const changeToNextImage = () => {
    resetInterval();

    setImageToShow((prevImageToShow) => (
      (prevImageToShow === images.length - 1)
        ? 0
        : prevImageToShow + 1
    ));
  };

  const changeToPreviousImage = () => {
    resetInterval();

    setImageToShow((prevImageToShow) => (
      (prevImageToShow === 0)
        ? images.length - 1
        : prevImageToShow - 1
    ));
  };

  const handleClickOutsideModal = (event) => {
    if (isClickOutside(event, gameInfoModalRef, isModalRendered)) {
      setIsModalRendered(false);
    }
  };

  const isNotLastIndex = (array, item) => array.indexOf(item) !== array.length - 1;

  /**
   * We set an interval to change to the next
   * game every 8 seconds. We clear the interval
   * when the component is unmounted
   */
  useEffect(() => {
    interval.current = setNextImageInterval();
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideModal);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  });

  return (
    <div className="background-blur-wrapper">
      <div
        ref={gameInfoModalRef}
        key={images[imageToShow].id}
        style={{
          backgroundImage: `url(${images[imageToShow].image})`,
        }}
        className="game-info-modal"
      >
        <ImageSliderArrow
          moveSlider={changeToNextImage}
          arrowIcon={faAngleRight}
          arrowClass="right-arrow"
        />
        <ImageSliderArrow
          moveSlider={changeToPreviousImage}
          arrowIcon={faAngleLeft}
          arrowClass="left-arrow"
        />
        <ModalButtons
          title={title}
          image={image}
          isItemInCart={isItemInCart}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          setIsModalRendered={setIsModalRendered}
        />
        <GameInfo
          rating={rating}
          genres={genres}
          platforms={platforms}
          esrbRating={esrbRating}
          isNotLastIndex={isNotLastIndex}
        />

      </div>
    </div>
  );
}

export default GameInfoModal;
