const express =require("express")
const app=express();
const path=require("path")

const statiath=path.join(__dirname,"../public")
console.log(statiath)
app.use(express.static(statiath))


app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(5000,"127.0.0.1",()=>{
    console.log("Listening...")
})