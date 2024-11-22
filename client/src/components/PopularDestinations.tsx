

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: "Cox's Bazar",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073',
    description: 'World\'s longest natural sea beach',
    price: '1200',
  },
  {
    name: 'Sundarbans',
    image: 'https://images.unsplash.com/photo-1588952159215-a4b39193464e?q=80&w=2069',
    description: 'World\'s largest mangrove forest',
    price: '2500',
  },
  {
    name: 'Sylhet',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070',
    description: 'Tea gardens and natural beauty',
    price: '600',
  },
  {
    name: 'Rangamati',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=2070',
    description: 'Lakes and hill tracts',
    price: '1500',
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center text-3xl font-bold my-6 text-white md:text-4xl">Popular Destinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm text-gray-200">{destination.description}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400">Starting from</p>
                    <p className="text-[#ff4b2b] font-bold">৳{destination.price}</p>
                  </div>
                  <Link to="/booking" className="text-[#ff4b2b] hover:text-[#ff3b1b] flex items-center">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;