


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {  Car } from 'lucide-react';

interface Seat {
  id: string;
  number: string;
  status: 'available' | 'selected' | 'booked';
}

const SeatSelection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
 
  const generateSeats = (): Seat[] => {
    const totalRows = 10;
    const seatsPerRow = 4;
    return Array.from({ length: totalRows * seatsPerRow }, (_, i) => ({
      id: `seat-${i + 1}`,
      number: `${String.fromCharCode(65 + Math.floor(i / seatsPerRow))}${(i % seatsPerRow) + 1}`,
      status: Math.random() > 0.3 ? 'available' : 'booked',
    }));
  };

  const [seats, setSeats] = useState<Seat[]>(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatId: string) => {
    const seat = seats.find(s => s.id === seatId);
    if (seat?.status === 'booked') return;

    setSeats(seats.map(s => 
      s.id === seatId
        ? { ...s, status: s.status === 'available' ? 'selected' : 'available' }
        : s
    ));

    setSelectedSeats(prev => 
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleConfirm = () => {
    if (selectedSeats.length === 0) return;
    navigate(`/booking/confirm/${id}?seats=${selectedSeats.join(',')}`);
  };

  return (
    <div className="min-h-screen bg-[#121212] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1a1a] text-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Select Your Seats</h2>

          <div className="mb-8">
            <div className="flex items-center space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 border-2 border-gray-300 rounded"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
                <span>Booked</span>
              </div>
            </div>
          </div>

          {/* Bus Layout */}
          <div className="mb-8 relative p-8 border-2 border-gray-200 rounded-lg">
            {/* Driver's Seat */}
            <div className="absolute top-4 left-4">
              <Car className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-500">Driver</span>
            </div>

            {/* Door */}
            <div className="absolute top-4 right-4 w-8 h-16 bg-gray-200 rounded">
              <span className="text-xs text-gray-500 rotate-90 block mt-6">Door</span>
            </div>

            {/* Seats Grid */}
            <div className="grid grid-cols-4 gap-4 mt-16">
              {seats.map((seat, index) => (
                <React.Fragment key={seat.id}>
                  {/* Add aisle after every 2 seats */}
                  {index % 4 === 2 && <div className="w-4"></div>}
                  <button
                    onClick={() => handleSeatClick(seat.id)}
                    className={`
                      w-full aspect-square rounded-lg flex items-center justify-center text-lg font-medium
                      ${seat.status === 'available' ? 'border-2 border-gray-300 hover:border-indigo-600' : ''}
                      ${seat.status === 'selected' ? 'bg-indigo-600 text-white' : ''}
                      ${seat.status === 'booked' ? 'bg-gray-400 text-white cursor-not-allowed' : ''}
                    `}
                    disabled={seat.status === 'booked'}
                  >
                    {seat.number}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg">Selected Seats: {selectedSeats.length}</p>
              <p className="text-xl font-bold text-indigo-600">
                Total: ৳{selectedSeats.length * 800}
              </p>
            </div>
            <button
              onClick={handleConfirm}
              disabled={selectedSeats.length === 0}
              className="btn disabled:opacity-50 px-4 py-2 bg-indigo-600 rounded-md font-semibold"
            >
              Continue to Payment 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;