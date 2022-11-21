import { registro } from "../database/db.js";
import { ObjectId } from "mongodb";

export async function deleta(req, res) {
    let id = req.headers.id;

    try {
        let mensage = await registro.findOne({ _id: new ObjectId(id) });
      
        if (!mensage) {
            res.status(404).send("id não encontrado!")
            return
        }
        await registro.deleteOne({ _id: ObjectId(id) });
        res.send("Mensagem apagada com sucesso!");
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
    }

}
