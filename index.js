// import main from './mongo';

// console.log("Ankit")
// let a=0;
// (a)?console.log("Ankit"):console.log("Anand");
// console.log(this)
// when our function not return anything then undefined is come
// v8 engine run nodejs


// Global module:- which gives error without import the modules
// local module:- without error execute export:-clg

// const http = require('node:http');
// http.createServer(test()).listen(3000)


// make folder
// fstat.writeFileSync('text/file.txt');
// rename
// unlink
// delete file rmdir
// osmodules  freemem totalmam os.hostname



// console.log(main())

const event=require("events");
const eventEmmiter=new event.EventEmitter;
eventEmmiter.on("Hello",()=>{
    console.log("Hello messgae")
})
eventEmmiter.emit("Hello")
//                 OR

// const EventEmitter=require("events")

// fs.writeFile(process.argv[2],process.argv[3]);

