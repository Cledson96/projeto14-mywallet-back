import dotenv from "dotenv";
import { MongoClient} from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
  await mongoClient.connect();
  console.log("MongoDB conectado!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("mywallet");
export const users = db.collection("user");
export const sessao = db.collection("sessao");
export const registro = db.collection("registro");
