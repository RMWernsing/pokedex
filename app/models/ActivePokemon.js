
export class ActivePokemon {
  constructor(data) {
    this.name = data.name;
    this.height = data.height;
    this.weight = data.weight;
    this.health = data.stats[0].base_stat;
    this.attackPower = data.stats[1].base_stat;
    this.defense = data.stats[2].base_stat;
    this.speed = data.stats[5].base_stat;
    this.frontImageUrl = data.sprites.front_default;
    this.backImageUrl = data.sprites.back_default;

  }

  get ActivePokemonCardTemplate() {
    return `
          <div class="active-card-bg shadow-lg p-3 mt-2 text-light sticky-top">
          <div class="d-flex justify-content-between">
          <h1 class="text-capitalize">${this.name}</h1>
          <button type="button" class="btn btn-indigo">Add To Collection +</button>
          </div>
            <hr>
            <div class="d-flex justify-content-center">
              <img class="img-size"
                src="${this.frontImageUrl}" alt="front sprite of ${this.name}">
              <img class="img-size"
                src="${this.backImageUrl}" alt="back sprite of ${this.name}">
            </div>
            <div class="d-flex justify-content-between mx-5 fs-4">
              <p>Health:</p>
              <p>${this.health} hp</p>
            </div>
            <div class="d-flex justify-content-between mx-5 fs-4">
              <p>Attack:</p>
              <p>${this.attackPower} ap</p>
            </div>
            <div class="d-flex justify-content-between mx-5 fs-4">
              <p>Defense:</p>
              <p>${this.defense} dp</p>
            </div>
            <div class="d-flex justify-content-between mx-5 fs-4">
              <p>Speed:</p>
              <p>${this.speed} sp</p>
            </div>
            <div class="d-flex justify-content-between mx-5 fs-4">
              <p>Weight:</p>
              <p>${this.weight} lbs</p>
            </div>
            <div class="d-flex justify-content-between mx-5 fs-4">
              <p>Height:</p>
              <p>${this.height} ft</p>
            </div>
          </div>
    `;
  }
}
