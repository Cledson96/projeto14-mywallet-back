import { users, sessao } from "../database/db.js";

export async function validador(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send("Obrigatório envio de um token valido!");
  }

  try {
    const sessaos = await sessao.findOne({ token });

    const usuario = await users.findOne({ _id: sessaos?.id });
   
    if (!usuario) {
        return res.status(401).send("Favor logar novamente!");
    }

    res.locals.user = usuario.email;
  
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  
  next();
}