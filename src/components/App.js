import React, { useState } from "react";

import './App.scss';

const App = () => {

	const [startGame, setStartGame] = useState(true)

	return (
		<div className="appContainer">

			<button type="submit">Play Game</button>

			{startGame && (
				<div class="emoji">
					<div className="emoji--1">
						&#128074;
					</div>
					<div className="emoji--2">
						&#9995;
					</div>
					<div className="emoji--3">
						&#9996;
					</div>
				</div>
			)}

		</div>
	)
}

export default App;