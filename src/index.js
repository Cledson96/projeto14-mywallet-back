import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import joi from "joi";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from 'uuid';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const mongoClient = new MongoClient("mongodb://localhost:27017");

let db;
let usuarios;

mongoClient.connect().then(() => {
    db = mongoClient.db("mywallet");
});

app.post("/cadastro", async (req, res) => {
    if(!req.body.name ||!req.body.email ||!req.body.password){
        console.log(req.body)
        res.status(422).send("Obrigatório informar nome e email pelo body!")
        return
    }
  
    const body = req.body;
    const passwordHash = bcrypt.hashSync(req.body.password, 10);

    usuarios = await db.collection("user").find({}).toArray();

    const verificador = usuarios.find(verifica => verifica.email === req.body.email)
    

    if (verificador) {
        res.status(409).send("Já existe um usuario com este email!")
        return
    }

    const cadastroSchema = joi.object({
        name: joi.string().required().min(1).max(100),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: joi.string().min(3).required().email()
        

    });

    const validation = cadastroSchema.validate(body, { abortEarly: false });

    if (validation.error) {
        console.log(validation)
        res.status(422).send("nome ou email invalido!");
        return
    }
    try {
        await db.collection("user").insertOne({ name: body.name,email: body.email,senha: passwordHash });
        

        res.status(201).send("usuario cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }

})

app.listen(5000, () => {
    console.log(`Server running in port: ${5000}`);
});