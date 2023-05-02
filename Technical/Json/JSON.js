/* 
 JSON-JavaScript Object Notation
    -It is a light weight format for storing and transporting data.
    -it is used when data send from server to web page

    Object to JSON :- JSON.Stringify(object_name)
    JSON to Object :- JSON.parse(json_var)

*/

const data={
    name:"Ankit Anand",
    age:45,
    class:"B.Tech. Sec-D"
}
// const Jsondata=JSON.stringify(data);
// console.log(Jsondata);
// const JsonObjdata=JSON.parse(Jsondata);
// console.log(JsonObjdata);

module.exports=data
