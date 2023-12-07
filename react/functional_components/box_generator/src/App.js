import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import AddBox from './components/AddBox';
import Boxes from './components/Boxes';

function App() {
  const [boxProperties, setBoxProperties] = useState([]);
  const addProperties = (color, dimension) => setBoxProperties([...boxProperties, {color, dimension}])
  return (
    <div class="w-50 mx-auto my-5">
      <AddBox addProperties={ addProperties } />
      <Boxes boxProperties={boxProperties} />
    </div>
  );
}

export default App;
