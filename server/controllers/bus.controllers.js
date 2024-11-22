import Bus from "../models/bus.models.js";


export const getAllBuses = async(req,res)=>{
    try {
        const { from, to, date } = req.query;
        if(!from){
            return res.status(400).json({message: "From is required"})
        }
        if(!to){
            return res.status(400).json({message: "To is required"})
        }
        if(!date){
            return res.status(400).json({message: "Date is required"})
        }
        const query = {};
        
        if (from) query.from = from;
        if (to) query.to = to;
        if (date) {
          query.availableDates = {
            $elemMatch: {
              $gte: new Date(date),
              $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1))
            }
          };
        }
    
        const buses = await Bus.find(query);
        res.json({ success: true, buses });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const getBus = async(req,res)=>{
    try {
        const bus = await Bus.findById(req.params.id);
        if (!bus) {
          return res.status(404).json({ message: "Bus not found" });
        }
        res.json({ success: true, bus });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const createBus = async(req,res)=>{
    try {
        const bus = new Bus(req.body);
        await bus.save();
        res.status(201).json({ success: true, bus });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const deleteBus = async(req,res)=>{
    try {
        const bus = await Bus.findById(req.params.id);
        if (!bus) {
          return res.status(404).json({ message: "Bus not found" });
        }
        await bus.remove();
        res.json({ success: true, message: "Bus deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

