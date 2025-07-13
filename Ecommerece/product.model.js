import mongoose from 'mongoose'
const ProductQuantity= new mongoose.Schema({
    ProductId:{
        type:mongoose.Schema.types.ObjectId,
        ref:"Product",
    },
    Quantity:{
        type:Number,
        required:true
    }
})

const ProductSchema=new mongoose.ProductSchema({
    description:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    OwnedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    Stock:{
        type:Number,
        required:true,
        default:true
    },
    OrderItem:{
        type : [ProductQuantity]
    },
    Adress:{
        type:String,
        required:true
    },
    stuts:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    },
})

export const Product = mongoose.module('Product',ProductSchema)