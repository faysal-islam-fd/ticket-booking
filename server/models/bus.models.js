import mongoose from 'mongoose';

const busSchema = new mongoose.Schema({
  operator: {
    type: String,
    required: true
  },
  busType: {
    type: String,
    required: true,
    enum: ['AC', 'Non-AC']
  },
  totalSeats: {
    type: Number,
    required: true,
    default: 40
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  departureTime: {
    type: String,
    required: true
  },
  arrivalTime: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availableDates: [{
    type: Date,
    required: true
  }]
}, {
  timestamps: true
});

const Bus = mongoose.model('Bus', busSchema);

export default Bus