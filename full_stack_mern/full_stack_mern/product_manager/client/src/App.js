import AddProduct from './components/AddProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main'
import ProductDetails from './components/ProductDetails'
import UpdateProduct from './components/UpdateProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<Main/>} default />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/edit/:id' element={<UpdateProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
