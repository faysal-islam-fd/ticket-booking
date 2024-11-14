
import { generateSeats } from "../lib/utils/generateSeats.js";
import Bus from "../models/bus.model.js";


export const createBus= async(req,res)=>{

    
    const {busName,row,column,from,destination,departureTime,arrivalTime,fare} = req.body;
    if(!busName || !row || !column || !from || !destination || !departureTime || !arrivalTime || !fare){
        return res.status(400).json({success:false,message:"All fields are required"})
    }
    
    try{    
        const {name,from,destination,departureTime,arrivalTime,fare,seats} = req.body;
        let newSeats = generateSeats(row,column);
        console.log(newSeats);
         const bus = new Bus({...req.body,seats: newSeats})
        await bus.save()
        res.status(201).json({success:true,message:"Bus created successfully"})
}

    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}


export const getAllBuses = async(req,res)=>{
    try{
        const buses = await Bus.find()
        res.status(200).json({success:true,buses})
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

export const getBusById = async(req,res)=>{
    try{
        const bus = await Bus.findById(req.params.id)
        if(!bus){
            return res.status(404).json({success:false,message:"Bus not found"})
        }
        res.status(200).json({success:true,bus})
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}
