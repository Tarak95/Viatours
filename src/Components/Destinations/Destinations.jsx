import dn1 from "../../assets/dn1.png"
import dn2 from "../../assets/dn2.png"
import dn3 from "../../assets/dn3.png"
import dn4 from "../../assets/dn4.png"
import dn5 from "../../assets/dn5.png"
import dn6 from "../../assets/dn6.png"
import dn7 from "../../assets/dn7.png"
import dn8 from "../../assets/dn8.png"

const Destinations = () => {
  
  const destinations = [
    { id: 1, name: "Paris", tours: "100+ Tours", image: dn1 },
    { id: 2, name: "Singapore", tours: "300+ Tours", image: dn2 },
    { id: 3, name: "Roma", tours: "400+ Tours", image: dn3 },
    { id: 4, name: "Bangkok", tours: "100+ Tours", image: dn4 },
    { id: 5, name: "Bali", tours: "600+ Tours", image: dn5 },
    { id: 6, name: "Phuket", tours: "200+ Tours", image: dn6 },
    { id: 7, name: "Tokyo", tours: "700+ Tours", image: dn7 },
    { id: 8, name: "Cappadocia", tours: "900+ Tours", image: dn8 },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-[150px]">
        
       
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-[32px] font-bold text-[#05073C]">
            Trending destinations
          </h2>
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-[#EB662B] transition border-b border-transparent hover:border-[#EB662B]">
            See all
          </a>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="flex flex-col items-center group cursor-pointer">
              
             
              <div className="relative w-24 h-24 md:w-[140px] md:h-[140px] mb-4 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center border-2 border-transparent group-hover:border-[#EB662B] transition-all duration-300 shadow-sm">
                 <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
              </div>
              
            
              <div className="text-center">
                <h4 className="font-bold text-[#05073C] text-[16px] mb-1 leading-tight group-hover:text-[#EB662B] transition">
                  {dest.name}
                </h4>
                <p className="text-[13px] text-gray-500">
                  {dest.tours}
                </p>
              </div>
            </div>
          ))}
        </div>

      
        <div className="flex justify-center space-x-2 mt-12">
          <span className="w-6 h-1.5 bg-[#05073C] rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
