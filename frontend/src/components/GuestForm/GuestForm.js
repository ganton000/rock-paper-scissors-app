import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const GuestForm = () => {
  const [userName, setUserName] = useState({});
  const handleNameChange = ({ target }) => {
    const { value, id } = target;
    setUserName({...userName, [id]: value.toLowerCase()})
  };

  const [startGame, setStartGame] = useState(false);
  useEffect(() => {
    const { first, last } = userName;
    if (!first || !last) return;
    if (first.length > 3 && last.length > 3) {
      setStartGame(true);
    }
  }, [userName]);

  return (
    <div className="guest--container">
      <div className="guest--header">
        <Link style={{ textDecoration: 'none' }} to="/">
          <img className="back" src={require('../../images/back-button.png')} />
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
        <Link to={startGame ? '/Game' : '#'} state={userName} className="guest">
          Play Now
        </Link>
      </form>
      <p className="or"> OR </p>
      <div className="signup--container-btn">
        <Link className="secondaryGuest" to="/signIn">
          Sign In Now
        </Link>
        <Link className="secondaryGuest second" to="/signUp" id="noIcon">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default GuestForm;
