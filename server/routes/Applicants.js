const express = require("express");
const router = express.Router();
const { Applicants } = require("../models");

router.get("/",async (req,res)=>{
    const listOfApplies = await Applicants.findAll();
   
    res.json(listOfApplies);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const applicants = await Applicants.findByPk(id);
    res.json(applicants);
  });

router.post("/",async (req,res)=>{
    const applicants = req.body;
        
    await Applicants.create(applicants);
    res.json(applicants);

});
module.exports = router;