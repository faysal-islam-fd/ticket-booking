import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register  = async(req,res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({error: "All fields are required"})
        }
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(400).json({error: "Email already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = new User({name, email, password: hashedPassword});
        generateToken(user._id,res);
        await user.save();
        res.status(201).json({success: true,message: "User registered successfully"})
    }
    catch(err){
        console.log(err.message);
        
        res.status(500).json({error: "Internal server error"})
    }
}

export const login = async(req,res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({error: "All fields are required"})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({error: "Password is incorrect"})
        }
        generateToken(user._id,res);
        res.status(200).json({success: true, message: "User logged in successfully"})
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({error: "Internal server error"})
    }
}