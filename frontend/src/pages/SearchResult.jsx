
import { MdDoubleArrow } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import { formatTime } from "../utils/formatTime";
import { calculateTimeDifference } from "../utils/timeDifferent";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthConext";


const SearchResult = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(true)
  const [searchedBus,setSearchedBus] = useState([])
  console.log(searchParams.toString());
  
  useEffect(()=>{
    (async function searchBus(){
      setIsLoading(true)
     const res = await fetch(`/v1/api/bus?${searchParams.toString()}`)
     const searchedBuses = await res.json()
     setSearchedBus(searchedBuses)
   setIsLoading(false)
     
    })()
 },[])
 
 console.log(searchedBus);
 
 
  const type = searchParams.get('type') || 'bus';
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const date = searchParams.get('date') || '';

    const {user} = useContext(AuthContext)

console.log(user);

  const handleSelectSeats = (result_id) => {
    if (!user) {
      sessionStorage.setItem('redirectAfterLogin', `/booking/${result_id}?type=${type}&date=${date}`);
      navigate('/login');
      return;
    }
    navigate(`/booking/${result_id}?type=${type}&date=${date}`);
  };
  
  if(searchedBus.success === false){ 
    return <div className=" h-screen flex justify-center items-center">
      <h1 className="text-2xl text-accent">{searchedBus.message}</h1>
    </div>
  }
  
  if(isLoading){
    return <div className=" h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg bg-accent"></span>
    </div>
  }
  
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
        {searchedBus.buses.map((result) => {
        
          return (
          <div key={result._id} className="bg-base-300 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{result.busName}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{result.from}</span>
                </div>
              </div>

              <div className="space-y-2 text-center">
                <div className="text-lg font-medium">{result.departureTime}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{calculateTimeDifference(result.departureTime,result.arrivalTime)}</span>
                </div>
              </div>

              <div className="space-y-2 text-center">
                <div className="text-lg font-medium">{result.arrivalTime}</div>
                <div className="text-sm text-gray-500">
                  {formatDate(new Date(date))}
                </div>
              </div>

              <div className="space-y-2 text-center">
                <div className="text-lg font-medium text-accent">
                  ${result.fare}
                </div>
                <div className="text-sm text-gray-500">
                  {result.seats.filter(seat=> seat.status==="available").length} seats left
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
          )
          
        })}
      </div>
    </div>
  </div>
  )
}

export default SearchResult