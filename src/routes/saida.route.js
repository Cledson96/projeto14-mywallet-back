import { Router } from "express";
import {saida} from "../controllers/saida.controller.js";
import {validador} from "../middlewares/logado.middlewares.js";

  const router = Router();

  router.post("/saida",validador, saida);

  export default router;