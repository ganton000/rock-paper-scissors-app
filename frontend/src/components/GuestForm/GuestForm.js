import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import icons from '../../utils/icons';
const { goBack } = icons;

const GuestForm = () => {
  const [userName, setUserName] = useState({});
  const handleNameChange = ({ target }) => {
    const { value, id } = target;
    setUserName({ ...userName, [id]: value.toLowerCase() });
  };

  const [startGame, setStartGame] = useState(false);
  useEffect(() => {
    const { firstName, lastName } = userName;
    if (!firstName || !lastName) return;
    if (firstName.length > 3 && lastName.length > 3) {
      setStartGame(true);
    }
  }, [userName]);

  return (
    <div className="guest--container">
      <div className="guest--header">
        <Link className='rt-links' to="/">
          <img className="back" src={require('../../images/whitebackarrow.png')} alt={goBack.alt} />
        </Link>
        <h2 className="top">Get Started Now New Player!</h2>
      </div>
      <form>
        <div className="name">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleNameChange} />
        </div>
        <div className="name last">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleNameChange} />
        </div>
        <Link to={startGame ? '/Game' : '#'} state={userName} className="guest rt-links">
          Play Now
        </Link>
      </form>
      <p className="or"> OR </p>
      <div className="signup--container-btn">
        <Link className="secondaryGuest rt-links" to="/signIn">
          Sign In Now
        </Link>
        <Link className="secondaryGuest second rt-links" to="/signUp" id="noIcon">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default GuestForm;
