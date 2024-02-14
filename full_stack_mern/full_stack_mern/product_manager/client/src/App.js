import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';
import LoginRegistration from './views/LoginRegistration';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginRegistration />} />
        <Route path='/products' element={<Nav />}>
          <Route index element={<Main />} />
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='/edit/:id' element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
