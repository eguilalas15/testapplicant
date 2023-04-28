const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

 
router.post("/create",async (req,res)=>{
    const {username, password, usertype} = req.body;
    bcrypt.hash(password,10).then((hash)=>{
        Users.create({
            username: username,
            password: hash, 
            usertype: usertype
        });
        res.json("success");
    })
});

router.post("/login",async (req,res)=>{
    const {username, password} = req.body;
    const user = await Users.findOne({ where: {username: username}});

    if (!user) res.json({ error:"Error Logging IN" });

    bcrypt.compare(password, user.password).then((match)=>{
        if(!match) res.json({ error:"Error Logging IN" });
    });
     
        res.json("success");
    });
    
module.exports = router;