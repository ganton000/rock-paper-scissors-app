// Regex Description
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a"

import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

const SignUpForm = () => {
  return (
    <div className='signup--container'>
      <div className='signup--header'>
      <Link style={{textDecoration: 'none'}} to='/'>
        <img className='back' alt="Back button" src={require('../../images/whitebackarrow.png')} />
      </Link>
        <h2 className='top'>Join Now and Start Playing Today!</h2>
      </div>
      <form>
        <div className='name'>
          <label htmlFor="firstName">First Name</label>
          <input id='firstName' type='text' required/>
        </div>
        <div className='name last'>
          <label htmlFor="lastName">Last Name</label>
          <input id='lastName' type='text' required/>
        </div>
        <label htmlFor="email">Email</label>
        <input id='email' type='email' required/>
        <div className='name'>
          <label htmlFor="username">Username</label>
          <input id='username' type='text' required/>
        </div>
        <div className='name last'>
          <label htmlFor="password" >Password</label>
          <input id='password' type='password' pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" required />
        </div>
        <button type='submit' className='signUp'>Sign Up</button>
      </form>
      <p className='or'> OR </p>
      <div className='signup--container-btn'>
        <button className='secondaryUp'>
          Sign up with Google <img className='icon' alt='back button'src={require('../../images/google.png')} />
        </button>
        <button className='secondaryUp second'>
          Sign up with Facebook <img className='icon' alt='Facebook'src={require('../../images/facebook-logo.png')} />
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
