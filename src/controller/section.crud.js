const express = require('express');
const router = express.Router();
const Section = require("../model/section.model")

router.post("", async(req,res)=>{
    try{
        const section = await Section.create(req.body);
        return res.status(201).send(section);
    }catch(err){
        console.log(err.message)
        return res.status(500).send(err.message)
    }
})

router.get("", async(req,res)=>{
    try{
        const section = await Section.find().lean().exec();
        return res.send(section);
    }catch(err){
        console.log(err.message)
        return res.status(500).send(err.message)
    }
})




module.exports = router;