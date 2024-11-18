
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

<Facebook />
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">TravelEase</h3>
            <p className="text-sm mb-4">
              Your trusted partner for hassle-free travel bookings across Bangladesh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-white">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/bus" className="text-sm hover:text-white">Bus Tickets</Link>
              </li>
              <li>
                <Link to="/train" className="text-sm hover:text-white">Train Tickets</Link>
              </li>
              <li>
                <Link to="/flight" className="text-sm hover:text-white">Flight Tickets</Link>
              </li>
              <li>
                <Link to="/hotels" className="text-sm hover:text-white">Hotel Booking</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@travelease.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+880 1234-567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Travel Tower, Dhaka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} TravelEase. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm hover:text-white">Terms</Link>
              <Link to="/privacy" className="text-sm hover:text-white">Privacy</Link>
              <Link to="/cookies" className="text-sm hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;