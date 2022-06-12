import React from 'react'

const GameCard = ({ emojiType, result, handleClick }) => {
  return (
    <>
      <div
      onClick={() => handleClick(emojiType)}
      className='card'>
        <p className='card--name'>{result}</p>
        <img
        src={require(`../../images/${emojiType}.png`)}
        alt={`${emojiType} caricature`}
        />
      </div>
    </>
  )
}

export default GameCard;