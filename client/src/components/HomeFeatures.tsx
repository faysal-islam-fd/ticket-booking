

import { Shield, Clock, CreditCard, Phone, MapPin, Gift } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'Your security is our top priority. Book with confidence.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service for your convenience.',
  },
  {
    icon: CreditCard,
    title: 'Easy Payment',
    description: 'Multiple payment options for hassle-free transactions.',
  },
  {
    icon: MapPin,
    title: 'Wide Coverage',
    description: 'Extensive network covering all major cities.',
  },
  {
    icon: Gift,
    title: 'Loyalty Rewards',
    description: 'Earn points with every booking and get exclusive offers.',
  },
  {
    icon: Phone,
    title: 'Mobile App',
    description: 'Book tickets on the go with our mobile app.',
  },
];

const HomeFeatures = () => {
  return (
    <section className="py-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white font-bold text-3xl md:text-4xl text-center my-6">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#ff4b2b] p-3 rounded-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;