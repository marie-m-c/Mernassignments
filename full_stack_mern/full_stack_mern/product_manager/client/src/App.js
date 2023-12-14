import AddProduct from './components/AddProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<Main/>} default />
        <Route path='/products/:id' element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
