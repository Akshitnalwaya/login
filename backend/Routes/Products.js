const ensureAuth = require('../Middelware/Auth')


const  router = require('express').Router()

router.get('/',ensureAuth,(req,res)=>{
    res.status(200).json([
        {
            name:"Mobile",
            price:"20000"
        },
        {
            name:"IMobile",
            price:"202000"
        }
    ])
})

module.exports = router