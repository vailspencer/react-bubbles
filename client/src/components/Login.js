import React from "react";
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../utils/AxiosWithAuth.js';
import { useHistory } from 'react-router-dom';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

const { register, handleSubmit, reset} = useForm();
const history = useHistory();


const onSubmit = (data) => {
  setTimeout(() => {
    axiosWithAuth()
    .post('/login', data)
    .then((res) => {
      localStorage.setItem('token', res.data.payload);
      history.push('/bubbles');
    })
    .catch((err) => console.error(err));
    reset();
  }, 1000);
};

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <div>
          <label htmlFor = 'username'> Username: </label>
          <input
            type = 'text'
            ref ={register}
            name = 'username'
            placeholder = 'enter username'          
          />          
        </div>
        <div>
          <label htmlFor='password'>Username:</label>
          <input 
            type='password'
            ref = {register}
            name ='password'
            placeholder = 'Please enter your password'
          />
        </div>
        <button type = 'submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
