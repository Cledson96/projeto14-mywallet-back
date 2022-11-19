import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient("mongodb://localhost:27017");
try {
  await mongoClient.connect();
  console.log("MongoDB conectado!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("mywallet");
export const users = db.collection("user");
export const sessao = db.collection("sessao");
