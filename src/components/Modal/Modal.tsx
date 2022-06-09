/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import {
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import ImageSliderArrow from './ImageSliderArrow';
import ModalButtons from './ModalButtons';
import ModalGameInfo from './ModalGameInfo';

interface Props {
  isItemInCart: (event: any, ref: any, condition: any) => boolean
  addItemToCart: (itemImage: any, itemTitle: any) => void
  gameInfoModal: any
  isClickOutside: (event: any, ref: any, condition: any) => boolean
  isModalRendered: true
  gameInfoModalRef: React.MutableRefObject<any>
  setIsModalRendered: (itemTitle: any) => void
  removeItemFromCart: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal(props: Props) {
  const {
    isItemInCart,
    addItemToCart,
    gameInfoModal,
    isClickOutside,
    isModalRendered,
    gameInfoModalRef,
    setIsModalRendered,
    removeItemFromCart,
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

  /**
   * Sets an interval base on NEXT_IMAGE_INTERVAL to execute
   * changeToNextImage function after certain time
   */
  const setNextImageInterval = () => setInterval(() => {
    changeToNextImage();
  }, NEXT_IMAGE_INTERVAL.current);

  const changeToNextImage = () => {
    clearInterval(interval.current);
    interval.current = setNextImageInterval();

    setImageToShow((prevImageToShow) => (
      (prevImageToShow === images.length - 1)
        ? 0
        : prevImageToShow + 1
    ));
  };

  const changeToPreviousImage = () => {
    clearInterval(interval.current);
    interval.current = setNextImageInterval();

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

  /**
   * We set an interval to change to the next
   * game every 8 seconds. We clear the interval
   * when the component is unmounted
   */
  useEffect(() => {
    interval.current = setNextImageInterval();
    return () => clearInterval(interval.current);
  }, []);

  /**
   * Adds event listener to check if each button click is located
   * within the GameInfoModal component, if not, close the component
   */
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideModal);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  }, []);

  return (
    <div className="background-brightness-wrapper">
      <div
        ref={gameInfoModalRef}
        key={images[imageToShow].id}
        style={{
          backgroundImage: `url(${images[imageToShow].image})`,
        }}
        data-testid="game-info-modal"
        className="game-info-modal"
      >

        <ImageSliderArrow
          arrowClass="right-arrow"
          arrowIcon={faAngleRight}
          moveSlider={changeToNextImage}
        />
        <ImageSliderArrow
          arrowClass="left-arrow"
          arrowIcon={faAngleLeft}
          moveSlider={changeToPreviousImage}
        />
        <ModalButtons
          title={title}
          image={image}
          isItemInCart={isItemInCart}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          setIsModalRendered={setIsModalRendered}
        />
        <ModalGameInfo
          title={title}
          rating={rating}
          genres={genres}
          platforms={platforms}
          esrbRating={esrbRating}
        />

      </div>
    </div>
  );
}

export default Modal;
