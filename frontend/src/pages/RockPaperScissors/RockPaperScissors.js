import React, { useState, useEffect } from "react";

import StartGame from "../../components/StartGame/StartGame";
import PlayGame from "../../components/PlayGame/PlayGame";
import GameResult from "../../components/GameResult/GameResult";

const INITIAL_GAME_RESULT = {
  userScore: 0,
  compScore: 0
};

const RockPaperScissors = () => {
  // userName data from guest user
  //const location = useLocation();
  //const { firstName, lastName } = location.state;

  const [gameState, setGameState] = useState(null);
  const [gameResult, setGameResult] = useState(INITIAL_GAME_RESULT)

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

export default RockPaperScissors;
