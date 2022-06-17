import React, { useState, useEffect } from 'react'

import GameCard from '../GameCard/GameCard';

const INITIAL_ROUND_STATE = {
	userScore: 0,
	compScore: 0,
	result: null
  };

export const PlayGame = () => {

	const [roundState, setRoundState] = useState(INITIAL_ROUND_STATE);

	const emojisArr = ["rock", "paper", "scissors"];

	const cardElements = emojisArr.map((card, idx) => (
		<GameCard
		key={idx}
		emojiType={card.emoji}
		result={roundState}
		handleClick={playRound}
		/>
	))

	const playRound = (userChoice) => {

		if (!userChoice) return;

		const compChoice = emojisArr[Math.floor(Math.random() * 3)];

		if (userChoice === compChoice) {
		  return "Draw!";
		} else if (
		  (userChoice === "rock" && compChoice === "paper") ||
		  (userChoice === "paper" && compChoice === "scissors") ||
		  (userChoice === "scissors" && compChoice === "rock")
		) {
		  return setRoundState(prevState => (
			{...prevState, compScore: prevState.compScore + 1, result: "You Lose!"}
		))
		} else {
			return setRoundState(prevState => (
				{...prevState, userScore: prevState.userScore + 1, result: "You Win!"}
			))
		}
	  };

  	return (
		<div className='cards--container'>
			{cardElements}
		</div>
  	)
};

export default PlayGame;
