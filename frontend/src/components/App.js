import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Game from '../pages/GamePage/Game';
import Authentication from "../pages/Authentication/Authentication";
import SignUpForm from "./SignUpForm/SignUpForm";
import SignInForm from "./SignInForm/SignInForm";
import GuestForm from "./GuestForm/GuestForm";
import Title from './Title/Title';
import GameCard from "./GameCard/GameCard";
import Spinner from './Spinner/Spinner';
import Navbar from "./Navbar/Navbar";

const App = () => {

	return (
		<>
			<Navbar />
			<Title />
			<div className='app--container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path="game" element={<Game />}/>
					<Route path='signin' element={<SignInForm />}/>
					<Route path='signup' element={<SignUpForm />}/>
					<Route path='test' element={<Spinner />} />
					<Route path='guest' element={<GuestForm />} />

				</Routes>
			</div>
		</>
	)
};

export default App;