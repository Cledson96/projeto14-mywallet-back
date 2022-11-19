import express from "express";
import cors from "cors";
import cadastro from "./routes/cadastro.route.js";
import login from "./routes/login.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cadastro);
app.use(login);

app.listen(5000, () => {
    console.log(`Server running in port: ${5000}`);
});