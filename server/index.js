import express from "express";
import { connectDB } from "./db/connectDB.js";
import cors from 'cors'
import 'dotenv/config'
import { authRoutes } from "./routes/auth.routes.js";
import { busRoutes } from "./routes/bus.routes.js";



const app = express()
app.use(express.json())
app.use(cors())

console.log(process.env.PORT);


//routes

app.use('/api/auth',authRoutes)
app.use('/api/buses', busRoutes)
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    connectDB()
    console.log("Server is running on port",PORT);
    
})