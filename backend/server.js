import express, { urlencoded } from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './db/connectDB.js'
import { authRouter } from './routes/auth.routes.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(urlencoded({extended:true}))

app.use("/v1/api/auth",authRouter)

app.listen(PORT,()=>{
    connectDB()
    console.log("app running at ",PORT);
    
})