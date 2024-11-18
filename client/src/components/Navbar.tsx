
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, Phone, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const user = true
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="bg-[#121212] text-stone-200 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
                <img  className='w-20 md:w-24' src='./logo.png' alt="" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className=" hover:text-[#ff4b2b]">Bus</Link>
            <Link to="/" className=" hover:text-[#ff4b2b]">Train</Link>
            <Link to="/" className=" hover:text-[#ff4b2b]">Flight</Link>
            <div className="flex items-center space-x-4">
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className="flex items-center  hover:text-[#ff4b2b]"
                  >
                    <User className="w-5 h-5 mr-1" />
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center  hover:text-[#ff4b2b]"
                  >
                    <LogOut className="w-5 h-5 mr-1" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  <User className="w-5 h-5 mr-1" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-100 hover:text-[#ff4b2b]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-stone-100 hover:text-[#ff4b2b]">Bus</Link>
            <Link to="/" className="block px-3 py-2 text-stone-100 hover:text-[#ff4b2b]">Train</Link>
            <Link to="/" className="block px-3 py-2 text-stone-100 hover:text-[#ff4b2b]">Flight</Link>
            <Link to="/" className="block px-3 py-2 text-stone-100 hover:text-[#ff4b2b]">Events</Link>
            <button className="w-full text-left px-3 py-2 text-stone-100 hover:text-[#ff4b2b]">
              Support
            </button>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-stone-100 hover:text-[#ff4b2b]"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-stone-100 hover:text-[#ff4b2b]"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-stone-100 hover:text-[#ff4b2b]"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;