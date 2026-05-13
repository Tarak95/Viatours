import { LuTicketCheck } from "react-icons/lu";
import { FaParachuteBox } from "react-icons/fa";
import { RiAwardFill } from "react-icons/ri";
import { IoDiamondOutline } from 'react-icons/io5';

const Tourz = () => {
  const features = [
    {
      id: 1,
      icon: <LuTicketCheck className="text-5xl text-[#EB662B]" />,
      title: "Ultimate flexibility",
      description: "You're in control, with free cancellation and payment options to satisfy any plan or budget."
    },
    {
      id: 2,
      icon: <FaParachuteBox className="text-5xl text-[#EB662B]" />,
      title: "Memorable experiences",
      description: "Browse and book tours and activities so incredible, you'll want to tell your friends."
    },
    {
      id: 3,
      icon: <IoDiamondOutline className="text-5xl text-[#EB662B]" />,
      title: "Quality at our core",
      description: "High-quality standards. Millions of reviews. A tourz company."
    },
    {
      id: 4,
      icon: <RiAwardFill className="text-5xl text-[#EB662B]" />,
      title: "Award-winning support",
      description: "New price? New plan? No problem. We're here to help, 24/7."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-[150px]">
        
        
        <h2 className="text-2xl md:text-[32px] font-bold text-[#05073C] mb-12 text-center md:text-left">
          Why choose Tourz
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 group"
            >
              
              <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#05073C]">
                {item.title}
              </h3>
              
              <p className="text-[#05073C] text-[15px] leading-relaxed opacity-70 max-w-[280px] md:max-w-full">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tourz;
