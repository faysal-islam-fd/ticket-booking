import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const SeatBooking = () => {
  
      const [bus,setBus] = useState(null) 
      const params = useParams()
      const [loading, setLoading] = useState(false);
  
      const [selectedSeats, setSelectedSeats] = useState([]);
      function handleSelectSeats(seatNumber) {
        if(selectedSeats.length>4){
          toast.error("You can't select more than 4 seats")
          return
        }

        if (selectedSeats.includes(seatNumber)) {
          
          setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
          setSelectedSeats([...selectedSeats, seatNumber]);
        }

        bookedSeat(seatNumber)

      }

      async function bookedSeat(seatNumber) {
        setLoading(true)
        const res = await fetch(`/v1/api/bus/${params.id}/seat-selecting`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ seatNumber }),
        });
        const data = await res.json()
        console.log(data.data);
        
      setBus(data.data)
        setLoading(false)
        
      }
      
      useEffect(()=>{
        (async function fetchBus(){
          const res = await fetch(`/v1/api/bus/${params.id}`)
          const data = await res.json()
          setBus(data.bus)
        })()
      },[ params.id])

      if(!bus){
        return <div className=" h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg bg-accent"></span>
        </div>
      }
      
      return (
    <div className="max-h-screen pt-24 pb-12">
      <Toaster   position="top-center"
  reverseOrder={false}
 />
    <div className="w-3/6 mx-auto px-2 md:px-4">
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
        <div className="mb-8 relative  p-2 border-2 border-gray-200 rounded-lg">
          {/* Driver's Seat */}
          <div className="absolute top-4 left-4">
            <span className="text-sm text-gray-500">Driver</span>
          </div>

          {/* Door */}
          <div className="absolute top-4 right-4 w-8 h-16 bg-gray-200 rounded">
            <span className="text-xs text-gray-500 rotate-90 block mt-6">Door</span>
          </div>

          {/* Seats Grid */}
          <div className="grid grid-cols-5 gap-4 w-3/6 mx-auto mt-10">
            {bus.seats.map((seat, index) => (
              <React.Fragment key={index}>
                {/* Add aisle after every 2 seats */}
                {index % 4 === 2 && <div className="w-4"></div>}
                {
                  loading ? 
                  <div className="flex w-52 flex-col gap-4">
                   
                   <div className="skeleton   w-full aspect-square rounded-lg flex items-center justify-center text-lg font-medium
                   "></div>
                </div>
                    :
                  <button
                onClick={()=>handleSelectSeats(seat.number)}
            //    {selectedSeats.length * 800} //   onClick={() => handleSeatClick(seat.id)}
                  className={`
                    w-full aspect-square rounded-lg flex items-center justify-center text-lg font-medium
                    ${seat.status === 'available' ? 'border-2 border-gray-300 hover:border-accent' : ''}
                    ${seat.status === 'selected' ? 'bg-accent text-white' : ''}
                    ${seat.status === 'booked' ? 'bg-gray-400 text-white cursor-not-allowed' : ''}
                  `}
                  disabled={seat.status === 'booked'}
                >
                  {seat.number}
                </button>}

                </React.Fragment>
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
          className="bg-accent text-white px-6 py-2 rounded-lg"
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