import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.data)
    .then(response => response.results.map(pokemon => {
       return pokemon.name
    }))
    .then(results => {
      setPokemonList(results)
    })
    .catch(err => console.log(err));
  }, []);
  return (
    <div className="w-25 mx-auto my-4">
      <ul className='list-group'>
        { pokemonList.map((pokemon, index) => {
          return <li key={index} className='list-group-item'> {pokemon} </li>
        })}
      </ul>
    </div>
  );
}

export default App;
