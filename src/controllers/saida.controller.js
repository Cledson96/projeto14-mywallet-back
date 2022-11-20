import { registroSchema } from "../models/registro.models.js";
import { registro } from "../database/db.js";
import dayjs from "dayjs"

export async function saida (req,res){
    const { valor, descricao} = req.body;
  
    const validation = registroSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    try {
        await registro.insertOne({ email : res.locals.user, descricao ,valor , tipo: "saida",data:dayjs().format("DD/MM")});
        res.status(201).send("registro cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }


}