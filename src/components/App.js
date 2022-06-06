import React, { useState, useEffect } from "react";

import './App.scss';

const App = () => {

	const [startGame, setStartGame] = useState(true);

	const [selectedChoice, setSelectedChoice] = useState(null);

	useEffect(() => {

		if (!selectedChoice) { return }

		const choicesArr = ['Rock', 'Paper', 'Scissors']
		const computerChoice = choicesArr[Math.floor(Math.random()*3)]

		switch (selectedChoice) {

			case "Rock":
				if (computerChoice === 'Scissors') {
					return "You win"
				} else if (computerChoice === 'Rock') {
					return 'Draw!'
				} else { return "You lose!" }

			case "Paper":
				if (computerChoice === 'Rock') {
					return "You win"
				} else if (computerChoice === 'Paper') {
					return 'Draw!'
				} else { return "You lose!" }

			case "Scissors":
				if (computerChoice === 'Paper') {
					return "You win"
				} else if (computerChoice === 'Scissors') {
					return 'Draw!'
				} else { return "You lose!" }

			default:
				return;
		}

	}, [selectedChoice])

	return (
		<div className="appContainer">

			<button type="submit">Play Game</button>

			{startGame && (
				<div class="emoji">
					<div className="emoji--1">
				</div>
					<div
					onClick={() => setSelectedChoice("Rock")}
					className="emoji--1">
						&#128074;
					</div>
					<div
					onClick={() => setSelectedChoice("Paper")}
					className="emoji--2">
						&#9995;
					</div>
					<div
					onClick={() => setSelectedChoice("Scissors")}
					className="emoji--3">
						&#9996;
					</div>
				</div>
			)}

		</div>
	)
}

export default App;