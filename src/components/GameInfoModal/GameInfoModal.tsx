import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function GameInfoModal(props) {
  const { currentGameInfo } = props;

  const hi = () => {
    console.log(currentGameInfo);
    return 'hi';
  };
  return (
    <div className="game-info-modal">
      <FontAwesomeIcon icon={faAngleLeft} className="left-arrow" />
      <FontAwesomeIcon icon={faAngleRight} className="right-arrow" />
      <div className="game-info" />
      {hi()}
    </div>
  );
}

export default GameInfoModal;
