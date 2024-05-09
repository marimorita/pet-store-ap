import { Router } from 'express'; // 2
import { AuthRoutes } from './auth/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

      // Definir todas mis rutas especificas
      router.use('/api/auth', AuthRoutes.routes) // 3
      return router;
  }

}