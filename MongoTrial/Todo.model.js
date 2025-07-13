import mongoose, { Mongoose }  from 'mongoose'

const submodelSchema = new mongoose.Schema({
    content :{
        type: String,
        required: true
    },
    complete :{
        type :String,
        required : true,
        default:false
    },
    CreatedBy:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    SubTodos:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Sub-Todo"
    }
},{timestamps:true})

export const todo =  mongoose.model("Todo",submodelSchema)