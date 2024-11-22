import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register  = async(req,res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(400).json({message: "Email already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = new User({name, email, password: hashedPassword});
        generateToken(user._id,res);
        await user.save();
        res.status(201).json({success: true,message: "User registered successfully",user: {id: user._id, name: user.name,email: user.email}})
    }
    catch(err){
        console.log(err.message);
        
        res.status(500).json({message: "Internal server error"})
    }
}

export const login = async(req,res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "All fields are required"})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Password is incorrect"})
        }
        generateToken(user._id,res);
        res.status(200).json({success: true, message: "User logged in successfully",user: {id: user._id, name: user.name,email: user.email}})
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({error: "Internal server error"})
    }
}