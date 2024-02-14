import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [inputObject, setInputObject] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      .post('http://localhost:8000/api/login', inputObject, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result.data.message);
        navigate('/products');
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setError(err.response.data.error);
      });
    setInputObject({
      email: '',
      password: '',
    });
  };
  return (
    <div className='w-50 border border-light-50 bg-light align-self-start pb-4'>
      <h3 className='text-center fw-bolder text-light bg-info p-1'>Login</h3>
      <form className='form p-2 text-center' onSubmit={submitHandler}>
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
        <input className='btn btn-secondary w-50' type='submit' value='Login' />
      </form>
      {error ? (
        <p className='text-danger px-3 my-0 fs-6 lh-sm'>{error}</p>
      ) : null}
    </div>
  );
};

export default Login;
