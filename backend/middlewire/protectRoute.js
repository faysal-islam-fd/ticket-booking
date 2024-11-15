import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'


const protectRoute =async(req,res,next)=>{
    
    
    try{
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({success:false,message:"Unauthorized"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({success:false,message:"Unauthorized"})
        }

        const user = await User.findById(decoded.id)
        if(!user){
            return res.status(401).json({success:false,message:"User not found"})
        }
        req.user = user
        next()
    }
    catch(error){
        console.log("error in protect ROute", error);
        
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

export {protectRoute}