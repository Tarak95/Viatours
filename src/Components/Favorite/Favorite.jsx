import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frome3.png";

const Favorite = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-[150px]">
        
        <div className="relative w-full min-h-[500px] rounded-[40px] overflow-hidden shadow-lg flex flex-col md:flex-row bg-[#FFF8F5]">
          
         
          <div
            className="flex-1 p-10 md:p-20 flex flex-col justify-center z-10 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${Frame1})` }}
          >
            <h2 className="text-4xl md:text-[48px] font-extrabold text-[#05073C] leading-[1.1] mb-6">
              Grab up to <span className="text-[#EB662B]">35% off</span> <br />
              on your favorite <br />
              Destination
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Limited time offer, don't miss the opportunity
            </p>
            <button className="w-fit bg-[#EB662B] text-white px-12 py-4 rounded-2xl font-bold hover:bg-[#d45520] transition-all duration-300 shadow-lg shadow-orange-100">
              Book Now
            </button>
          </div>

          
          <div className="flex-1 relative min-h-[400px] md:min-h-full overflow-hidden">
            
            
            <img
              src={Frame2}
              alt="Destination"
              className="absolute inset-0 w-full h-full object-cover"
            />

          
            <img
              src={Frame3}
              alt=""
              className="absolute inset-y-0 left-0 h-full z-20 hidden md:block"
              style={{
                // width: "60px",
                objectFit: "cover",
                objectPosition: "center",
                mixBlendMode: "normal",
              }}
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Favorite;