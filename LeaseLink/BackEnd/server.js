import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();
dotenv.config();    
app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.get('/',function(req,res){
    res.send("Welcome to LeaseLink Backend");
});
connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log("port connected !")
});