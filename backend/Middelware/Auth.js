const jwt = require('jsonwebtoken')
const ensureAuth=(req,res,next)=>{
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(403)
        .json({message:"unauthorized"})

    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET)
        req.user=decoded
        next()
    }
    catch(err){
        return res.status(403)
        .json({message:'Unauth,jwt joken'})
    }
}
module.exports=ensureAuth