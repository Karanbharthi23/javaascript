import { Mongoose } from "mongoose";
import mongoose from Mongoose

const SubschemaModel =  new Mongoose.Schema({},{timestamp:true})

export const Sub= mongoose.model('Sub-Todo',SubschemaModel)