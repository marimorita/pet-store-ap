import { Router } from 'express'; // 2
import { AuthController } from './auth/controller'; //6

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new AuthController(); // 2

      // Definir todas mis rutas especificas
      router.post('/login', controller.loginUser) // 3
      router.post('/register', controller.registerUser) // 4
      return router;
  }

}