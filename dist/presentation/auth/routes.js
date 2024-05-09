"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express"); // 2
const controller_1 = require("./controller"); //6
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)(); //4 
        const controller = new controller_1.AuthController(); // 2
        // Definir todas mis rutas especificas
        router.post('/login', controller.loginUser); // 3
        router.post('/register', controller.registerUser); // 4
        return router; // 5
    }
}
exports.AuthRoutes = AuthRoutes;
