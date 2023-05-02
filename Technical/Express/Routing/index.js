const express=require("express")
const app=express()
const fs=require("fs")
const data=fs.readFileSync(`${__dirname}/input.html`,"utf-8")
app.get("/",(req,res)=>{
    res.send(data);
})
app.get("/About",(req,res)=>{
    res.status(200).send("<h1>This is About</h1>");
})
app.get("/Contact",(req,res)=>{
    res.send("This is Contact");
});

app.listen(5000,"127.0.0.1",()=>{
    console.log("Listening to the port 5000");
})

// res.send transfer one line at a time
// res.write tranfer whole data and wait for data to stop this we use res.end after res.write