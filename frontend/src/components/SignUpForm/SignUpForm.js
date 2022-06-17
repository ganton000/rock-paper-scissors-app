// Regex Description
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a"

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import gameApi from '../../api/gameApi';

//email, username, password, firstName, lastName

const SignUpForm = () => {

  const [user, setUser] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  });

  useEffect(() => {

    if (!user) return;
    const createUser = async (user) => {
      try {

        const userData = JSON.stringify(user);
        const response = await gameApi.post('/signup', userData);

        if (response.status === 201) {
          console.log(response)
        }

          setUser(null);
          reset();

      } catch (error) {
        console.log(error)
        setUser(null);
        reset({}, { keepValues: true, keepErrors: true });
      }
    }
    createUser(user);
  }, [user, reset])

  return (
    <div className='signup--container'>
      <div className='signup--header'>
      <Link style={{textDecoration: 'none'}} to='/'>
        <img className='back' alt="Back button" src={require('../../images/whitebackarrow.png')} />
      </Link>
        <h2 className='top'>Join Now and Start Playing Today!</h2>
      </div>

      <form
      onSubmit={handleSubmit((data) => {
        try { setUser(data) } catch (e) {
          setUser(null);
          throw new Error('Something went wrong')
        }
      })}>
        <div className='name'>
          <input
          { ...register("firstName",
            { required: "This is required." }
          )}
          id='firstName' type='text' placeholder="First Name"/>
          <p>{errors.firstName?.message}</p>
        </div>

        <div className='name last'>
          <input
          { ...register("lastName",
            { required: "This is required." }
          )}
          id='lastName' type='text' placeholder="Last Name"/>
          <p>{errors.lastName?.message}</p>
        </div>
        <input
         {...register("email",
         { required: "This is required." }
         )}
        id='email' type='email' placeholder="Email" />
        <p>{errors.email?.message}</p>

        <div className='name'>
          <input
           {...register("username", {
            required: "This is required.",
            minLength: {
              value: 4,
              message: "Min. length of 4 characters"
            }
          })}
          id='username' type='text' placeholder="Username"/>
          <p>{errors.username?.message}</p>
        </div>

        <div className='name last'>
          <input
          {...register("password", {
            required: "This is required.",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "Min. length of 8 characters, at least one letter and one number"
            }
          })}
          id='password' type='password' placeholder="Password"/>
          <p>{errors.password?.message}</p>
        </div>

        <button type='submit' className='signUp'>SIGN UP</button>
      </form>

      <p className='or'> OR </p>

      <div className='signup--container-btn'>

        <button className='secondaryUp'>
          SIGN UP WITH GOOGLE
          <img className='icon' alt='back button'src={require('../../images/google.png')} />
        </button>

        <button className='secondaryUp second'>
          SIGN UP WITH FACEBOOK
           <img className='icon' alt='Facebook'src={require('../../images/facebook-logo.png')} />
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
