
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Check, Calendar, MapPin } from 'lucide-react';

const BookingConfirmation = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const seats = searchParams.get('seats')?.split(',') || [];
  const totalAmount = seats.length * 800;

  const handlePayment = () => {
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen text-white bg-[#121212] pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1a1a]  rounded-lg shadow-md p-6">
          <div className="text-center mb-8">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Summary</h2>
            <p className="text-gray-600">Please review your booking details</p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center pb-4 border-b">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Journey</p>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>Dhaka → Chittagong</span>
                </div>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-sm text-gray-500">Date & Time</p>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Mar 20, 2024</span>
                </div>
              </div>
            </div>

            <div className="pb-4 border-b">
              <p className="text-sm text-gray-500 mb-2">Selected Seats</p>
              <div className="flex flex-wrap gap-2">
                {seats.map((seat) => (
                  <span
                    key={seat}
                    className="px-3 py-1 bg-indigo-100 text-[#ff4b2b] rounded-full text-sm"
                  >
                    {seat}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Ticket Price</span>
                <span>৳800 × {seats.length}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>৳{totalAmount}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full btn bg-indigo-600 py-2 rounded-md"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;