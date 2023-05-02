const http=require("http")
const app=http.createServer((req,res)=>{
    res.end('Hello from the other side')
})

const start=()=>{
    app.listen(process.env.PORT || 5000,"127.0.0.1",()=>{
        console.log("Server is listeninig..")
    });
}
start();