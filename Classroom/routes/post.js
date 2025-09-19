const express=require("express");
const router=express.Router();

//POST Routes..
//Index
router.get("/",(req,res)=>{
    res.send("post for users");
})

//Show
router.get("/:id",(req,res)=>{
    res.send("post for show posts");
})

//Post
router.get("/",(req,res)=>{
    res.send("POST for posts");
})

//Delete
router.delete("/:id",(req,res)=>{
    res.send("delete for show posts");
})

module.exports=router;