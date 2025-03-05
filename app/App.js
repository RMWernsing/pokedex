import { AuthController } from "./Auth/AuthController.js"
import { PokedexController } from "./controllers/PokedexController.js"
import { SandboxController } from "./controllers/SandboxContoller.js"


class App {

  authController = new AuthController()

  sandboxController = new SandboxController()

  pokedexController = new PokedexController()

}

window['app'] = new App()


