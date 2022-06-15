// Regex Description
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a"

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Input from '../Input/Input';
import ImgIcon from '../ImgIcon/ImgIcon';

const SignUpForm = () => {
  const [userData, setUserData] = useState({});
  const handleUserInput = ({ target }) => {
    const { id, value } = target;
    setUserData({ ...userData, [id]: value });
  };

  const { firstName, lastName, email, username, password } = userData;

  const handleSubmitForm = () => {
    // send form to backend
    // for now outputting to console
    console.log(userData);
  };

  return (
    <div className="signup--container">
      <div className="signup--header">
        <Link style={{ textDecoration: 'none' }} to="/">
          <img
            className="back"
            alt="Back button"
            src={require('../../images/whitebackarrow.png')}
          />
        </Link>
        <h2 className="top">Join Now and Start Playing Today!</h2>
      </div>
      <form>
        <div className="name">
          <Input
            onChange={handleUserInput}
            value={firstName}
            htmlFor="firstName"
            type="text"
            required
          />
        </div>
        <div className="name last">
          <Input
            onChange={handleUserInput}
            value={lastName}
            htmlFor="lastName"
            type="text"
            required
          />
        </div>
        <Input
          onChange={handleUserInput}
          value={email}
          htmlFor="email"
          type="email"
          required
        />
        <div className="name">
          <Input
            onChange={handleUserInput}
            value={username}
            htmlFor="username"
            type="text"
            required
          />
        </div>
        <div className="name last">
          <Input
            onChange={handleUserInput}
            value={password}
            htmlFor="password"
            type="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
          />
        </div>
        <Button onClick={handleSubmitForm} type="submit" className="signUp">
          Sign Up
        </Button>
      </form>
      <p className="or"> OR </p>
      <div className="signup--container-btn">
        <Button className="secondaryUp">
          <span>Sign up with Google </span>
          <ImgIcon type="google" className="icon" />
        </Button>
        <Button className="secondaryUp second">
          <span>Sign up with Facebook </span>
          <ImgIcon type="facebook" className="icon" />
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
