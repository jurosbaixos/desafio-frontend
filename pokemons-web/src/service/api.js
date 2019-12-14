import axios from 'axios';

const api = axios.create({
  baseURL:'https://pokeapi.co/api/v2/'
});

export default {
  listPokemons: () =>{
    return api.get('pokemon?limit=6')

  },
  getPokemon: (name) => {
    return api.get(`pokemon/${name}`)
  }
}
