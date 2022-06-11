import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Game from '../pages/GamePage/Game';
import Authentication from "../pages/Authentication/Authentication";
import SignUpForm from "./SignUpForm/SignUpForm";
import SignInForm from "./SignInForm/SignInForm";
import GuestForm from "./GuestForm/GuestForm";


const App = () => {

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path="game" element={<Game />}/>
			<Route path='signIn' element={<SignInForm />}/>
			<Route path='signUp' element={<SignUpForm />}/>
			<Route path='guest' element={<GuestForm />}/>
		</Routes>
	)
};

export default App;