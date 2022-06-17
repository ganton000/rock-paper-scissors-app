import React from 'react';

import icons from '../../utils/icons';

const GameCard = ({ emojiType, compChoice, userChoice, result, handleClick }) => {
  return (
    <>
      <div
      onClick={() => handleClick(emojiType)}
      className={emojiType !== userChoice ? "card" : "card notSelected"}>
        <p className='card--name'>{result ? result : emojiType }</p>
        <img
        src={icons[compChoice ? compChoice : emojiType].src}
        alt={icons[compChoice ? compChoice : emojiType].alt}
        />
      </div>
    </>
  );
};

export default GameCard;