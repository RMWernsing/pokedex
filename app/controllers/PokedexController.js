import { pokedexService } from "../services/PokedexService.js";
import { Pop } from "../utils/Pop.js";

export class PokedexController {

  async getPokemon() {
    try {
      await pokedexService.getPokemon()
    } catch (error) {
      console.error('COULD NOT GET POKEMON', error)
      Pop.error(error, 'Could Not Get Pokemon')

    }
  }

}