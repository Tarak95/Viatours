
import t from "../../assets/t.png"; 

const Banner = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center text-white">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={t} 
          alt="Banner Background" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/20"></div>
      </div>


      <div className="relative z-10 text-center px-4 max-w-[1920px] mx-auto w-full">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight">
          Your world of joy
        </h1>
        <p className="text-sm md:text-lg mb-10 font-light opacity-90">
          Find local escapes to far-flung adventures, find what makes you happy anytime, anywhere
        </p>

       
        <div className="bg-white rounded-2xl md:rounded-full p-2 md:p-3 shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row items-center text-left">
          
          {/* Where Section */}
          <div className="flex-1 px-6 py-2 border-b md:border-b-0 md:border-r border-gray-200 w-full">
            <p className="text-[12px] font-bold text-gray-500 uppercase">Where</p>
            <input 
              type="text" 
              placeholder="Search destinations" 
              className="text-gray-800 focus:outline-none w-full bg-transparent font-medium"
            />
          </div>

          {/* When Section */}
          <div className="flex-1 px-6 py-2 border-b md:border-b-0 md:border-r border-gray-200 w-full">
            <p className="text-[12px] font-bold text-gray-500 uppercase">When</p>
            <p className="text-gray-800 font-medium cursor-pointer">February 05 - March 14</p>
          </div>

          {/* Tour Type Section */}
          <div className="flex-1 px-6 py-2 w-full">
            <p className="text-[12px] font-bold text-gray-500 uppercase">Tour Type</p>
            <p className="text-gray-800 font-medium cursor-pointer">All tour</p>
          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto bg-[#EB662B] text-white px-10 py-4 rounded-xl md:rounded-full font-bold hover:bg-[#d45520] transition duration-300 ml-0 md:ml-2 mt-4 md:mt-0">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
