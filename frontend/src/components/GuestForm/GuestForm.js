import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const GuestForm = () => {
  return (
    <div className='guest--container'>
      <div className='guest--header'>
        <Link style={{textDecoration: 'none'}} to='/'>
            <img className='back' src={require('../../images/back-button.png')} />
        </Link>
        <h2 className='top'>Get Started Now New Player!</h2>
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
        <button type='submit' className='guest'>Play Now</button>
      </form>
      <p className='or'> OR </p>
      <div className='signup--container-btn'>
        <button className='secondaryGuest'>
          Sign In Now
        </button>
        <button className='secondaryGuest second' id='noIcon'>
          Sign Up Now
        </button>
      </div>
    </div>
  )
}

export default GuestForm;