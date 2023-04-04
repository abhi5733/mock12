
const jwt = require("jsonwebtoken")

 const auth = (req,res,next)=>{

    let token = req.headers.authorization

    if(token){

     const decoded = jwt.verify(token, 'masai');

req.body.user = decoded.user

next()
    }else{
        res.send({"err":"login first"})
    }





}
module.exports = {auth}