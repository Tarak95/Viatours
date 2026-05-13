
import { 
    FaCcVisa, 
    FaCcMastercard, 
    FaApplePay, 
    FaCcDiscover, 
    FaCcPaypal, 
    FaCcAmex 
} from 'react-icons/fa';

const Last2 = () => {
    return (
        <div className="bg-white py-6 border-t border-gray-200">
            
            <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                
                
                <p className="text-sm text-gray-500 font-medium order-2 md:order-1 text-center">
                    © Copyright Viatours {new Date().getFullYear()}
                </p>

                <div className="flex flex-wrap justify-center items-center gap-5 order-1 md:order-2">
                    <FaCcVisa size={28} className="text-[#1434CB] hover:scale-110 transition-transform" title="Visa" />
                    <FaCcMastercard size={28} className="text-[#EB001B] hover:scale-110 transition-transform" title="Mastercard" />
                    <FaApplePay size={36} className="text-black hover:scale-110 transition-transform" title="Apple Pay" />
                    <FaCcDiscover size={28} className="text-[#F68121] hover:scale-110 transition-transform" title="Discover" />
                    <FaCcPaypal size={28} className="text-[#003087] hover:scale-110 transition-transform" title="PayPal" />
                    
                    {/* Amex with Blue Background */}
                    <div className="bg-[#016FD0] p-0.5 rounded-sm flex items-center justify-center hover:scale-110 transition-transform" title="Amex">
                        <FaCcAmex size={24} className="text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Last2;