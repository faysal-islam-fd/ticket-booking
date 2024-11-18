
import { useSearchParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Bus, Plane, Clock, MapPin, Calendar } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
    const user = true
  
  const type = searchParams.get('type') || 'bus';
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const date = searchParams.get('date') || '';

  const busResults = [
    {
      id: '1',
      operator: 'Green Line',
      departure: '08:00',
      arrival: '14:00',
      price: 800,
      seats: 25,
      type: 'AC',
    },
    {
      id: '2',
      operator: 'Hanif Enterprise',
      departure: '09:30',
      arrival: '15:30',
      price: 750,
      seats: 15,
      type: 'Non-AC',
    },
    {
      id: '3',
      operator: 'Shyamoli',
      departure: '10:00',
      arrival: '16:00',
      price: 850,
      seats: 20,
      type: 'AC',
    },
  ];

  const flightResults = [
    {
      id: '1',
      operator: 'Biman Bangladesh',
      flightNumber: 'BG-147',
      departure: '10:00',
      arrival: '11:00',
      price: 12000,
      seats: 150,
      type: 'Economy',
    },
    {
      id: '2',
      operator: 'US-Bangla',
      flightNumber: 'BS-211',
      departure: '12:30',
      arrival: '13:30',
      price: 11500,
      seats: 120,
      type: 'Economy',
    },
  ];

  const results = type === 'bus' ? busResults : flightResults;

  const handleSelect = (resultId: string) => {
    if (!user) {
      sessionStorage.setItem(
        'redirectAfterLogin',
        `/${type === 'bus' ? 'booking' : 'flight'}/${resultId}?type=${type}&date=${date}`
      );
      navigate('/login');
      return;
    }
    navigate(`/${type === 'bus' ? 'booking' : 'flight'}/${resultId}?type=${type}&date=${date}`);
  };

  const TypeIcon = type === 'bus' ? Bus : Plane;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <TypeIcon className="h-6 w-6 text-indigo-600" />
                <span className="text-lg font-medium capitalize">{type}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span>{from}</span>
                <span className="text-gray-400">→</span>
                <span>{to}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span>{format(new Date(date), 'MMM dd, yyyy')}</span>
              </div>
            </div>
            <button 
              onClick={() => window.history.back()}
              className="text-indigo-600 hover:text-indigo-800"
            >
              Modify Search
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {results.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{result.operator}</h3>
                  {type === 'flight' && (
                    <div className="text-sm text-gray-500">
                      Flight {(result as any).flightNumber}
                    </div>
                  )}
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <TypeIcon className="h-4 w-4" />
                    <span>{result.type}</span>
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <div className="text-lg font-medium">{result.departure}</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{type === 'bus' ? '6h' : '1h'}</span>
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <div className="text-lg font-medium">{result.arrival}</div>
                  <div className="text-sm text-gray-500">
                    {format(new Date(date), 'MMM dd')}
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <div className="text-lg font-medium text-indigo-600">
                    ৳{result.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.seats} seats left
                  </div>
                </div>

                <button 
                  className="btn"
                  onClick={() => handleSelect(result.id)}
                >
                  {type === 'bus' ? 'Select Seats' : 'Select'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;