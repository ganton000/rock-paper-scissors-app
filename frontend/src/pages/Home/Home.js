import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='home'>
      <div className='btn__container'>
      <Link className='select rock' style={{textDecoration: 'none'}} to='signIn'>
        <div>
          <img
          src={require('../../images/rock.png')}
          alt="battle royal of a rock, paper and scissor caricature" />
          <h4>Login</h4>
        </div>
        </Link>
        <Link className='select paper' style={{textDecoration: 'none'}} to='signUp'>
        <div>
          <img
          src={require('../../images/paper.png')}
          alt="battle royal of a rock, paper and scissor caricature" />
          <h4>Join</h4>
        </div>
        </Link>
        <Link className='select scissor' style={{textDecoration: 'none'}} to='guest'>
          <div>
            <img
            src={require('../../images/scissors.png')}
            alt="battle royal of a rock, paper and scissor caricature" />
            <h4>Guest</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
