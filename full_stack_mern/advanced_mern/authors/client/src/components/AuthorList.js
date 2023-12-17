import { Link } from 'react-router-dom';
import axios from 'axios';

const AuthorList = ({ authors, removeFromDOM }) => {
  const deleteAuthor = (id) => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res);
            removeFromDOM(id);
        })
        .catch((err) => {
            console.log(err)
        })
  }

  return (
    <div>
      <Link to='/authors/new'>Add an author</Link>
      <p>We have quotes by:</p>
      <table className='table table-bordered border-dark w-50'>
        <thead>
          <tr>
            <th className='text-light bg-secondary'>Author</th>
            <th className='text-light bg-secondary'>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {
            authors.map((author) => {
              return (
                <tr>
                  <td style={{color: 'purple'}}> {author.name} </td>
                  <td>
                    <Link className='btn btn-secondary btn-sm mx-1 px-3' to={`/authors/${author._id}/edit`}>Edit</Link>
                    <button 
                    className='btn btn-secondary btn-sm mx-1 px-3'
                      onClick={() => deleteAuthor(author._id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AuthorList
