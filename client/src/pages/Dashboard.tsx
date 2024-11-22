


import React from 'react';
import { useAuth } from '../context/AuthConext';
import { Ticket } from '../types';
import { Calendar, MapPin } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [tickets] = React.useState<Ticket[]>([
    {
      id: '1',
      type: 'bus',
      from: 'Dhaka',
      to: 'Chittagong',
      date: '2024-03-20',
      price: 800,
      status: 'active',
    },
    {
      id: '2',
      type: 'train',
      from: 'Dhaka',
      to: 'Sylhet',
      date: '2024-03-25',
      price: 600,
      status: 'completed',
    },
  ]);

  return (
    <div className="min-h-screen text-white bg-[#121212] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-stone-100 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-stone-100">{user?.email}</p>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Your Tickets</h2>
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm font-medium">
                        {ticket.type.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-md text-sm font-medium ${
                        ticket.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span>{ticket.from}</span>
                      <span>→</span>
                      <span>{ticket.to}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(ticket.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-[#ff4b2b]">৳{ticket.price}</p>
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

export default Dashboard;