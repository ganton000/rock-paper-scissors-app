import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home'>
      <img
      className='home--img'
      src={require('../../images/bg.jpg')}
      alt="battle royal of a rock, paper and scissor caricature" />
      <div className='btn__container'>
        <Link style={{textDecoration: 'none'}} to='game'>
          <Button>
            Play Now!
          </Button>
        </Link>
        <Link style={{textDecoration: 'none'}} to='auth'>
          <Button>
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
