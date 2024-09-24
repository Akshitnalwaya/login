const mongoose = require('mongoose')
// const url=mongoose.connect()

mongoose.connect('mongodb://localhost:27017/auth-db').then(()=>{
    console.log("Mongoose running ")
}
).catch((err)=>{
    console.log("Error db not conected")
})