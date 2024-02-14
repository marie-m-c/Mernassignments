import React from 'react';
import Login from '../components/Login';
import Registration from '../components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginRegistration = () => {
  return (
    <div className='w-50 gap-4 d-flex justify-content-between mx-auto my-4'>
      <Login />
      <Registration />
    </div>
  )
}

export default LoginRegistration
