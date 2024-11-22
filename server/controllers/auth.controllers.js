import User from "../models/user.models.js";


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
        const user = new User({name, email, password});
        await user.save();
        res.status(201).json({success: true,message: "User registered successfully"})
    }
    catch(err){
        res.status(500).json({error: "Internal server error"})
    }
}