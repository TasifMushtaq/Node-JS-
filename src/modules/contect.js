const mongoose=require("mongoose")
const contect=mongoose.Schema({
    name:String,
    password:String,
    query:String
})
module.exports=mongoose.model("contect",contect)