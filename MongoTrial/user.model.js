import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
    username :{
        type: String,
        required: true,
        minlength
    },
    email : {
        type: String,
        required: true,
        unique:true,
        lowercase:true
        },
    password :{
        type: String,
        required : true,
        lowercase:true,
        minlength: 6
    }
},{timestamp:true})
const User = mongoose.model('User', userSchema)