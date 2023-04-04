
 const express = require("express")
const {userModel} = require("../model/userModel")
 const userRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// signup api

 userRouter.post("/signup", async (req,res)=>{
  
let {name,email,pass} = req.body

    try{
        let user1 = await  userModel.findOne({email})
    //   console.log(user1)
    if(!user1){
        bcrypt.hash(pass, 10, async (err, hash)=> {
           if(hash){
            let user =  userModel({name,email,pass:hash})
            await user.save()
            res.send("Msg: signup sucessfull")
           }else{
            res.send("err: something went wrong ")
           }
        })
    }else{
        res.send("err: something went wrong ")
    }

    }catch(err){
        res.send("err: something went wrong ")
    }


 })

//  login api

userRouter.post("/login", async (req,res)=>{
  
    let {email,pass} = req.body
    
        try{
            let user = await  userModel.findOne({email})
            const pass1 = user.pass
            bcrypt.compare(pass, pass1 , function(err, result) {
                if(result){
                     const  token = jwt.sign({ user: user._id }, 'masai')
                    res.send({"msg":"user logged in successfully" , "token":token})
                }else{
                    res.send("something went wrong ")
                }
               
            })
          
    
        }catch(err){
            res.send("something went wrong ")
        }
    
    
     })




 module.exports = {userRouter}