import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import gameApi from '../../api/gameApi';
import Button from '../Button/Button';
import ImgIcon from '../ImgIcon/ImgIcon';
import Input from '../Input/Input';


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

    console.log(user)

    const signInUser = async (user) => {

      try {
        const userData = JSON.stringify(user);
        const response = await gameApi.post('/signin', userData);
        console.log(response)
        console.log(response.data)
        if (response.status === 200) {
          console.log(response)
          console.log(response.data)
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
            type="text"
            placeholder="Username"
          />
          <p>{errors.username?.message}</p>
        {/*</div>*/}
        {/*<div className="name last">*/}
          <input
            {...register("password",
            { required: "This is required." }
            )}
            type="password"
            placeholder="Password"
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
