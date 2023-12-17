import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddAuthor from './components/AddAuthor';
import AuthorList from './components/AuthorList';
import UpdateAuthor from './components/UpdateAuthor';
import Brand from './components/Brand';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
        .then((result => {
            console.log(result.data.authors);
            setAuthors(sortList(result.data.authors))
        })).catch((err) => {
            console.log(err);
        })
  }, [])

  const removeFromDOM = (id) => {
    setAuthors(authors.filter((author) => {
        return author._id !== id;
    }))
  }

  const sortList = (list) => {
    return list.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
  }

  const addNewAuthor = (author) => {
    setAuthors(sortList([...authors, author]));
  }

  return (
    <div className="w-75 mx-auto">
      <Routes>
        <Route path='/authors' element={<Brand />}>
          <Route index element={<AuthorList removeFromDOM={removeFromDOM} authors={ authors } />} />
          <Route path='new' element={<AddAuthor addNewAuthor={ addNewAuthor }/> } />
          <Route path=':id/edit' element={<UpdateAuthor/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
