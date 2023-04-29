const fs=require("fs")

/* 

# creating a new file
fs.writeFileSync('read.txt','welcome to node js coding')

# it overrides the new value to old value
fs.writeFileSync('read.txt','hello welcome to node js coding')

# if you wanna apend the data
fs.appendFileSync("read.txt","\nHello How are you?")


## Important:- Node js has extra datatype called buffer which is used to store binary data
    ex:- while reading a file
        const data=fs.readFileSync("read.txt")
        console.log(data)
    -to tackle this use to string method which convert binary data to string data
        const data=fs.readFileSync("read.txt").toString()
        console.log(data)
    -Read a file without buffer
        const data=fs.readFileSync("intro.txt","utf-8");
        console.log(data) 

# rename a file
    fs.renameSync("read.txt","intro.txt") --> rename a file read to intro

    ### CRUD Operations in file system

# fs.mkdirSync("FileSystem") --> make directory 

# fs.writeFileSync("FileSystem/read.txt","Hello! This is a challenge") --> make file in the directory

# Delete a file
    fs.unlinkSync("FileSystem/read.txt")

#Delete a folder
    fs.rmdirSync("FileSystem")



     ##Asynchronous Methods 

# to create a file
    fs.writeFile("read.txt","This is asynchronous method",(err)=>{
    console.log("Completed");
    console.log(err)
    })

# add data r append data 
    fs.appendFile("read.txt","\nHow are you?",(err)=>{
    console.log("Complete");
    })

# read file data
    fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
    })


    
*/




