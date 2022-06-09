import React from "react";

import Button from '../../components/Button/Button';

const SignUpForm = () => {
  return (
    <div className='signup--container'>
      <div className='signup--header'>
        <h2>Join Now</h2>
        <h4>and Start Playing!</h4>
      </div>
      <form>
        <label htmlFor="username">Username</label>
        <input id='username' type='text' />
        <label htmlFor="email">Email</label>
        <input id='email' type='email' />
        <label htmlFor="password">Password</label>
        <input id='password' type='password' />
        <Button type='submit'>Sign Up</Button>
      </form>
      <p> OR </p>
      <div className='signup--container-btn'>
        <Button className='btn signup'>
          Sign up with Google
        </Button>
        <Button className='btn signup'>
          Sign up with Facebook
        </Button>
      </div>

    </div>
  );
};

export default SignUpForm;
