const express= require("express")
const app=express();
const port = process.env.PORT || 5000;
const path=require("./Route/Products")
app.get("/",(req,res)=>{
    res.send("Hello! My name is Ankit")
});


app.use("/api/products",path)

const start= async()=>{
    try{
        app.listen(port,()=>{
            console.log("Connected")
        })
    }catch(error){
        console.log(error.message);
    }
}
start();