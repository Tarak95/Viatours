import React, { useState } from "react";
import {
  IoCalendarOutline,
  IoChevronDown,
  IoStar,
  IoFilter,
  IoClose,
} from "react-icons/io5";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Tour Data
  const tourData = [
    {
      id: 1,
      tag: "20% OFF",
      tagColor: "bg-orange-500",
      image: image1,
      title:
        "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
      rating: "4.8",
      reviews: "218",
      duration: "2 Days 1 Night",
      price: "114",
    },
    {
      id: 2,
      tag: null,
      image: image2,
      title:
        "James Bond Island Luxury Tour with Speedboat and Lunch",
      rating: "4.7",
      reviews: "180",
      duration: "1 Day",
      price: "95",
    },
    {
      id: 3,
      tag: "FEATURED",
      tagColor: "bg-blue-600",
      image: image3,
      title:
        "Phuket City Cultural Tour with Local Guide",
      rating: "4.9",
      reviews: "340",
      duration: "5 Hours",
      price: "80",
    },
    {
      id: 4,
      tag: null,
      image: image4,
      title:
        "Coral Island Snorkeling Experience with Boat Ride",
      rating: "4.6",
      reviews: "150",
      duration: "8 Hours",
      price: "70",
    },
    {
      id: 5,
      tag: "BEST SELLER",
      tagColor: "bg-green-600",
      image: image5,
      title:
        "Thailand Food Tour with Street Food Tasting",
      rating: "5.0",
      reviews: "420",
      duration: "3 Hours",
      price: "55",
    },
    {
      id: 6,
      tag: null,
      image: image6,
      title:
        "Sunset Cruise Tour in Phuket with Dinner",
      rating: "4.8",
      reviews: "260",
      duration: "1 Night",
      price: "140",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Breadcrumb + Title */}
        <div className="mb-6">
          <p className="text-xs text-slate-400 mb-1">
            Home &gt; Tours &gt; Phuket
          </p>

          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Explore all things to do in Phuket
            </h1>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium shadow-sm"
            >
              <IoFilter size={16} />
              Filter
            </button>
          </div>
        </div>

        {/* Result Count + Sort */}
        <div className="flex justify-between items-center mb-6 text-sm border-b border-slate-200 pb-4">
          <p className="text-slate-500">
            <span className="font-semibold text-slate-700">1,952</span>{" "}
            results
          </p>

          <div className="flex items-center gap-1 text-slate-600 cursor-pointer">
            <span>
              Sort by:{" "}
              <strong className="text-slate-900 font-medium">
                Featured
              </strong>
            </span>

            <IoChevronDown size={16} />
          </div>
        </div>

        {/* Layout */}
        <div className="flex gap-8 items-start">
          
          {/* Sidebar */}
          <aside
            className={`
              fixed inset-y-0 left-0 z-50 w-72 bg-white p-6 shadow-xl transform transition-transform duration-300 ease-in-out 
              lg:translate-x-0 lg:static lg:w-64 lg:p-0 lg:shadow-none lg:bg-transparent
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            {/* Mobile Close */}
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <h2 className="font-bold text-lg">Filters</h2>

              <button onClick={() => setIsSidebarOpen(false)}>
                <IoClose size={20} />
              </button>
            </div>

            {/* Date Box */}
            <div className="bg-orange-500 rounded-xl p-4 text-white shadow-md mb-6">
              <label className="text-xs font-medium block mb-2 opacity-90">
                When are you traveling?
              </label>

              <div className="bg-white text-slate-700 rounded-lg p-2.5 flex items-center gap-2 cursor-pointer shadow-inner">
                <IoCalendarOutline
                  size={18}
                  className="text-orange-500 shrink-0"
                />

                <span className="text-xs font-semibold">
                  February 23 - March 14
                </span>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-6 shadow-sm">
              <div>
                <h3 className="font-semibold text-sm mb-3 text-slate-900">
                  Tour Type
                </h3>

                <div className="space-y-2.5">
                  {[
                    "Nature Tours",
                    "Adventure Tours",
                    "Cultural Tours",
                    "Food Tours",
                    "City Tours",
                    "Cruises Tours",
                  ].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-orange-500 focus:ring-orange-500 w-4 h-4"
                      />

                      <span>{type}</span>
                    </label>
                  ))}
                </div>

                <button className="text-xs text-orange-500 font-semibold mt-3 hover:underline">
                  See More
                </button>
              </div>

              {[
                "Filter Price",
                "Duration",
                "Language",
                "Rating",
                "Specials",
              ].map((filterName) => (
                <div
                  key={filterName}
                  className="border-t border-slate-100 pt-4 flex justify-between items-center text-sm font-semibold text-slate-800 cursor-pointer"
                >
                  <span>{filterName}</span>

                  <IoChevronDown
                    size={16}
                    className="text-slate-400"
                  />
                </div>
              ))}
            </div>
          </aside>

          {/* Backdrop */}
          {isSidebarOpen && (
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            />
          )}

          {/* Card Section */}
          <main className="flex-1 w-full space-y-4">
            {tourData.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row h-auto sm:h-52"
              >
                {/* Image */}
                <div className="relative w-full sm:w-52 md:w-60 h-48 sm:h-full shrink-0 bg-slate-100">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />

                  {tour.tag && (
                    <span
                      className={`absolute top-3 left-3 text-[10px] font-bold text-white px-2 py-1 rounded-md tracking-wider shadow-sm ${tour.tagColor}`}
                    >
                      {tour.tag}
                    </span>
                  )}

                  {/* Heart Button */}
                  <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors text-xs">
                    ❤
                  </button>
                </div>

                {/* Info */}
                <div className="p-4 md:p-5 flex-1 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-slate-100">
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                      Pattaya, Thailand
                    </span>

                    <h2 className="font-bold text-sm md:text-base text-slate-800 leading-snug mt-1 hover:text-orange-500 cursor-pointer line-clamp-2">
                      {tour.title}
                    </h2>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <IoStar key={i} size={13} />
                        ))}
                      </div>

                      <span className="text-xs font-bold text-slate-700 ml-1">
                        {tour.rating}
                      </span>

                      <span className="text-xs text-slate-400">
                        ({tour.reviews})
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mt-3 line-clamp-2">
                      The Phi Phi archipelago is a must-visit while in
                      Phuket, and this speed boat trip offers an amazing
                      experience.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex gap-4 text-[11px] font-medium text-slate-500 mt-3 sm:mt-0 pt-3 border-t border-slate-50">
                    <span className="text-emerald-600">
                      Best Price Guarantee
                    </span>

                    <span className="text-blue-600">
                      Free Cancellation
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="p-4 md:p-5 w-full sm:w-40 md:w-44 shrink-0 flex flex-col justify-center items-start sm:items-center bg-slate-50/50 sm:bg-transparent border-t sm:border-t-0 border-slate-100">
                  <span className="text-xs text-slate-400 font-medium mb-0.5">
                    {tour.duration}
                  </span>

                  <div className="flex flex-col sm:items-center mb-4">
                    <span className="text-[10px] text-slate-400 line-through font-medium leading-none">
                      $120
                    </span>

                    <span className="text-lg font-extrabold text-slate-900">
                      <span className="text-xs font-normal text-slate-500 mr-0.5">
                        From
                      </span>
                      ${tour.price}
                    </span>
                  </div>

                  <button className="w-full text-center bg-transparent hover:bg-orange-500 text-orange-500 hover:text-white border border-orange-500/30 hover:border-orange-500 transition-all text-xs font-bold py-2.5 px-4 rounded-lg shadow-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex flex-col items-center gap-2 pt-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-sm">
                  1
                </button>

                <button className="w-7 h-7 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-200">
                  2
                </button>

                <button className="w-7 h-7 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-200">
                  3
                </button>

                <button className="w-7 h-7 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-200">
                  4
                </button>

                <span className="text-slate-400 px-1">...</span>

                <button className="w-7 h-7 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-200">
                  20
                </button>
              </div>

              <p className="text-[11px] text-slate-400 font-medium mt-1">
                Showing results 1-10 of 1,952
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Main;