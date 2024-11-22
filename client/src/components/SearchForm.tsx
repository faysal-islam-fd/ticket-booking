import { Calendar, MapPin, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchForm = () => {
    const navigate = useNavigate();
    const [searchType, setSearchType] = useState('bus');
    const [formData, setFormData] = useState({
      from: '',
      to: '',
      date: '',
    });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const params = new URLSearchParams({
        type: searchType,
        ...formData,
      });
      navigate(`/search?${params.toString()}`);
    };
  
    return (
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl mx-auto">
        <div className="flex space-x-4 mb-6">
          {['bus', 'Air'].map((type) => (
            <button
              key={type}
              onClick={() => setSearchType(type)}
              className={`px-6 py-2 rounded-full capitalize ${
                searchType === type
                  ? 'bg-[#ff4b2b] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
  
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff4b2b] focus:border-transparent"
                  placeholder="Departure City"
                  value={formData.from}
                  onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                />
              </div>
            </div>
  
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff4b2b] focus:border-transparent"
                  placeholder="Arrival City"
                  value={formData.to}
                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                />
              </div>
            </div>
  
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  required
                  className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff4b2b] focus:border-transparent"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
  
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
              <button
                type="submit"
                className="w-full bg-[#ff4b2b] text-white p-3 rounded-md hover:bg-indigo-700 flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  export default SearchForm;