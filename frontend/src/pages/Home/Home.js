import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='home'>
      <div className='btn__container'>
      <Link to='signIn'>
        <div className='select rock'>
          <img
          src={require('../../images/rock.png')}
          alt="battle royal of a rock, paper and scissor caricature" />
          <h4 className='label'>Login</h4>
        </div>
        </Link>
        <Link to='signUp'>
        <div className='select paper'>
          <img
          src={require('../../images/paper.png')}
          alt="battle royal of a rock, paper and scissor caricature" />
          <h4 className='label'>Join</h4>
        </div>
        </Link>
        <Link to='guest'>
          <div className='select scissor'>
            <img
            src={require('../../images/scissors.png')}
            alt="battle royal of a rock, paper and scissor caricature" />
            <h4 className='label'>Guest</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
