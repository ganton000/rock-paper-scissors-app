import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home'>
      {/*<img
      className='home--img'
      src={require('../../images/bg.jpg')}
      alt="battle royal of a rock, paper and scissor caricature" />*/}
      <div className='btn__container'>
      <Link className='select rock' style={{textDecoration: 'none'}} to='signIn'>
        <div>
          <img
          src={require('../../images/rock1.png')}
          alt="battle royal of a rock, paper and scissor caricature" />
          <h4>Login</h4>
          {/*
            <Button>
              Play Now!
            </Button>
          */}
        </div>
        </Link>
        <Link className='select paper' style={{textDecoration: 'none'}} to='signUp'>
        <div>
          <img
          src={require('../../images/paper1.png')}
          alt="battle royal of a rock, paper and scissor caricature" />
          <h4>Join</h4>
        </div>
        </Link>
        <Link className='select scissor' style={{textDecoration: 'none'}} to='guest'>
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
