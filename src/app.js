const express=require("express");
const bodyparser=require('body-parser')
const routes=require('./routes/main');

const mongoose=require("mongoose")
const app=express();
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use('',routes);

app.use('/static',express.static("public"));
mongoose.connect("mongodb://127.0.0.1:27017/portfilio",()=>{
    console.log("db connect");

})
app.get('/',(req,resp)=>{
    // resp.send("Your Server has bin started")
    resp.render("index.hbs");
})
// app.get('/gallary',(req,resp)=>{
//     resp.render("#gallary")
// })

app.listen(process.env.PORT |5000,()=>{
    console.log("The server is started...")
});
