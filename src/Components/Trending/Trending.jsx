

import tours1 from "../../assets/tours1.png"
import tours2 from "../../assets/tours2.png"
import tours3 from "../../assets/tours3.png"
import tours4 from "../../assets/tours4.png"

const trendingData = [
  {
    id: 1,
    location: 'Paris, France',
    title: 'Centipede Tour - Guided Arizona Desert Tour by ATV',
    rating: 4.8,
    reviews: 243,
    duration: '4 days',
    price: '189.25',
    image: tours1 
  },
  {
    id: 2,
    location: 'New York, USA',
    title: 'Molokini and Turtle Town Snorkeling Adventure Aboard',
    rating: 4.8,
    reviews: 243,
    duration: '4 days',
    price: '225',
    image: tours2 
  },
  {
    id: 3,
    location: 'London, UK',
    title: 'Westminster Walking Tour & Westminster Abbey Entry',
    rating: 4.8,
    reviews: 243,
    duration: '4 days',
    price: '943',
    image: tours3 
  },
  {
    id: 4,
    location: 'New York, USA',
    title: 'All Inclusive Ultimate Circle Island Day Tour with Lunch',
    rating: 4.8,
    reviews: 243,
    duration: '4 days',
    price: '771',
    image: tours4 
  }
];

const Trending = () => {
  return (
    <section className="py-12 bg-gray-50 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Top Trending</h2>
          <button className="text-blue-600 font-medium hover:underline">See all</button>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Image Box */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                   <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600" viewBox="0 0 24 24">
                     <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 000-7.78v0z"></path>
                   </svg>
                </button>
              </div>

              {/* Content Box */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{item.location}</p>
                <h3 className="text-[14px] font-bold text-gray-900 line-clamp-2 mb-2 h-10 leading-tight">
                  {item.title}
                </h3>
                
                <div className="flex items-center text-xs text-gray-600 mb-4">
                  <span className="text-yellow-400 mr-1 text-sm">★</span>
                  <span className="font-bold text-gray-800">{item.rating}</span>
                  <span className="ml-1 text-gray-500">({item.reviews})</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{item.duration}</span>
                  <p className="text-sm font-semibold text-gray-900">
                    From <span className="text-blue-600 font-bold">${item.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
