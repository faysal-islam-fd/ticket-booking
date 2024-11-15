
import { generateSeats } from "../lib/utils/generateSeats.js";
import Bus from "../models/bus.model.js";


export const createBus= async(req,res)=>{

    
    const {busName,row,column,from,destination,departureTime,arrivalTime,fare} = req.body;
    if(!busName || !row || !column || !from || !destination || !departureTime || !arrivalTime || !fare){
        return res.status(400).json({success:false,message:"All fields are required"})
    }
    
    try{    
        let newSeats = generateSeats(row,column);
      
         const bus = new Bus({...req.body,seats: newSeats})
        await bus.save()
        res.status(201).json({success:true,message:"Bus created successfully"})
}

    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}
export const seatSelecting = async(req,res)=>{
   
    const bus = await Bus.findOne({ _id: req.params.id, "seats.number": req.body.seatNumber });

    if (bus) {
        // Find the seat based on seat number
        const seat = bus.seats.find(seat => seat.number === req.body.seatNumber);
    
        // Toggle the status
        const newStatus = seat.status === "selected" ? "available" : "selected";
    
        // Update the status in the database
        const updatedBus = await Bus.findOneAndUpdate(
            { _id: req.params.id, "seats.number": req.body.seatNumber },
            { $set: { "seats.$.status": newStatus } },
            { new: true }
        );
       return res.status(200).json({success:true,message:"Seat booked successfully",data : updatedBus})
    }
    else{
        return res.status(404).json({success:false,message:"Seat not found"})
    }
    
    
   
}

export const getAllBuses = async(req,res)=>{

    
    
    if(Object.keys(req.query).length===0){
    
    try{
        const buses = await Bus.find()
        res.status(200).json({success:true,buses})
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

else{
    const query = req.query;
    // console.log(query);
    
   
    try {
        const query = req.query;
        if (query.to) {
            query.from = query.from.charAt(0).toUpperCase() + query.from.slice(1);
           
            query.destination = query.to.charAt(0).toUpperCase() + query.to.slice(1);
            delete query.to
            delete query.type
            delete query.date
        }
        const buses = await Bus.find(query);       
        if (!buses.length) {
            return res.status(404).json({ success: false, message: "Bus not found" });
        }
        res.status(200).json({ success: true, buses });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
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


