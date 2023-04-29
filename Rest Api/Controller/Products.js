const getAllRoute=async(req,res)=>{
    res.status(200).json({msg:"Hello i am route"})
}
const getAllRouteTesting=async(req,res)=>{
    res.status(200).json({msg:"Hello i am testing route"})
}

module.exports={getAllRoute,getAllRouteTesting}