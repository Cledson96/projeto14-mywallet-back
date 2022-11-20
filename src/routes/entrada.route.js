import { Router } from "express";
import {entrada} from "../controllers/entrada.controller.js";
import {validador} from "../middlewares/logado.middlewares.js";

  const router = Router();

  router.post("/entrada",validador, entrada);

  export default router;