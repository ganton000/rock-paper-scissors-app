import React from 'react';

import icons from '../../helpers/icons';

const GameCard = ({ compChoice }) => {
  return (
    <>
      <div className="card">
        <p className="card--name">{compChoice}</p>
        <img src={icons[compChoice].src} alt={icons[compChoice].alt} />
      </div>
    </>
  );
};

export default GameCard;
