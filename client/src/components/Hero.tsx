import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Your Journey Begins Here
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Book bus, train, and flight tickets with ease. Travel smarter, not harder.
          </p>
        </div>

        <SearchForm />

      </div>
    </div>
  );
};

export default Hero;