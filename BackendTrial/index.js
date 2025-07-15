import mongoose from "mongoose";
import ConnectDB from './db/datacon.js';
import dotenv from 'dotenv'

dotenv.config({
    path :'./env'
})

ConnectDB();