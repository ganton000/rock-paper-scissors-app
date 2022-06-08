import React from "react";

import './Emoji.scss';

const Emoji = ({ emojiType }) => {

	return (
		<img
		className={`emoji emoji--${emojiType}`}
		src={require(`../../images/${emojiType}.png`)}
		alt={`{emojiType}`} />
	)
}

export default Emoji;

