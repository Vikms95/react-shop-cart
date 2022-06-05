import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function GameInfoModal(props) {
  const { gameInfoModal, gameInfoModalRef, handleClickOutside } = props;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.querySelector('.App').classList.add('dim');
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div ref={gameInfoModalRef} className="game-info-modal">
      <FontAwesomeIcon icon={faAngleLeft} className="left-arrow" />
      <FontAwesomeIcon icon={faAngleRight} className="right-arrow" />
      <div className="game-info" />
    </div>
  );
}

export default GameInfoModal;
