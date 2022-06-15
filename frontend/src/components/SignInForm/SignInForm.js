import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ImgIcon from '../ImgIcon/ImgIcon';
import Input from '../Input/Input';

const SignInForm = () => {
  const [userData, setUserData] = useState({});
  const handleInputChange = ({ target }) => {
    const { id, value } = target;
    setUserData({ ...userData, [id]: value });
  };

  const { email, username, password } = userData;

  const handleSubmitForm = () => {
    // send form to backend
    // for now outputting to console
    console.log(userData);
  };

  return (
    <div className="signup--container">
      <div className="signup--header">
        <Link to="/">
          <ImgIcon className="back" type="goBack" />
        </Link>
        <h2 className="top">Login Now and Start Playing!</h2>
      </div>
      <form>
        <Input
          onChange={handleInputChange}
          value={email}
          htmlFor="email"
          type="email"
          required
        />
        <div className="name">
          <Input
            onChange={handleInputChange}
            value={username}
            htmlFor="username"
            type="text"
            required
          />
        </div>
        <div className="name last">
          <Input
            onChange={handleInputChange}
            value={password}
            htmlFor="password"
            type="password"
            required
          />
        </div>
        <Button onClick={handleSubmitForm} className="signIn">
          Sign In
        </Button>
      </form>
      <p className="or"> OR </p>
      <div className="signup--container-btn">
        <Button className="secondaryIn">
          <span>Sign In with Google </span>
          <ImgIcon type="google" className="icon" />
        </Button>
        <Button className="secondaryIn second">
          <span>Sign In with Facebook </span>
          <ImgIcon type="facebook" className="icon" />
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
