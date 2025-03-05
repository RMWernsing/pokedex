import { PokedexController } from "./controllers/PokedexController.js"


class App {

  pokedexController = new PokedexController()

}

window['app'] = new App()


