import Home from './components/Home';
import Display from './components/Display';
import CustomDisplay from './components/CustomDisplay';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:text" element={<Display />} />
        <Route path="/:text/:col/:bg" element={<CustomDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
