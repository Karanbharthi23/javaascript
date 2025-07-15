import mongoose from "mongoose";
import { DB_NAME } from '../constant.js'
import express from 'express'

const app = express();
console.log("hello world!")
const ConnectDB = (async()=>{
    try
    {
            let con = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
            if(con)
            {
                console.log("Successfully")
            }
    }
    catch(error)
    {
        console.log("error ",error)
    }
})
export default ConnectDB