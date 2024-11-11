import SearchForm from "./SearchForm"




const Hero = () => {
  return (
    <div className=" min-h-[calc(100vh-70px)]  relative ">
        <div className="bg-cover  bg-center bg-[url('./hero-cover.jpg')] absolute inset-0 z-0">
          <div className="absolute z-0 inset-0 bg-opacity-50 bg-stone-700"></div>
        </div>

        <div className="relative z-10 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Your Journey Begins Here
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Book bus, train, and flight tickets with ease. Travel smarter, not harder.
          </p>
        </div>

        <SearchForm />
        </div>
    </div>
  )
}

export default Hero