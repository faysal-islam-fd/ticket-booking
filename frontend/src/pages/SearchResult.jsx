
import { MdDoubleArrow } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import { formatTime } from "../utils/formatTime";
import { calculateTimeDifference } from "../utils/timeDifferent";


const SearchResult = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  
  const type = searchParams.get('type') || 'bus';
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const date = searchParams.get('date') || '';

    const user = true;
  const results = [
    {
      _id: '1',
      operator: 'Green Line',
      departure: '08:00',
      arrival: '14:00',
      price: 800,
      seats: 25,
      type: 'AC',
    },
    {
      _id: '2',
      operator: 'Hanif Enterprise',
      departure: '09:30',
      arrival: '15:30',
      price: 750,
      seats: 15,
      type: 'Non-AC',
    },
    {
      _id: '3',
      operator: 'Shyamoli',
      departure: '10:00',
      arrival: '16:00',
      price: 850,
      seats: 20,
      type: 'AC',
    },
  ];

  const handleSelectSeats = (result_id) => {
    if (!user) {
      // Store the intended destination in sessionStorage
      sessionStorage.setItem('redirectAfterLogin', `/booking/${result_id}?type=${type}&date=${date}`);
      navigate('/login');
      return;
    }
    navigate(`/booking/${result_id}?type=${type}&date=${date}`);
  };

  
  return (
    <div className="min-h-screen  pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Summary */}
      <div className="bg-secondary text-base-200 rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium capitalize">{type}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{from}</span>
              <span className=""><MdDoubleArrow /></span>
              <span>{to}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{formatDate(date, 'MM dd, yyyy')}</span>
            </div>
          </div>
          <button 
            onClick={() => window.history.back()}
            
          >
            Modify Search
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {results.map((result) => (
          <div key={result._id} className="bg-base-300 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{result.operator}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{result.type}</span>
                </div>
              </div>

              <div className="space-y-2 text-center">
                <div className="text-lg font-medium">{formatTime(result.departure)}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{calculateTimeDifference(result.departure,result.arrival)}</span>
                </div>
              </div>

              <div className="space-y-2 text-center">
                <div className="text-lg font-medium">{formatTime(result.arrival)}</div>
                <div className="text-sm text-gray-500">
                  {formatDate(new Date(date), 'MMM dd')}
                </div>
              </div>

              <div className="space-y-2 text-center">
                <div className="text-lg font-medium text-accent">
                  ${result.price}
                </div>
                <div className="text-sm text-gray-500">
                  {result.seats} seats left
                </div>
              </div>

              <button 
                className="bg-accent px-4 py-2 rounded-lg text-white"
                onClick={() => handleSelectSeats(result._id)}
              >
                Select Seats
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default SearchResult