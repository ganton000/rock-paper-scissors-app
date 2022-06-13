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
          <input id='firstName' type='text' />
        </div>
        <div className='name last'>
          <label htmlFor="lastName">Last Name</label>
          <input id='lastName' type='text' />
        </div>
        <label htmlFor="email">Email</label>
        <input id='email' type='email' />
        <div className='name'>
          <label htmlFor="username">Username</label>
          <input id='username' type='text' />
        </div>
        <div className='name last'>
          <label htmlFor="password">Password</label>
          <input id='password' type='password' />
        </div>
        <button type='submit' className='signUp'>Sign Up</button>
      </form>
      <p className='or'> OR </p>
      <div className='signup--container-btn'>
        <button className='secondaryUp'>
          Sign up with Google <img className='icon' alt='back button'src={require('../../images/google.png')} />
        </button>
        <button className='secondaryUp second'>
          Sign up with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
