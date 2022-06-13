import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Emoji from "../../components/Emoji/Emoji";
import GameCard from "../../components/GameCard/GameCard";

const Game = () => {
  // userName data from guest user
  const location = useLocation();
  const { firstName, lastName } = location.state;

  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [round, setRound] = useState(5);
  const [startGame, setStartGame] = useState(false);
  const [result, setResult] = useState(false);
  const [userChoice, setUserChoice] = useState(null);

  const emojisArr = ["rock", "paper", "scissors"];

  const onHandleClick = (move) => {
    setUserChoice(move);
  };

  const playGame = (userChoice) => {
    const compChoice = emojisArr[Math.floor(Math.random() * 3)];

    console.log(compChoice, userChoice);
    console.log(userScore, compScore);

    if (userChoice === compChoice) {
      return "Draw!";
    } else if (
      (userChoice === "rock" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "rock")
    ) {
      setCompScore((prevScore) => prevScore + 1);
      return "You Lose!";
    } else {
      setUserScore((prevScore) => prevScore + 1);
      return "You Win!";
    }
  };

  const gameResult = (compScore, userScore) => {
    if (userScore > compScore) {
      return "You Beat the Computer!";
    } else {
      return "You lost to a robot LOSER!";
    }
  };

  useEffect(() => {
    if (!userChoice) return;

    const result = playGame(userChoice);
    setResult(result);
    if (result !== "Draw!") {
      setRound((prevState) => prevState - 1);
    }
  }, [userChoice]);

  // Sets round count to 0 when either user has 3 wins.
  if ((userScore === 3 || compScore === 3) && round !== 0) {
    setRound(0);
  }

  return (
    <div className="gameContainer">
      {!startGame && (
        <button onClick={() => setStartGame(true)} type="submit">
          Play Game
        </button>
      )}
      {startGame &&
        !userChoice && ( // renders main gameplay
          <div>
            <h2 className="move">Select a move!</h2>
            <div className="emoji">
              {emojisArr.map((emoji, idx) => (
                <GameCard
                  handleClick={onHandleClick}
                  emojiType={emoji}
                  result={emoji}
                  key={idx}
                />
              ))}
            </div>
          </div>
        )}
      {startGame &&
        userChoice &&
        round !== 0 && ( // Renders for user to choose the next round.
          <div>
            {/*<h2>{result}</h2>*/}
            <GameCard emojiType={"rock"} result={result} />
            <button onClick={() => setUserChoice(false)}>Next Round</button>
          </div>
        )}
      {startGame &&
        userChoice &&
        round === 0 && ( // renders the game result
          <div>
            <h2>
              User: {userScore} Computer: {compScore}
            </h2>
            <h2>{gameResult(compScore, userScore)}</h2>
          </div>
        )}
    </div>
  );
};

export default Game;
