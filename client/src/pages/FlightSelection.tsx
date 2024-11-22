
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Plane, Clock, Calendar } from 'lucide-react';

const FlightSelection = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const date = searchParams.get('date') || '';

  const seatClasses = [
    { id: 'economy', name: 'Economy', price: 12000, available: 120 },
    { id: 'business', name: 'Business', price: 35000, available: 24 },
    { id: 'first', name: 'First Class', price: 75000, available: 8 },
  ];

  const handleSelectClass = (classId: string, price: number) => {
    navigate(`/booking/confirm/${id}?type=flight&class=${classId}&price=${price}&date=${date}`);
  };

  return (
    <div className="min-h-screen bg-[#121212] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Select Your Class</h2>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Plane className="h-5 w-5 mr-2" />
                <span>BG-147</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>2h 30m</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {seatClasses.map((seatClass) => (
              <div
                key={seatClass.id}
                className="border rounded-lg p-6 hover:border-indigo-600 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{seatClass.name}</h3>
                    <p className="text-gray-600">
                      {seatClass.available} seats available
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-500">
                      {seatClass.id === 'economy' && (
                        <>
                          <li>Standard legroom</li>
                          <li>Regular meal service</li>
                          <li>1 piece checked baggage</li>
                        </>
                      )}
                      {seatClass.id === 'business' && (
                        <>
                          <li>Extra legroom</li>
                          <li>Premium meal service</li>
                          <li>2 pieces checked baggage</li>
                          <li>Priority boarding</li>
                        </>
                      )}
                      {seatClass.id === 'first' && (
                        <>
                          <li>Luxury seating</li>
                          <li>Gourmet dining</li>
                          <li>3 pieces checked baggage</li>
                          <li>Private suite</li>
                          <li>Lounge access</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-600 mb-4">
                      ৳{seatClass.price.toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleSelectClass(seatClass.id, seatClass.price)}
                      className="btn"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSelection;