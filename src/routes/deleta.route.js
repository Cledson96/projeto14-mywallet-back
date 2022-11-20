import { Router } from "express";
import { deleta } from "../controllers/deleta.controller.js";
import { validador } from "../middlewares/logado.middlewares.js";

const router = Router();

router.delete("/deleta", validador, deleta);

export default router;


