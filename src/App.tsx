import React, { useState, useEffect } from 'react';
import './App.css';
import { pokemon, PokemonCard } from './components/pokemonCard/PokemonCard';
import axios from 'axios';
import { url } from 'inspector';


function App() {
  const [arr, setArr] = useState<any[]>([]);
  const [query,setQuery]=useState('')
  const [search,SetSearch]= useState('')
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${search}`,
      );
      setArr(result.data);
    };
    fetchData();
  }, [search]);

  return (
    <div className="App">
      <h1> Welcome to Pokemon World</h1>
      <label htmlFor="searchQuery"></label>
      <input type="text" name='searchQuery' placeholder='Search for your Pokemon'  value={query}
        onChange={event => setQuery(event.target.value)} />
      <button onClick={() => SetSearch(query)} >Submit</button>
      {arr['results'] && arr['results'].map((pokemon:pokemon,index:number)=>{
        return (
          <PokemonCard name={pokemon.name} url = {pokemon.url} order={index+1} key={index}/>
        )
      })}
    </div>
  );
}

export default App;
