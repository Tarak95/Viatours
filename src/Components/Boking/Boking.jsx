
import Frame from "../../assets/Frame.png"; 

const Booking = () => {
  return (
    <section className="py-10 px-4 md:px-10">
   
      <div className="max-w-7xl mx-auto bg-[#5143D9] rounded-[30px] overflow-hidden relative min-h-[450px] flex items-center">
        
     
        <div className="absolute right-0 top-0 h-full w-full pointer-events-none opacity-30 select-none">
         
          <svg className="h-full w-full" viewBox="0 0 400 400" fill="none" xmlns="http://w3.org">
            <circle cx="450" cy="50" r="150" stroke="white" strokeWidth="1" opacity="0.2"/>
            <circle cx="450" cy="50" r="200" stroke="white" strokeWidth="1" opacity="0.2"/>
            <circle cx="450" cy="50" r="250" stroke="white" strokeWidth="1" opacity="0.2"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full p-8 md:p-16 items-center relative z-10">
          
          {/* Left Side: Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-[1.2]">
              Get 5% off your 1st <br className="hidden md:block" /> app booking
            </h2>
            <p className="text-blue-100 mb-10 text-sm md:text-base max-w-sm leading-relaxed">
              Booking's better on the app. Use promo code <br /> 
              <span className="font-bold text-white underline underline-offset-4">"TourBooking"</span> to save.
            </p>

            <div className="space-y-4">
              <p className="text-sm font-medium text-blue-50">Get a magic link sent to your email</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  
                  className="flex-1 px-6 py-4 rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all shadow-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-white text-[#5143D9] font-bold px-10 py-4 rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Single Image (Frame.png) */}
          <div className="relative flex justify-center lg:justify-end items-center h-full">
            <div className="w-full max-w-[500px] transform lg:translate-y-10 lg:translate-x-10 transition-transform hover:scale-105 duration-500">
              <img 
                src={Frame} 
                alt="App Interface Mockup" 
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
              />
            </div>
            
            {/* Bottom-Right Decoration */}
            <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-yellow-400 rounded-full blur-[80px] opacity-30"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
