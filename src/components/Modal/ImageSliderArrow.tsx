import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props{
  moveSlider: () => void
  arrowIcon: IconDefinition
  arrowClass: string
}

function ImageSliderArrow(props: Props) {
  const { moveSlider, arrowIcon, arrowClass } = props;

  return (
    <FontAwesomeIcon
      icon={arrowIcon}
      onClick={moveSlider}
      className={arrowClass}
      data-testid="arrow"
    />
  );
}

export default ImageSliderArrow;
