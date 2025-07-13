import mongoose from  'mongoose'

const OrderSchema = new  mongoose.Schema({
    orderPrice: {
        type:Number,
        required:true
    },
    Customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
})