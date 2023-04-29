const express= require("express")
const router=express.Router();
const {getAllRoute,getAllRouteTesting} =require("../Controller/Products")
router.route("/").get(getAllRoute)
router.route("/testing").get(getAllRouteTesting)
module.exports = router;