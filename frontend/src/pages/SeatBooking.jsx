import { useEffect, useState } from "react";

/*
{
          id: `seat-${i + 1}`,
          number: `${String.fromCharCode(65 + Math.floor(i / seatsPerRow))}${(i % seatsPerRow) + 1}`,
          status: Math.random() > 0.3 ? 'available' : 'booked',
        }
*/

const SeatBooking = () => {
  const generateSeats = (rows, cols) => {
    let seatsDesign = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            seatsDesign.push({
                id: [i + 1, j + 1],
                number: `${String.fromCharCode(65 + i)}${j + 1}`,
                status: Math.random() > 0.3 ? 'available' : 'booked',
            });
        }
    }
    return seatsDesign;
}

    

      const [seats,setSeats] = useState(generateSeats(10,4))
    console.log(seats);
    
      return (
    <div className="min-h-screen pt-24 pb-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-base-300 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Select Your Seats</h2>

        <div className="mb-8">
          <div className="flex items-center space-x-6 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 border-2 border-gray-300 rounded"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded"></div>
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
            <span className="text-sm text-gray-500">Driver</span>
          </div>

          {/* Door */}
          <div className="absolute top-4 right-4 w-8 h-16 bg-gray-200 rounded">
            <span className="text-xs text-gray-500 rotate-90 block mt-6">Door</span>
          </div>

          {/* Seats Grid */}
          <div className="grid grid-cols-4 gap-4 mt-16">
            {seats.map((seat, index) => (
              <>
                {/* Add aisle after every 2 seats */}
                {index % 4 === 2 && <div className="w-4"></div>}
                <button
            //    {selectedSeats.length * 800} //   onClick={() => handleSeatClick(seat.id)}
                  className={`
                    w-full aspect-square rounded-lg flex items-center justify-center text-lg font-medium
                    ${seat.status === 'available' ? 'border-2 border-gray-300 hover:border-indigo-600' : ''}
                    ${seat.status === 'selected' ? 'bg-accent text-white' : ''}
                    ${seat.status === 'booked' ? 'bg-gray-400 text-white cursor-not-allowed' : ''}
                  `}
                  disabled={seat.status === 'booked'}
                >
                  {seat.number}
                </button>
                </>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            {/* <p className="text-lg">Selected Seats: {selectedSeats.length}</p> */}
            <p className="text-xl font-bold text-indigo-600">
              {/* Total: ৳{selectedSeats.length * 800} */}
            </p>
          </div>
          <button
            // onClick={handleConfirm}
            // disabled={selectedSeats.length === 0}
            // className="btn disabled:opacity-50"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SeatBooking