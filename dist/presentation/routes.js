"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express"); // 2
const routes_1 = require("./auth/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        // Definir todas mis rutas especificas
        router.use('/api/auth', routes_1.AuthRoutes.routes); // 3
        return router;
    }
}
exports.AppRoutes = AppRoutes;
