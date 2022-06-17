import React from 'react';

import icons from '../../utils/icons';

const GameCard = ({ emojiType, compChoice, userChoice, result, handleClick }) => {

  return (
    <>
      <div
      onClick={() => handleClick(emojiType)}
      className={userChoice && emojiType !== userChoice ? "card notSelected" : "card" }>
        <p className='card--name'>{userChoice === emojiType ? result : emojiType }</p>
        <img
        src={icons[userChoice === emojiType ? compChoice : emojiType].src}
        alt={icons[userChoice === emojiType ? compChoice : emojiType].alt}
        />
      </div>
    </>
  );
};

export default GameCard;