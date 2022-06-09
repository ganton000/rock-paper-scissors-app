import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/LandingPage/Home';
import Game from '../pages/GamePage/Game';
import Authentication from "../pages/Authentication/Authentication";

import './App.scss'

const App = () => {

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path="game" element={<Game />}/>
			<Route path='auth' element={<Authentication />}/>
		</Routes>
	)
};

export default App;