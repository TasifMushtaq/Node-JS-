const { response } = require("express");
const express = require("express");
const {route}=require('express/lib/application');
const contect = require("../modules/contect");
const routes=express.Router();


routes.post("/contect-us",async(requset,response)=>{
    // console.log("The form data is submitted")
    // console.log(requset.body)
    // save the data to db
    try{
        const data=await contect.create(requset.body)
        console.log(data)
        response.redirect("/")
    }catch(e){
        console.log(e)
        response.redirect("/")

    }
})








module.exports=routes;