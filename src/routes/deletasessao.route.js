import { Router } from "express";
import { deletasessao } from "../controllers/deletasessao.controller.js";
import { validador } from "../middlewares/logado.middlewares.js";

const router = Router();

router.delete("/deletasessao", validador, deletasessao);

export default router;
