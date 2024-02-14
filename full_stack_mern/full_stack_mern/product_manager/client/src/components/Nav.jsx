import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Nav = () => {
  const navigate = useNavigate();
  const logout = () => {
    axios
      .get('http://localhost:8000/api/logout', {}, { withCredentials: true })
      .then((result) => {
        console.log(result);
        navigate('/');
      });
  };
  return (
    <>
      <nav className='navbar navbar-light bg-light text-secondary d-flex justify-content-end'>
        <div className='fs-5 fw-bold mx-4 cursor-pointer' onClick={logout}>
          Logout
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
