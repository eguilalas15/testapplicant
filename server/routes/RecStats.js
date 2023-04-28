const express = require("express");
const router = express.Router();
const { RecStats } = require("../models");

router.get("/",async (req,res)=>{
    const listOfRecStats= await RecStats.findAll();
   
    res.json(listOfRecStats);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const recstats = await RecStats.findByPk(id);
    res.json(recstats);
  });

router.post("/",async (req,res)=>{
    const recstats = req.body;
        
    await RecStats.create(recstats);
    res.json(recstats);

});
module.exports = router;