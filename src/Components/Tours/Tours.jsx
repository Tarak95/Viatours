import { AiFillStar } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';

import tours1 from "../../assets/tours1.png"
import tours2 from "../../assets/tours2.png"
import tours3 from "../../assets/tours3.png"
import tours4 from "../../assets/tours4.png"
import tours5 from "../../assets/tours5.png"
import tours6 from "../../assets/tours6.png"
import tours7 from "../../assets/tours7.png"
import tours8 from "../../assets/tours8.png"

const Tours = () => {
  const tourData = [
    {
      id: 1,
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: "4.8",
      reviews: "243",
      duration: "4 days",
      price: "$189.25",
      image: tours1 
    },
    {
      id: 2,
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: "4.8",
      reviews: "243",
      duration: "4 days",
      price: "$225",
      image: tours2
    },
    {
      id: 3,
      location: "London, UK",
      title: "Westminster Walking Tour & Westminster Abbey Entry",
      rating: "4.8",
      reviews: "243",
      duration: "4 days",
      price: "$943",
      image: tours3
    },
    {
      id: 4,
      location: "New York, USA",
      title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
      rating: "4.8",
      reviews: "243",
      duration: "4 days",
      price: "$771",
      image: tours4
    },
    {
      id: 5,
      location: "Paris, France",
      title: "Space Center Houston Admission Ticket",
      rating: "4.8",
      reviews: "243",
      duration: "4 days",
      price: "$189.25",
      image: tours5
    },
    {
      id: 6,
      location: "New York, USA",
      title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
      rating: "4.8",
      reviews: "243",
      duration: "4 days",
      price: "$225",
      image: tours6
    },
    {
      id: 7,
      location: "London, UK",
      title: "History and Hauntings of Salem Guided Walking Tour",
      rating: "4.8",
      reviews: "243",
      duration: "4 days",
      price: "$943",
      image: tours7
    },
    {
      id: 8,
      location: "New York, USA",
      title: "Mauna Kea Summit Sunset and Stars Free Astro Photos",
      rating: "4.8",
      reviews: "243",
      duration: "4 days",
      price: "$771",
      image: tours8
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-[150px]">
        
      
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-[32px] font-bold text-[#05073C]">
            Find Popular Tours
          </h2>
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-[#EB662B] transition">
            See all
          </a>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tourData.map((tour) => (
            <div key={tour.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              
              
              <div className="relative h-[250px] overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full text-gray-700 transition">
                  <FiHeart size={18} />
                </button>
              </div>

              
              <div className="p-5">
                <p className="text-[13px] text-gray-400 mb-2">{tour.location}</p>
                <h3 className="text-[16px] font-bold text-[#05073C] mb-3 leading-snug line-clamp-2 h-[44px]">
                  {tour.title}
                </h3>
                
                <div className="flex items-center space-x-1 mb-4">
                  <AiFillStar className="text-yellow-400" />
                  <span className="text-[14px] font-bold text-[#05073C]">{tour.rating}</span>
                  <span className="text-[14px] text-gray-400">({tour.reviews})</span>
                </div>

                <hr className="border-gray-100 mb-4" />

                <div className="flex justify-between items-center">
                  <div className="text-[14px] text-gray-500">{tour.duration}</div>
                  <div className="text-[15px] text-gray-500">
                    From <span className="font-bold text-[#05073C]">{tour.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
