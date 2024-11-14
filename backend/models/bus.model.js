import mongoose from 'mongoose';

const busSchema = new mongoose.Schema({
    busName: {
        type: String,
        required: true,
        trim: true
    },
    row:{
        type: Number,
        required: true
    },
    column:{
        type: Number,
        required: true
    },
    seats: [
        {
            number: String,
            status: String,
            
        }
    ],
    from:{
        type: String,
        required: true,
        trim:true
    },
    destination: {
        type: String,
        required: true,
        trim: true
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    }
})

const Bus = mongoose.model("Bus", busSchema);

export default Bus;