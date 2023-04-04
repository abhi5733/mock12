
 const express = require("express")
   require("dotenv").config()
 const app = express()
const cors = require("cors")
const {connection} = require("./config/db")
const {privateRoute} = require("./routes/privateRoutes")
 const {userRouter} = require("./routes/userRoutes")
const {auth} = require("./middleware/auth")


 app.use(cors())
app.use(express.json())
app.use("/user" , userRouter)
app.use(auth)
app.use("/private" , privateRoute)






 app.listen(process.env.port, async ()=>{

     try{
        await connection
       console.log("connecte to db")
    }catch(err){
        console.log("cannot connect to db")
    }

    console.log(`server started at ${process.env.port}`)


 })