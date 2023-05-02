/* 
 Node has inbuilt module called Events
    -where you can fire listen and create to there own events
*/

const EventEmitter=require("events")
const event=new EventEmitter();

event.on(("Hello"),()=>{
    console.log("Hello! Ankit")
})
event.on(("Hello"),()=>{
    console.log("Hello! Anand")
})

event.emit("Hello")

// Passig the parameters
event.on("Checking",(sc,mes)=>{
    console.log(`The stutus code ${sc} with message ${mes}`)
})

event.emit("Checking",200,"ok")

