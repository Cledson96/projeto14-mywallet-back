import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import joi from "joi";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from 'uuid';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const mongoClient = new MongoClient("mongodb://localhost:27017");

let db;
let usuarios;

mongoClient.connect().then(() => {
    db = mongoClient.db("mywallet");
});


app.listen(5000, () => {
    console.log(`Server running in port: ${5000}`);
});