import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import RockPaperScissors from '../pages/RockPaperScissors/RockPaperScissors';
import TicTacToe from '../pages/TicTacToe/TicTacToe';
import Authentication from "../pages/Authentication/Authentication";
import SignUpForm from "./SignUpForm/SignUpForm";
import SignInForm from "./SignInForm/SignInForm";
import GuestForm from "./GuestForm/GuestForm";
import Spinner from './Spinner/Spinner';
import Navbar from "./Navbar/Navbar";
import BackgroundToggle from "./BackgroundToggle/BackgroundToggle";

const App = () => {

	return (
		<>
			<Navbar />
			<div className='app--container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path="rps" element={<RockPaperScissors />}/>
					<Route path="ttt" element={<TicTacToe />}/>
					<Route path='signin' element={<SignInForm />}/>
					<Route path='signup' element={<SignUpForm />}/>
					<Route path='test' element={<Spinner />} />
					<Route path='guest' element={<GuestForm />} />
				</Routes>
			</div>
			<BackgroundToggle />
		</>
	)
};

export default App;