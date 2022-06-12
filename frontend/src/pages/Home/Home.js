import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='home'>
      <div className='btn__container'>
      <Link className='select rock' to='signIn'>
        <div>
          <img
          src={require('../../images/rock1.png')}
          alt="battle royal of a rock, paper and scissor caricature" />
          <h4>Login</h4>
        </div>
        </Link>
        <Link className='select paper' to='signUp'>
        <div>
          <img
          src={require('../../images/paper1.png')}
          alt="battle royal of a rock, paper and scissor caricature" />
          <h4>Join</h4>
        </div>
        </Link>
        <Link className='select scissor' to='guest'>
          <div>
            <img
            src={require('../../images/scissor1.png')}
            alt="battle royal of a rock, paper and scissor caricature" />
            <h4>Guest</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
