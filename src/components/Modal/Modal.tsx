/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ImageSliderArrow from './ImageSliderArrow';
import ModalButtons from './ModalButtons';
import ModalGameInfo from './ModalGameInfo';

interface Props {
  gameInfoModal: any
  isModalRendered: true
  gameInfoModalRef: React.MutableRefObject<any>
  hideModal: () => void
  removeItemFromCart: (itemTitle: string) => void
  isItemInCart: (event: any, ref: any, condition: any) => boolean
  addItemToCart: (itemImage: string, itemTitle: string) => void
  isClickOutside: (event: MouseEvent, ref: any, condition: any) => boolean
}

function Modal(props: Props) {
  const {
    gameInfoModal,
    isModalRendered,
    gameInfoModalRef,
    hideModal,
    isItemInCart,
    addItemToCart,
    isClickOutside,
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
  const interval = useRef<any>(null);

  /**
   * Sets an interval base on NEXT_IMAGE_INTERVAL to execute
   * changeToNextImage function after certain time
   */
  const setNextImageInterval = () => (
    setInterval(() => {
      changeToNextImage();
    }, NEXT_IMAGE_INTERVAL.current));

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

  function handleClickOutsideModal(this: Document, event: MouseEvent) {
    if (isClickOutside(event, gameInfoModalRef, isModalRendered)) {
      hideModal();
    }
  }

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
          hideModal={hideModal}
          isItemInCart={isItemInCart}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
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
