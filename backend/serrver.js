const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const core = require('cors')
const PORT=2000;
const ProductRouter = require('./Routes/Products.js')
const AuthRouter = require('./Routes/AuthRouter');

require('dotenv').config();
require('./Models/db.js')
app.get('/ping',(req,res)=>{
    res.send('PONG')
})
app.get('/ping/name',(req,res)=>{
    res.send('Akshit is inside the ping')
})
app.use(bodyParser.json())
app.use(core())
app.use('/auth',AuthRouter)
app.use('/products',ProductRouter)



app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
