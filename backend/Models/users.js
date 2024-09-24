const mongoose=require('mongoose')
const Schema=mongoose.Schema
const UserSchenma = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const UserModel = mongoose.model('users',UserSchenma)
module.exports = UserModel