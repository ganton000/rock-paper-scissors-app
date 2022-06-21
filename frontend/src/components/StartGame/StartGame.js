import React from 'react'

import Button from '../Button/Button';
import Title from '../Title/Title';

const StartGame = ({handleStart}) => {
  return (
  <>
    <Title />
	  <button onClick={() => handleStart("play")}>
          Play Game
    </button>
  </>
  )
}

export default StartGame;