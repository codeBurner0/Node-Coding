const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send("This is Home")
})
app.get('/About',(req,res)=>{
    res.send("This is About")
})

app.listen(5000,()=>{
    console.log("Listening...")
})

