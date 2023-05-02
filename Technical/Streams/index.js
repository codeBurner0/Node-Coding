/* 
 Streams
    -they are objects by which you can read data from the source and write data to the destination,
    in continous fashion.
    -Exapmle: listening music and watching videos in real time on youtube   
    -it is an instance of EventEmitter and thows several events at different instance of times
        -data:this event is fired when data is avaialable.
        -end:-This event is fired when there is no more data to read.
        -error:-This event is fired when there is any errorr receiving or writing data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
*/

const { createReadStream } = require("fs");
const http=require("http")
const app=http.createServer((req,res)=>{
    /* const rstream=createReadStream(`${__dirname}/input.html`)
    rstream.on("data",(data)=>{
        res.write(data);
    })
    rstream.on("end",(data)=>{
        res.end();
    })
    rstream.on("error",(data)=>{
        res.end("file not found");
    })  
          OR    */
    const rstream=createReadStream(`${__dirname}/input.html`)
    rstream.pipe(res);
});

const start=()=>{
    app.listen(process.env.PORT || 5000,"127.0.0.1",()=>{
        console.log("Server is listeninig..")
    });
}
start();