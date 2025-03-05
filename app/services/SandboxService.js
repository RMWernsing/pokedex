import { AppState } from "../AppState.js"
import { SandboxPokemon } from "../models/Pokemon.js"
import { api } from "../utils/Axios.js"
import { Pop } from "../utils/Pop.js"

class SandboxService {
  async createPokemon() {
    const pokemon = AppState.activePokemon
    const response = await api.post('api/pokemon', pokemon)
    console.log('created pokemon', response.data);
    const newPokemon = new SandboxPokemon(response.data)
    AppState.sandboxPokemon.push(newPokemon)


  }

}



export const sandboxService = new SandboxService()