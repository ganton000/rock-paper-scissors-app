import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='home'>
      <div className='btn__container'>
      <Link to='signin'>
        <div className='select rock'>
          <img
          src={require('../../images/rock.png')}
          alt="rock caricature" />
          <h4 className='label'>Login</h4>
        </div>
        </Link>
        <Link to='signup'>
        <div className='select paper'>
          <img
          src={require('../../images/paper.png')}
          alt="paper caricature" />
          <h4 className='label'>Join</h4>
        </div>
        </Link>
        <Link to='guest'>
          <div className='select scissor'>
            <img
            src={require('../../images/scissors.png')}
            alt="scissor caricature" />
            <h4 className='label'>Guest</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
