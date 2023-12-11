import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokemonList, setPokemonList] = useState(["pikachu", "bulbizarre"]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(response => response.results.map(pokemon => pokemon.name))
    .then(results => {
      setPokemonList(results)
    })
    .catch(err => console.log(err));
  });
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
