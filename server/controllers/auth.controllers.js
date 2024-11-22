import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

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
        await user.save();
        res.status(201).json({success: true,message: "User registered successfully"})
    }
    catch(err){
        console.log(err.message);
        
        res.status(500).json({error: "Internal server error"})
    }
}