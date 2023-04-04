const mongoose = require("mongoose")


const invest = mongoose.Schema({
   inv:Number,
   time:Number,
   int:Number

})

const investModel = mongoose.model("invest", invest)

module.exports = {investModel}