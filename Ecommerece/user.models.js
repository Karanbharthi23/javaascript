import { timeStamp } from "console";
import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        lowercase :true,
        require:true,
        unique:true
    },
    password:
    {
        type:String,
        lowercase:true,
        require:true,
        unique:true
    },
    email:{
        require:true,
        lowercase:true,
        type:String,
        unique:true
    },
    Adress:{
        type:String,
        require:true
    }
},{timeStamp:true})

export const User=mongoose.model('user',UserSchema)