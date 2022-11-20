import { registroSchema } from "../models/registro.models.js";
import { registro } from "../database/db.js";

export async function entrada (req,res){
    const { valor, descricao} = req.body;
    console.log(res.locals.user) 

    const validation = registroSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    try {
        await registro.insertOne({ email : res.locals.user, descricao ,valor});
        res.status(201).send("registro cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }


}