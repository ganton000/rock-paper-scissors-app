import React from "react";

import './Emoji.scss';


const Emoji = ({ emojiType, handleClick }) => {

	return (
		<img
		onClick={() => handleClick(emojiType)}
		className={`emoji--${emojiType}`}
		src={require(`../../images/${emojiType}.png`)}
		alt={`${emojiType}`}/>
	)
};

export default Emoji;