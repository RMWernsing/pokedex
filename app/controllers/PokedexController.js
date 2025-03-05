import { AppState } from "../AppState.js";
import { pokedexService } from "../services/PokedexService.js";
import { api } from "../utils/Axios.js";
import { Pop } from "../utils/Pop.js";

export class PokedexController {

  constructor() {
    AppState.on('pokemon', this.drawPokemon)
    AppState.on('activePokemon', this.drawActivePokemon)
    this.getPokemon()
  }

  drawPokemon() {
    const pokemon = AppState.pokemon
    let pokemonListContent = ''

    pokemon.forEach(pokemon => pokemonListContent += pokemon.pokemonListTemplate)
    const pokemonListElem = document.getElementById('pokemonList')
    pokemonListElem.innerHTML = pokemonListContent
  }

  drawActivePokemon() {
    const pokemon = AppState.activePokemon
    if (pokemon == null) {
      return
    }
    const activePokemonElem = document.getElementById('activePokemonCard')
    activePokemonElem.innerHTML = pokemon.ActivePokemonCardTemplate
  }

  async getActivePokemon(pokemonName) {
    try {
      console.log('clicked button for ', pokemonName);
      await pokedexService.getActivePokemon(pokemonName)
      console.log(AppState.activePokemon);


    } catch (error) {
      console.error('COULD NOT GET POKEMON', error)
      Pop.error(error, 'Could Not Get Pokemon')

    }

  }

  async getPokemon() {
    try {
      await pokedexService.getPokemon()
    } catch (error) {
      console.error('COULD NOT GET POKEMON', error)
      Pop.error(error, 'Could Not Get Pokemon')

    }
  }

}

