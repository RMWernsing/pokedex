export class PokemonList {
  constructor(data) {
    this.name = data.name
    this.url = data.url
  }

  get pokemonListTemplate() {
    return `
      <div>
        <button onclick="app.pokedexController.getActivePokemon('${this.name}')" class="btn btn-success mt-2 w-100 text-capitalize" type="button" title="See details about ${this.name}">${this.name}</button>
      </div>
    `
  }

}

export class SandboxPokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.img
  }

  get sandboxPokemonTemplate() {
    return `
     <div>
        <button onclick="app.pokedexController.getActivePokemon('${this.name}')" class="btn btn-indigo mt-2 w-100 text-capitalize" type="button" title="See details about ${this.name}">${this.name}</button>
      </div>
    `
  }
}

