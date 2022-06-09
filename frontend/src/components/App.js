import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/LandingPage/Home';
import Game from '../pages/GamePage/Game';

import './App.scss'

const App = () => {

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path="game" element={<Game />}/>
		</Routes>
	)
};

export default App;