import React, { useState, useEffect } from "react";

import Emoji from './Emoji/Emoji';

import './App.scss'

const App = () => {
	const [userScore, setUserScore] = useState(0)
	const [compScore, setCompScore] = useState(0)
	const [round, setRound] = useState(5);
	const [startGame, setStartGame] = useState(false);
	const [result, setResult] = useState(false);
	const [selectedChoice, setSelectedChoice] = useState(null);

	const emojisArr = ['rock', 'paper','scissors'];

	const onHandleClick = (move) => {
		setSelectedChoice(move);
	};

	const playGame = (selectedChoice) => {

		const compChoice = emojisArr[Math.floor(Math.random() * 3)]

		console.log(compChoice, selectedChoice)
		console.log(userScore, compScore)

		if (selectedChoice === compChoice) {
			return 'Draw!'
		} else if (
			(selectedChoice === 'rock' && compChoice === 'paper') ||
			(selectedChoice === 'paper' && compChoice === 'scissors') ||
			(selectedChoice === 'scissors' && compChoice === 'rock')
		) {
			setCompScore(prevScore => prevScore + 1);
			return 'You Lose!'
		} else {
			setUserScore(prevScore => prevScore + 1);
			return 'You Win!'
		}
	};

	const gameResult = (compScore, userScore) => {
					if (userScore > compScore) {
						return 'You Beat the Computer!'
					} else {
						return 'You lost to a robot LOSER!'
					}
	};

	useEffect(() => {

		if (!selectedChoice) return;

		const result = playGame(selectedChoice);
		setResult(result)
		if (result !== 'Draw!') { setRound(prevState => prevState - 1 )};

	}, [selectedChoice])

	// Sets round count to 0 when either user has 3 wins.
	if ((userScore === 3 || compScore === 3) && round !== 0)  {
		setRound(0)
	};

	return (
		<div className="appContainer">

			{!startGame && (
			<button onClick={() => setStartGame(true)}
			type="submit">
				Play Game
			</button>
			)}
			{startGame && !selectedChoice && (// renders main gameplay
				<div>
					<h2>Select a move!</h2>
					<div className="emoji">
						{emojisArr.map(emoji => (
							<Emoji
							handleClick={onHandleClick}
							emojiType={emoji}
							/>
						))}
					</div>
				</div>
			)}

			{startGame && selectedChoice && round !== 0 &&(// Renders for user to choose the next round.
			<div>
				<h2>{result}</h2>
				<button onClick={()=>setSelectedChoice(false)}>
					Next Round
				</button>
			</div>
			) }
			{startGame && selectedChoice && round === 0 && (// renders the game result
				<div>
					<h2>User: {userScore} Computer: {compScore}</h2>
					<h2>{gameResult(compScore,userScore)}</h2>
				</div>
			)}
		</div>
	)
};

export default App;