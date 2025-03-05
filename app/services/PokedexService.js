import { pokedexApi } from "../utils/Axios.js"

class PokedexService {

  async getPokemon() {
    const response = await pokedexApi.get('pokemon')
    console.log('Got Pokemon', response);

  }

}

export const pokedexService = new PokedexService()