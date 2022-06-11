import React from 'react'

const GameCard = ({ compChoice }) => {
  return (
    <>
      <div className='card'>
        <p className='card--name'>{compChoice}</p>
        <img
        src={require(`../../images/${compChoice}.png`)}
        alt={`${compChoice} caricature`}
        />
      </div>
    </>
  )
}

export default GameCard;