import { AppState } from "../AppState.js";
import { ActivePokemon, PokemonList } from "../models/Pokemon.js";
import { pokedexApi } from "../utils/Axios.js"

class PokedexService {


  async getPokemon() {
    const response = await pokedexApi.get('pokemon?limit=100000&offset=0')
    console.log('Got Pokemon', response);

    const pokemon = response.data.results.map(pojo => new PokemonList(pojo))
    AppState.pokemon = pokemon

  }

  async getActivePokemon(pokemonName) {
    const response = await pokedexApi.get(`pokemon/${pokemonName}`)
    const pokemon = new ActivePokemon(response.data)
    AppState.activePokemon = pokemon
  }

}

export const pokedexService = new PokedexService()