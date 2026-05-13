
import image from "../../assets/image.png"; 
import { FaQuoteLeft } from 'react-icons/fa'; 

const Reviews = () => {
  
  const avatars = [
    { id: 1, pos: "top-[20%] left-[15%] md:left-[20%]", size: "w-16 h-16", opacity: "opacity-40" },
    { id: 2, pos: "top-[45%] left-[5%] md:left-[10%]", size: "w-14 h-14", opacity: "opacity-30" },
    { id: 3, pos: "bottom-[20%] left-[12%] md:left-[18%]", size: "w-16 h-16", opacity: "opacity-40" },
    { id: 4, pos: "top-[20%] right-[10%] md:right-[15%]", size: "w-16 h-16", opacity: "opacity-40" },
    { id: 5, pos: "top-[45%] right-[5%] md:right-[10%]", size: "w-14 h-14", opacity: "opacity-30" },
    { id: 6, pos: "bottom-[20%] right-[12%] md:right-[18%]", size: "w-16 h-16", opacity: "opacity-40" },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
      
    
      <div className="absolute inset-0 hidden sm:block">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`absolute ${avatar.pos} ${avatar.size} ${avatar.opacity} rounded-full overflow-hidden grayscale`}
          >
            <img 
              src={image} 
              alt="user profile" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main Review Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-[#1A2B48] mb-12">Customer Reviews</h2>

        {/* Active Central User Profile */}
        <div className="relative inline-block mb-8">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden ring-1 ring-gray-200">
            <img 
              src={image} 
              alt="Active User" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* React Icon: Quote */}
          <div className="absolute -top-1 -left-1 bg-[#FF5A32] text-white p-2.5 rounded-full shadow-lg">
            <FaQuoteLeft size={12} />
          </div>
        </div>

        {/* Review Description */}
        <div className="space-y-5">
          <h4 className="text-[#FF5A32] font-semibold text-lg italic">Excellent Service!</h4>
          <p className="text-[#4F5E71] text-lg leading-relaxed font-medium">
            "I had an amazing experience with this company. The service was 
            top-notch, and the staff was incredibly friendly. I highly 
            recommend them!"
          </p>
          
          <div className="mt-6">
            <h5 className="font-bold text-[#1A2B48] text-base">John Smith</h5>
            <p className="text-gray-400 text-[11px] uppercase tracking-[2px] mt-1 font-semibold">Traveler</p>
          </div>
        </div>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <span className="w-8 h-1.5 bg-[#1A2B48] rounded-full cursor-pointer transition-all"></span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
