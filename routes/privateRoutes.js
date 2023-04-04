
 const express = require("express")
 const {userModel} = require("../model/userModel")
const {investModel} = require("../model/investModel")
 const privateRoute = express.Router()


 privateRoute.get("/", async (req,res)=>{
  
  let user = req.body.user
    try{
        let users =  await userModel.findById(user)
        res.send(users)
       }catch(err){
    res.send({"err":"something went wrong"})
    }
 })


 privateRoute.post("/invest",async(req,res)=>{
 
    const {inv,time,int} = req.body
    try{
    const Amount = Math.floor(inv*time)
    const maturity = Math.floor(inv*((((1+(int/100))**time)-1)/(int/100)))
   const interest = maturity-Amount 
res.send({"amount":Amount,"maturity":maturity,"interest":interest})
    }catch(err){
        res.send({"err":"something went wrong"}) 
    }




 })





 module.exports = {privateRoute}
