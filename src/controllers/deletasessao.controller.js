import { sessao } from "../database/db.js";

export async function deletasessao(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    try {
        let mensage = await sessao.findOne({ token });

        if (!mensage) {
            res.status(404).send("id não encontrado!")
            return
        }
        await sessao.deleteOne({ token });

        res.send("sessao deslogada!");
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
    }

}