import { registro } from "../database/db.js";

export async function registros (req,res){
   
    const registros =  await registro.find({ email : res.locals.user}).toArray();

    try {
        res.status(200).send(registros);
    } catch (err) {
        res.status(500).send(err);
    }


}