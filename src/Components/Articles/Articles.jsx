

import Articles1 from "../../assets/Articles1.png";
import Articles2 from "../../assets/Articles2.png";
import Articles3 from "../../assets/Articles3.png";

const articlesData = [
  {
    id: 1,
    date: 'April 06 2023',
    author: 'Ali Tufan',
    title: 'Kenya vs Tanzania Safari: The Better African Safari Experience',
    category: 'Trips',
    image: Articles1 
  },
  {
    id: 2,
    date: 'April 07 2023',
    author: 'Emily Johnson',
    title: 'Exploring the Serengeti: A Wildlife Adventure',
    category: 'Trips',
    image: Articles2 
  },
  {
    id: 3,
    date: 'April 08 2023',
    author: 'Maxwell Rhodes',
    title: 'Into the Wild: An Unforgettable Safari Journey',
    category: 'Trips',
    image: Articles3 
  }
];

const Articles = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-[#1A2B48]">Travel Articles</h2>
          <button className="text-sm font-semibold text-gray-500 hover:text-[#5143D9] transition-colors">
            See all
          </button>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-5 h-[240px]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold text-[#1A2B48] shadow-sm uppercase tracking-wider">
                  {article.category}
                </span>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <div className="flex items-center text-[12px] text-gray-400 font-medium">
                  <span>{article.date}</span>
                  <span className="mx-2">By</span>
                  <span className="text-gray-500">{article.author}</span>
                </div>
                
                <h3 className="text-[18px] font-bold text-[#1A2B48] leading-[1.4] group-hover:text-[#5143D9] transition-colors">
                  {article.title}
                </h3>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Articles;
