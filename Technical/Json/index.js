const data=require("./JSON")
const fs=require("fs")
const Jsondata=JSON.stringify(data)
console.log(Jsondata)
fs.writeFile("Hello.txt",Jsondata,()=>{
    console.log("Done")
})

fs.readFile("./Hello.txt","utf-8",(err,data)=>{
    console.log(JSON.parse(data))
})