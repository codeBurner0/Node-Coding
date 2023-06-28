const {MongoClient}= require('mongodb')
const url ='mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const database='ankit';
async function connectDb(){
    let result=await client.connect();
    let db=result.db(database);
    let collection =db.collection('Employee');
    return collection;
    // let response=await collection.find({Desg:"Analyst"}).toArray();
    // console.log(response);
}
// console.log(connectDb())
connectDb().then((res)=>{
// console.log(res.find().toArray())
res.find().toArray().then((data)=>{
    console.log(data)
})
});
const main=async ()=>
{
    const conn=await connectDb();
    const data=await conn.find().toArray();
    console.log(data);

}
main();
// inside fun : use awaitoutside the fun use 
module.export= main;