require("dotenv").config();
const express = require("express")
const app = express();
const router = require("./router/service-rout")
const connectDb = require("./util/db");

app.use(express.json())
app.use('/api', router);

connectDb().then(()=>{
    app.listen(3000,()=>{
        console.log("server is created");
    
     });
 });