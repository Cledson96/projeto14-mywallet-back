import express from "express";
import cors from "cors";
import cadastro from "./routes/cadastro.route.js";
import login from "./routes/login.route.js";
import entrada from "./routes/entrada.route.js";
import saida from "./routes/saida.route.js";
import registros from "./routes/registros.route.js";
import deletar from "./routes/deleta.route.js"
import deletarsessao from "./routes/deletasessao.route.js"

const app = express();
app.use(express.json());
app.use(cors());
app.use(cadastro);
app.use(login);
app.use(entrada);
app.use(saida);
app.use(registros);
app.use(deletar);
app.use(deletarsessao);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running in port: ${port}`);
});