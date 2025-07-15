import mongoose from "mongoose";
import ConnectDB from './db/datacon.js';
import dotenv from 'dotenv'

dotenv.config({
    path :'./env'
})

ConnectDB()
.then(() =>
{
    console.log("successfully connected")
    app.listen(process.env.PORT || 8000)
}).catch((error)=>{
    console.log("Error is here",error)
})