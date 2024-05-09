import { Router } from 'express'; // 2
import { AuthController } from './controller'; //6

export class AuthRoutes { // 1

    static get routes(): Router { //3
  
      const router = Router(); //4 
      const controller = new AuthController(); // 2

      // Definir todas mis rutas especificas
      router.post('/login', controller.loginUser) // 3
      router.post('/register', controller.registerUser) // 4
  
  
        return router; // 5
    }
  
  }