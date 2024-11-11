import express from 'express'
import 'dotenv/config'
import { connectDB } from './db/connectDB.js'
const app = express()
const PORT = process.env.PORT || 5000



app.listen(PORT,()=>{
    connectDB()
    console.log("app running at ",PORT);
    
})