const http=require("http");
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Hello from the About")
    }else if(req.url==="/About"){
        res.end("Hello from the About")
    }else if(req.url==="/Service"){
        res.end("Hello from the service")
    }
}).listen(3000,"127.0.0.1",()=>{
    console.log("listen to the port 8000")
})

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'application/json'})
//     res.write(JSON.stringify({name:'John'}));
//     console.log(process)
// }).listen(8000)