import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import StartGame from "../../components/StartGame/StartGame";
import GameCard from "../../components/GameCard/GameCard";
import PlayGame from "../../components/PlayGame/PlayGame";
import GameResult from "../../components/GameResult/GameResult";

const INITIAL_GAME_RESULT = {
  userScore: 0,
  compScore: 0,
};

const Game = () => {
  // userName data from guest user
  //const location = useLocation();
  //const { firstName, lastName } = location.state;

  const [gameState, setGameState] = useState(null);
  const [gameResult, setGameResult] = useState(INITIAL_GAME_RESULT);

  useEffect(() => {
    if (gameResult === INITIAL_GAME_RESULT) return;

    setGameState("finished");
  }, [gameResult]);

  return (
    <div className="game--container">
      {!gameState ? (
        <StartGame handleStart={setGameState} />
      ) : gameState === "play" ? (
        <PlayGame
          handleGameState={setGameState}
          handleGameResult={setGameResult}
        />
      ) : (
        <GameResult gameResult={gameResult} handleEndGame={setGameState} />
      )}
    </div>
  );
};

export default Game;
