
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";

const Popular = () => {
  const categories = [
    { title: "Cruises", img: card1, span: "" },
    { title: "Beach Tours", img: card3, span: "md:row-span-2 h-full" },
    { title: "City Tours", img: card4, span: "md:col-span-2" },
    { title: "Museum Tour", img: card2, span: "" },
    { title: "Food", img: card5, span: "" },
    { title: "Hiking", img: card6, span: "" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
      {/* Header Part */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Popular things to do</h2>
        <button className="text-blue-600 hover:underline text-sm font-medium">See all</button>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay and Title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
              <span className="text-white font-semibold text-lg tracking-wide">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
