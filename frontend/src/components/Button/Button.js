import React from "react";

const Button = ({ children }) => {

	return (
		<button className='btn--base'>
			{children}
		</button>
	)
};

export default Button;