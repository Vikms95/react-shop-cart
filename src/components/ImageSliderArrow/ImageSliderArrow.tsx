/* eslint-disable no-use-before-define */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ImageSliderArrow(props) {
  const { moveSlider, arrowIcon, arrowClass } = props;

  return (
    <FontAwesomeIcon
      icon={arrowIcon}
      onClick={moveSlider}
      className={arrowClass}
    />
  );
}

export default ImageSliderArrow;
