import React from "react";
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <img
      className='home--img'
      src={require('../../images/bg.jpg')}
      alt="battle royal of a rock, paper and scissor caricature" />
      <div className='btn__container'>
        <Link to='game'>Play Now!</Link>
        <Link to='auth'>Login</Link>
      </div>
    </div>
  );
};

export default Home;
