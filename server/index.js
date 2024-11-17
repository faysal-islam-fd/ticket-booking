import express from "express";
import { connectDB } from "./db/connectDB.js";
import 'dotenv/config.js'

const app = express()


app.listen(3000,()=>{
    connectDB()
    console.log("Server is running on port 3000");
    
})