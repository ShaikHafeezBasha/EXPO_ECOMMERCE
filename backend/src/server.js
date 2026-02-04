import express from "express";
import {ENV} from "./config/ENV.js";

const app = express();

app.get("/api/health",(req,res)=>{
    res.status(200).json({message:"Success"});
})

app.listen(ENV.PORT,()=>{
    console.log("Server is up and running");
})