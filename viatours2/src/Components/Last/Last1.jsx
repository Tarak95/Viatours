
import { 
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
    
} from 'react-icons/fa';

const Last1 = () => {
    return (
        <footer className="bg-[#FEF7F4] pt-16 pb-6 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Expert & Social */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 text-center md:text-left">
                    <p className="text-gray-700 font-medium">
                        Speak to our expert at <span className="text-orange-500 font-bold">1-800-453-6744</span>
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-900">Follow Us</span>
                        <div className="flex gap-2">
                            <a href="#" className="p-2 hover:text-orange-500 transition-colors"><FaFacebookF size={16} /></a>
                            <a href="#" className="p-2 hover:text-orange-500 transition-colors"><FaTwitter size={16} /></a>
                            <a href="#" className="p-2 hover:text-orange-500 transition-colors"><FaInstagram size={16} /></a>
                            <a href="#" className="p-2 hover:text-orange-500 transition-colors"><FaLinkedinIn size={16} /></a>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-200 mb-12" />

                {/* Middle Section: Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16 text-center sm:text-left">
                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-5">Contact</h4>
                        <div className="text-gray-500 text-sm space-y-3 leading-relaxed">
                            <p>328 Queensberry Street, North Melbourne VIC3051, Australia.</p>
                            <p className="hover:text-orange-500 cursor-pointer">hi@viatours.com</p>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-5">Company</h4>
                        <ul className="text-gray-500 text-sm space-y-3">
                            {['About Us', 'Tourz Reviews', 'Contact Us', 'Travel Guides', 'Data Policy', 'Cookie Policy', 'Legal', 'Sitemap'].map(item => (
                                <li key={item} className="hover:text-orange-500 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-5">Support</h4>
                        <ul className="text-gray-500 text-sm space-y-3">
                            {['Get in Touch', 'Help center', 'Live chat', 'How it works'].map(item => (
                                <li key={item} className="hover:text-orange-500 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Apps */}
                    <div className="sm:col-span-2 flex flex-col items-center sm:items-start">
                        <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
                        <p className="text-gray-500 text-sm mb-4">Subscribe to the free newsletter and stay up to date</p>
                        <div className="flex bg-white rounded-lg overflow-hidden border border-gray-100 mb-8 w-full max-w-xs shadow-sm">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 text-sm outline-none"
                            />
                            <button className="text-gray-400 px-4 text-xs font-bold hover:text-orange-500">Send</button>
                        </div>

                        <h4 className="font-bold text-gray-900 mb-4">Mobile Apps</h4>
                        <ul className="text-gray-500 text-sm space-y-2">
                            <li className="hover:text-orange-500 cursor-pointer">iOS App</li>
                            <li className="hover:text-orange-500 cursor-pointer">Android App</li>
                        </ul>
                    </div>
                </div>

               

            </div>
        </footer>
    );
};

export default Last1;