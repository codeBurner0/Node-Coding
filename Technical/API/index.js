
const http=require('http')
const fs=require('fs')

const app=http.createServer((req,res)=>{
    
    // const obj=JSON.parse(data)
    if(req.url=="/"){
        res.end("HelLo! This is Home")
    }else if(req.url=="/About"){
        res.end("HelLo! This is About")
    }else if(req.url=="/Data"){
        fs.readFile(`${__dirname}/data.json`,"utf-8",(err,data)=>{
            console.log(data)
            res.end(data)
        });
    }else{
        res.end("404 Erroe")
    }
})

const start=()=>{
    app.listen(3000,"127.0.0.1",()=>{
        console.log("Server is started")
    })
}
start()