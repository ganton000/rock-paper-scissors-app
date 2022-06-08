import React, { useState, useEffect } from "react";

import './App.scss'

const App = () => {
	const [score, setScore] = useState(0)
	const [compScore, setCompScore] = useState(0)
	const [round, setRound] = useState(5);
	const [startGame, setStartGame] = useState(false);
	const [result, setResult] = useState(false);
	const [selectedChoice, setSelectedChoice] = useState(false);


	const playGame = (selectedChoice) => {
	const choicesArr = ['Rock', 'Paper', 'Scissors']
	const computerChoice = choicesArr[Math.floor(Math.random() * 3)]
	
		
		switch (selectedChoice) {
			
			case "Rock":
				if (computerChoice === 'Scissors') {
					setScore((prevScore) => prevScore + 1)
					return 'You win'
				} else if (computerChoice === 'Rock') {
					return 'Draw!'
				} else { 
					setCompScore((prevScore) => prevScore + 1)
					return 'You Lose!' }

			case "Paper":
				if (computerChoice === 'Rock') {
					setScore((prevScore) => prevScore + 1)
					return 'You win'
				} else if (computerChoice === 'Paper') {
					return 'Draw!'
				} else { 
					setCompScore((prevScore) => prevScore + 1)
					return 'You Lose!'}

			case "Scissors":
				if (computerChoice === 'Paper') {
					setScore((prevScore) => prevScore + 1)
					return 'You win'
				} else if (computerChoice === 'Scissors') {
					return 'Draw!'
				} else { 
					setCompScore((prevScore) => prevScore + 1)
					return 'You Lose!' }

			default:
				return;
		}
	}
	const gameResult = (compScore, score) => {
					if (score > compScore) {
						return 'You Beat the Computer!'
					} else {
						return 'You lost to a robot LOSER!'
					}
	}
	useEffect(() => {
		
		if (!selectedChoice) { return }
		const result = playGame(selectedChoice)
		setResult(result)
		if (result !== 'Draw!') {
			setRound((previousState) => {
				return previousState - 1
			})
		}
	}, [selectedChoice])

	if ((score === 3 || compScore === 3) && round !== 0)   {// Sets round count to 0 when either user has 3 wins.
			setRound(0)
	}

	return (
		< div className = "appContainer" >
			
		{ !startGame && (<button onClick={() => setStartGame(true)}
				type="submit">Play Game</button>
			
			)
}			
			{startGame && !selectedChoice && (// renders main gameplay
				<div>
					<h2>Select a move!</h2>
				<div className="emoji">

						<img onClick={() => setSelectedChoice("Rock")}
							className="emoji--1" src={require("../images/rock.png")} alt={"Rock"} />
	

						<img onClick={() => setSelectedChoice("Paper")}
							className="emoji--2" src={require("../images/paper.png")} alt={"Paper"} />

						<img onClick={() => setSelectedChoice("Scissors")}
					className="emoji--3" src={require("../images/scissors.png")} alt={"Scissors"} />
					</div>
					
				</div>
			)}

			{startGame && selectedChoice && round !== 0 &&(// Renders for user to choose the next round.
				<div>
					<h2>{result}</h2>
					
					<button onClick={()=>setSelectedChoice(false)}>Next Round</button>
				</div>
			) }
			{startGame && selectedChoice && round === 0 && (// renders the game result
				<div>
					<h2>User: {score} Computer: {compScore}</h2>
					<h2>{gameResult(compScore,score)}</h2>

				</div>
			)}
		</div>
	)
}

export default App;