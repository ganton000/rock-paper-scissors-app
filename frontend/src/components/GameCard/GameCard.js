import React from 'react';

import icons from '../../utils/icons';

const GameCard = ({ emojiType, result, handleClick }) => {
  return (
    <>
      <div
      onClick={() => handleClick(emojiType)}
      className='card'>
        <p className='card--name'>{result}</p>
        <img
        src={icons[emojiType].src}
        alt={icons[emojiType].alt}
        />
      </div>
    </>
  );
};

export default GameCard;