import React from 'react'

import Button from '../Button/Button';

const StartGame = ({handleStart}) => {
  return (
	<button onClick={() => handleStart("play")}>
          Play Game
    </button>
  )
}

export default StartGame;