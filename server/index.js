const express = require('express')
const app = express()
const cors = require("cors");

app.use(express.json());
app.use(cors()) ;
const db = require('./models')


 
// routers
const applyRouter = require('./routes/Applicants')
app.use("/Applicants",applyRouter)
const recstatRouter = require('./routes/RecStats')
app.use("/RecStats",recstatRouter)
const userRouter = require('./routes/Users')
app.use("/Users",userRouter)

db.sequelize.sync().then (()=>{
    app.listen(3001,() => {
        console.log("server running on port 3001: kevin pogi")
        
    });
    
});

