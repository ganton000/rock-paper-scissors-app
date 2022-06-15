import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import gameApi from '../../api/gameApi';
import Button from '../Button/Button';
import ImgIcon from '../ImgIcon/ImgIcon';
import Input from '../Input/Input';


const SignInForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [user, setUser] = useState({});


  return (
    <div className="signup--container">
      <div className="signup--header">
        <Link to="/">
          <ImgIcon className="back" type="goBack" />
        </Link>
        <h2 className="top">Login Now and Start Playing!</h2>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          try { setUser(data) } catch (e) {
            setUser(null);
            throw new Error('Something went wrong')
          }
        })}>
        {/*<Input
          onChange={handleInputChange}
          value={email}
          htmlFor="email"
          type="email"
          required
        />*/}
        {/*<div className="name">*/}
          <Input
            {...register("username",
              { required: "This is required." }
            )}
            htmlFor="username"
            type="text"
            placeholder="Username"
            required
          />
          <p>{errors.username?.message}</p>
        {/*</div>*/}
        {/*<div className="name last">*/}
          <Input
            {...register("password",
            { required: "This is required." }
            )}
            htmlFor="password"
            type="password"
            placeholder="Password"
            required
          />
          <p>{errors.password?.message}</p>
        {/*</div>*/}
        <Button type="submit" className="signIn">
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
