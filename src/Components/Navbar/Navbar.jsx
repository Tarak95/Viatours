import { useState } from 'react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div 
        className="flex items-center justify-between mx-auto px-4 md:px-[150px]"
        style={{ 
          maxWidth: '1920px', 
          height: '88px'
        }}
      >
        
        <div className="flex items-center space-x-6 lg:space-x-10 flex-1">
          
          
          <div className="flex items-center space-x-2 cursor-pointer shrink-0">
            <div style={{ color: '#EB662B' }}>
           
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
              </svg>
            </div>
            <span 
              className="text-xl md:text-2xl font-bold tracking-tight" 
              style={{ color: '#EB662B' }}
            >
              viatours
            </span>
          </div>

          
          <div className="hidden lg:block relative w-full max-w-[350px]">
            <input
              type="text"
              placeholder="Search destinations or activities"
              className="w-full py-2.5 px-5 bg-[#F5F5F5] border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-gray-300 text-sm placeholder:text-gray-400"
            />
          </div>
        </div>

      
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold" style={{ color: '#05073C' }}>
          <a href="#" className="hover:text-[#EB662B] transition">Destinations</a>
          <a href="#" className="hover:text-[#EB662B] transition">Activities</a>
          <div className="cursor-pointer">USD</div>
          <a href="#" className="hover:text-[#EB662B] transition">Sign up</a>
          <button 
            className="text-white px-8 py-2.5 rounded-full font-bold hover:opacity-90 transition duration-300"
            style={{ backgroundColor: '#EB662B', border: '1px solid #EB662B' }}
          >
            Log in
          </button>
        </div>

        
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#05073C]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col space-y-4 font-semibold shadow-lg">
          <a href="#" className="text-[#05073C]">Destinations</a>
          <a href="#" className="text-[#05073C]">Activities</a>
          <a href="#" className="text-[#05073C]">Sign up</a>
          <button 
            className="text-white px-6 py-3 rounded-full font-bold w-full"
            style={{ backgroundColor: '#EB662B' }}
          >
            Log in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
