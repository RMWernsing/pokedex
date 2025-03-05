import { ActivePokemon, PokemonList } from './models/Pokemon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**
   * @type {PokemonList[]}
   */
  pokemon = []


  activePokemon = null
}

export const AppState = createObservableProxy(new ObservableAppState())