import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateAuthor = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.author.name)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/${id}`, { name })
            .then( result => {
                console.log(result.data.author.name);
                navigate('/authors');
             })
            .catch( err => {
                setErrors(err.response.data.errors);
            } )
    }

    return (
      <div className='w-50'>
        <Link to='/authors'>Home</Link>
        <p>Edit this author:</p>
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

export default UpdateAuthor
