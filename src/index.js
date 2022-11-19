import express from "express";
import cors from "cors";
import cadastro from "./routes/cadastro.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cadastro);

app.listen(5000, () => {
    console.log(`Server running in port: ${5000}`);
});