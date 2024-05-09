"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express"); // 2
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)(); //4 
        // Definir todas mis rutas especificas
        router.post('/login', (req, res) => {
            res.json({ message: 'login' });
        });
        router.post('/register', (req, res) => {
            res.json({ message: 'register' });
        });
        return router; // 5
    }
}
exports.AuthRoutes = AuthRoutes;