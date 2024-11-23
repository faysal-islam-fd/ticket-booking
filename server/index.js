import express from "express";
import { connectDB } from "./db/connectDB.js";
import cors from 'cors'
import 'dotenv/config'
import { authRoutes } from "./routes/auth.routes.js";
import { busRoutes } from "./routes/bus.routes.js";
import path from 'path'


const app = express()
app.use(express.json())
app.use(cors())

const __dirname = path.resolve()

//routes

app.use('/api/auth',authRoutes)
app.use('/api/buses', busRoutes)

app.use(express.static(path.join(__dirname, '/client/dist')))
 app.get("*", (req, res) => {
       res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
 })


const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    connectDB()
    console.log("Server is running on port",PORT);
    
})