import { generateToken } from "../lib/utils/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
export const register = async (req, res) => {
    const { firstName,lastName,gender,email,password } = req.body;
    if(!firstName || !lastName || !gender || !email || !password){
        return res.status(400).json({success:false,message:"All fields are required"})
    }

    try{
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({success:false,message:"User already exists"})
        }
        
        const hashedPassword = await bcrypt.hash(password,8)
        const user = new User({...req.body,password: hashedPassword})
        await user.save()
        generateToken(user._id,res)
        res.status(201).json({success:true,message:"User registered successfully"})
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
    
}