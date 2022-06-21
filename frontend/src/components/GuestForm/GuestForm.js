import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ImgIcon from '../ImgIcon/ImgIcon';
import icons from '../../utils/icons';
const { goBack } = icons;
const element = document.querySelector('html');
console.log(element.className)

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
        <Link className="rt-links" to="/">
          <ImgIcon type="goBack" size="md" />
        </Link>
        <h2 className="top">Get Started Now New Player!</h2>
      </div>
      <form>
        <div className="name">
          <input
            id="firstName"
            type="text"
            htmlFor="firstName"
            placeholder="First Name"
            required
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="name last">
          <input
            id="lastName"
            type="text"
            htmlFor="lastName"
            onChange={handleNameChange}
            placeholder="Last Name"
            required
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <Link
          to={startGame ? '/game' : '#'}
          state={userName}
          className="guest rt-links"
        >
          Play Now
        </Link>
      </form>
      <p className="or"> OR </p>
      <div className="signup--container-btn">
        <Link className="secondaryGuest rt-links" to="/signin">
          Sign In Now
        </Link>
        <Link
          className="secondaryGuest second rt-links"
          to="/signup"
          id="noIcon"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default GuestForm;
