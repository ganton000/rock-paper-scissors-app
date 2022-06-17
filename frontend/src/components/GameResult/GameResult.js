import React from 'react'

import Button from '../Button/Button';

const GameResult = ({ gameResult: {compScore, userScore}, handleEndGame}) => {

	const gameResult = (compScore, userScore) => {
		if (userScore > compScore) {
		  return "You Beat the Computer!";
		} else {
		  return "You lost to a robot LOSER!";
		}
	  };

	return (
    	<div>
    		<h2>
        		User: {userScore} Computer: {compScore}
    		</h2>
    		<h2>{gameResult(compScore, userScore)}</h2>
			<button onClick={() => handleEndGame(null)}> Play Again!</button>
    	</div>
  	)
};

export default GameResult;