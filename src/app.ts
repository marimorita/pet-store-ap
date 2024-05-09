import { envs } from "./config/envs"; // importar el archivo envs de config
import { Server } from "./presentation/Server";
import { AppRoutes } from "./presentation/routes"; //1

(()=> {
    main();
  })()
  
  async function main (){
  // todo: await base de datos
  
  // todo: inicio de nuestro server
      new Server({
        port: envs.PORT, // asignamos la variable de entorno en nuestra instancia de servidor.
        routes: AppRoutes.routes //2
      }).start();
  }