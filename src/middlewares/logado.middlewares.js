import { users, sessao } from "../database/db.js";


export async function validador(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ","");
  

  if (!token) {
    return res.status(401).send("Obrigatório envio de um token valido!");
  }

  try {
   
    console.log(token)
    const session = await sessao.findOne({ token });
    console.log(session)
    const user = await users.findOne({ _id: session?.id });
    console.log(user)
    

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