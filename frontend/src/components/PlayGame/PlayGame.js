import React, { useState } from 'react'

import GameCard from '../GameCard/GameCard';

const INITIAL_ROUND_STATE = {
	userScore: 0,
	compScore: 0,
	compChoice: null,
	userChoice: null,
	result: null
  };

const PlayGame = ({ handleGameState, handleGameResult }) => {

	const [roundState, setRoundState] = useState(INITIAL_ROUND_STATE);

	const emojisArr = ["rock", "paper", "scissors"];

	const playRound = (userChoice) => {

		if (!userChoice) return;

		const compChoice = emojisArr[Math.floor(Math.random() * 3)];

		if (userChoice === compChoice) {
			return setRoundState(prevState => ({...prevState, userChoice, compChoice, result: "Draw!" }));
		} else if (
		  (userChoice === "rock" && compChoice === "paper") ||
		  (userChoice === "paper" && compChoice === "scissors") ||
		  (userChoice === "scissors" && compChoice === "rock")
		) {
		  return setRoundState(prevState => (
			{...prevState, compChoice, userChoice, compScore: prevState.compScore + 1, result: "You Lose!"}
		))
		} else {
			return setRoundState(prevState => (
				{...prevState, compChoice, userChoice, userScore: prevState.userScore + 1, result: "You Win!"}
			))
		}
	  };

	const cardElements = emojisArr.map((emoji, idx) => (
		<GameCard
		key={idx}
		emojiType={emoji}
		compChoice={roundState.compChoice}
		userChoice={roundState.userChoice}
		result={roundState.result}
		handleClick={playRound}
		/>
	))

	//  Best of 3
	if (roundState.userScore === 3 || roundState.compScore === 3) {
		handleGameResult({userScore: roundState.userScore, compScore: roundState.compScore});
		handleGameState("end")
	}

  	return (
		<div className='cards--container'>
			{cardElements}
		</div>
  	)
};

export default PlayGame;
