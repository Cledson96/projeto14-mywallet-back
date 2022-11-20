import { Router } from "express";
import {registros} from "../controllers/registros.controller.js";
import {validador} from "../middlewares/logado.middlewares.js";

  const router = Router();

  router.get("/registros",validador, registros);

  export default router;