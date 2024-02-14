import { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [inputObject, setInputObject] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState([]);

  const handelInputs = (e) => {
    setInputObject({
      ...inputObject,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputObject);
    axios
      .post('http://localhost:8000/api/register', inputObject, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result.data.user);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
    setInputObject({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='w-50 border border-light-50 bg-light align-self-start pb-3'>
      <h3 className='text-center fw-bolder text-light bg-info p-1'>
        Registration
      </h3>
      <form className='form p-2 text-center' onSubmit={submitHandler}>
        <div className='mb-3 row'>
          <label className='col-sm-4 col-form-label text-secondary'>
            Firstname
          </label>
          <div className='col-sm-8'>
            <input
              type='text'
              className='form-control'
              name='firstName'
              value={inputObject.firstName}
              onChange={handelInputs}
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label className='col-sm-4 col-form-label text-secondary'>
            Lastname
          </label>
          <div className='col-sm-8'>
            <input
              type='text'
              className='form-control'
              name='lastName'
              value={inputObject.lastName}
              onChange={handelInputs}
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label className='col-sm-4 col-form-label text-secondary'>
            Email
          </label>
          <div className='col-sm-8'>
            <input
              type='text'
              className='form-control'
              name='email'
              value={inputObject.email}
              onChange={handelInputs}
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label className='col-sm-4 col-form-label text-secondary'>
            Password
          </label>
          <div className='col-sm-8'>
            <input
              type='password'
              className='form-control'
              name='password'
              value={inputObject.password}
              onChange={handelInputs}
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label className='col-sm-4 col-form-label text-secondary'>
            Confirm Password
          </label>
          <div className='col-sm-8'>
            <input
              type='password'
              className='form-control'
              name='confirmPassword'
              value={inputObject.confirmPassword}
              onChange={handelInputs}
            />
          </div>
        </div>
        <input
          className='btn btn-secondary w-50'
          type='submit'
          value='Register'
        />
      </form>
      {Object.keys(errors).map((key) => (
        <p key={key} className='text-danger px-3 my-0 fs-6 lh-sm'>
          {errors[key].message}
        </p>
      ))}
    </div>
  );
};

export default Registration;
