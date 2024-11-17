
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-[#ff4b2b] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 mb-8">
              Stay updated with the latest travel deals, new routes, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4b2b]"
              />
              <button type="submit" className="btn bg-[#ff4b2b] hover:bg-[#ff4423] font-semibold text-white px-4 py-2 rounded-md whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;