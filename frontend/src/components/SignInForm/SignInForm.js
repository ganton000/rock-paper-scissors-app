import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import gameApi from '../../api/gameApi';
import Button from '../Button/Button';
import ImgIcon from '../ImgIcon/ImgIcon';


const SignInForm = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const [user, setUser] = useState(null);

  useEffect(() => {

    if (!user) return;

    const signInUser = async (user) => {

      try {

        console.log(user);
        if (user.username.includes('@')) { user['email'] = user.username }

        const response = await gameApi.post('/signin', user);

        console.log(response);

        if (response.status === 200) {
          reset();
          setUser(null);
        }

      } catch (error) {
        console.log(error)
        setUser(null);
        reset({}, { keepValues: true });
      }
    }

    signInUser(user);

  }, [user, reset])

  console.log("render")

  return (
    <div className="signup--container">
      <div className="signup--header">
        <Link to="/">
          <ImgIcon className="back" type="goBack" />
        </Link>
        <h2 className="signin--title">Login Now and Start Playing!</h2>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          try { setUser(data) } catch (e) {
            setUser(null);
            throw new Error('Something went wrong')
          }
        })}>
          <input
            {...register("username",
              { required: "This is required." }
            )}
            id="user-cred"
            type="text"
            placeholder="Username or Email"
          />
          <label htmlFor="user-cred">Username or Email</label>
          <p>{errors.username?.message}</p>
          <input
            {...register("password",
            { required: "This is required." }
            )}
            id="password"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
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
