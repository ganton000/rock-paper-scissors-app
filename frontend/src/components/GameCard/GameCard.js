import React from "react";

import icons from "../../utils/icons";

const GameCard = ({
  emojiType,
  compChoice,
  userChoice,
  result,
  handleClick,
}) => {
  return (
    <div
      className={`card${
        userChoice && emojiType !== userChoice ? " notSelected" : ""
      }`}
      onClick={() => handleClick(emojiType)}
    >
      <p className="card--name">
        {userChoice === emojiType ? result : emojiType}
      </p>
      <img
        className="card--image"
        src={icons[userChoice === emojiType ? compChoice : emojiType].src}
        alt={icons[userChoice === emojiType ? compChoice : emojiType].alt}
      />
    </div>
  );
};

export default GameCard;
