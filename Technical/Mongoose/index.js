/* 
 Mongoose is used to connect node and mongodb
    -It is ODM(object data modeling) library for mongodb and nodejs 
    -it map js objects with documents
    -It provides the abtraction layer over the mongo by using mongo driver
 Mongoose schema 
    -It define the structure of collection.

*/
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const Schema=mongoose.Schema;
mongoose.connect('mongodb//localhost:27017/Test',{useNewUrlparser:true})

const StudentSchema={
    name:String,
    RollNo:Number,
    Subject:String,
}

const Student= new mongoose.model("Student",StudentSchema);


app.listen(3000,"127.0.0.1",()=>{
    console.log("Connection succesful")
})