import express from "express";
import {ENV} from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'

const app = express();

app.use(clerkMiddleware())

app.get("/api/health",(req,res)=>{
    res.status(200).json({message:"Success"});
})

app.listen(ENV.PORT,()=>{
    connectDB();
    console.log("Server is up and running");
})


// https://expo-ecommerce-a559.onrender.com/