import { users, sessao } from "../database/db.js";

export async function validador(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ","");
  
  if (!token) {
    return res.status(401).send("Obrigatório envio de um token valido!");
  }

  try {
   
    const session = await sessao.findOne({ token });
    const user = await users.findOne({ _id: session?.id });

    
    if (!user) {
      return res.sendStatus(401);
    }

    res.locals.user = user.email;
 
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  next();
}