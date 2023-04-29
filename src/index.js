const express=require('express')
// const app=express();
// const port=3000;
// // console.log(__dirname);
// // app.use(express.static('C:\Users\Ankit Anand\Desktop\Node Coding\public'))
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '../public/index.html');
//     }).listen(3000,"127.0.0.1",()=>{
//         console.log("listen to the port 8000")
//     })
//     server.js
// const express = require('express');
// const path = require('path');
// const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);