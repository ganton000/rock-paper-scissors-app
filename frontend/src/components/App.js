import React from "react";
import { Routes, Route } from 'react-router-dom';

import Authentication from "../pages/Authentication/Authentication";
import Home from '../pages/Home/Home';
import Leaderboard from '../pages/Leaderboard/Leaderboard';
import RockPaperScissors from '../pages/RockPaperScissors/RockPaperScissors';
import TicTacToe from '../pages/TicTacToe/TicTacToe';

import BackgroundToggle from "./BackgroundToggle/BackgroundToggle";
import GuestForm from "./GuestForm/GuestForm";
import Navbar from "./Navbar/Navbar";
import Spinner from './Spinner/Spinner';
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

const App = () => {

	return (
		<>
			<Navbar />
			<div className='app--container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='auth' element={<Authentication />}/>
					<Route path='guest' element={<GuestForm />} />
					<Route path='leaderboard' element={<Leaderboard />} />
					<Route path="rps" element={<RockPaperScissors />}/>
					<Route path='signin' element={<SignInForm />}/>
					<Route path='signup' element={<SignUpForm />}/>
					<Route path='test' element={<Spinner />} />
					<Route path="ttt" element={<TicTacToe />}/>
				</Routes>
			</div>
			<BackgroundToggle />
		</>
	)
};

export default App;