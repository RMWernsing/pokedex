import { PokemonList } from './models/Pokemon.js'
import { ActivePokemon } from "./models/ActivePokemon.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**
   * @type {PokemonList[]}
   */
  pokemon = []

  activePokemon = null


  sandboxPokemon = []
}

export const AppState = createObservableProxy(new ObservableAppState())