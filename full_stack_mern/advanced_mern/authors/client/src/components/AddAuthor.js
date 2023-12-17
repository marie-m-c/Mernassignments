import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAuthor = ({ addNewAuthor }) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', { name })
            .then( result => {
                console.log(result.data.author.name)
                addNewAuthor(result.data.author);
                navigate('/authors')
             })
            .catch( err => {
                setErrors(err.response.data.errors)
            } )
        setName('');
    }

  return (
    <div className='w-50'>
      <Link to='/authors'>Home</Link>
      <p>Add a new author</p>
      <form className='form w-50 border p-2' onSubmit={submitHandler}>
        <div className='form-group p-2'>
            <label>Name:</label>
            <input className='form-control my-1' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            {
                errors.name?
                    <p className='text-danger text-sm'> { errors.name.message } </p>
                    : null
            }
        </div>
        <div className='d-flex justify-content-center gap-3 p-4'>
            <button className='btn btn-primary' onClick={() => navigate('/authors')}>Cancel</button>
            <input className='btn btn-primary' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default AddAuthor
