import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const SignInForm = () => {
  return (
    <div className='signup--container'>
      <div className='signup--header'>
        <Link style={{textDecoration: 'none'}} to='/'>
          <img className='back' src={require('../../images/back-button.png')} />
        </Link>
        <h2 className='top'>Login Now and Start Playing!</h2>
      </div>
      <form>
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
        <button type='submit' className='signIn'>Sign In</button>
      </form>
      <p className='or'> OR </p>
      <div className='signup--container-btn'>
        <button className='secondaryIn'>
          Sign In with Google <img className='icon' src={require('../../images/google.png')} />
        </button>
        <button className='secondaryIn second'>
          Sign In with Facebook
        </button>
      </div>
    </div>
  )
}

export default SignInForm;