const http=require("http")
const app=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end('Hello from the Home side')
    }else if(req.url=="/About"){
        res.end('Hello from the About side')
    }else{
        res.writeHead(404,{"constent-type":"text/html"}); //to tell browser that throw this error if page not found else it give status coide 200even when page dosn't exits
        res.end("<h1> 404 error </h1>")
    }
    
})

const start=()=>{
    app.listen(process.env.PORT || 5000,"127.0.0.1",()=>{
        console.log("Server is listeninig..")
    });
}
start();