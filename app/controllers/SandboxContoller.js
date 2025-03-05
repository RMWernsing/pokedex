import { AppState } from "../AppState.js";
import { sandboxService } from "../services/SandboxService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxController {
  constructor() {
    AppState.on('sandboxPokemon', this.drawSandboxPokemon)

  }

  async savePokemon() {
    try {
      await sandboxService.createPokemon()

    } catch (error) {
      Pop.error(error, 'Could Not Save Pokemon')
      console.error('COULD NOT SAVE POKEMON', error);

    }
  }

  drawSandboxPokemon() {
    const pokemon = AppState.sandboxPokemon
    let pokemonContent = ''
    pokemon.forEach(pokemon => pokemonContent += pokemon.sandboxPokemonTemplate)
    const sandboxPokemonElem = document.getElementById('sandboxPokemon')
    sandboxPokemonElem.innerHTML = pokemonContent
  }


}