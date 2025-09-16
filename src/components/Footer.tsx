import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 mt-16">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MM Foods</h2>
          <p className="text-sm text-amber-200">
            Bringing you premium quality chocolate products made with love and care. 
            Taste the richness in every bite!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-amber-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-amber-300">Products</Link></li>
            <li><Link to="/about" className="hover:text-amber-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-amber-300">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-amber-300">FAQs</Link></li>
            <li><Link to="/shipping" className="hover:text-amber-300">Shipping & Delivery</Link></li>
            <li><Link to="/returns" className="hover:text-amber-300">Returns & Refunds</Link></li>
            <li><Link to="/privacy" className="hover:text-amber-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
          <p className="text-sm text-amber-200 mb-4">Subscribe to get the latest updates & offers</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-3 py-2 rounded-l-md text-black focus:outline-none w-full"
            />
            <button 
              type="submit" 
              className="bg-amber-700 px-4 py-2 rounded-r-md hover:bg-amber-600"
            >
              Subscribe
            </button>
          </form>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-amber-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-amber-300"><Instagram size={20} /></a>
            <a href="#" className="hover:text-amber-300"><Twitter size={20} /></a>
            <a href="mailto:info@mmfoods.com" className="hover:text-amber-300"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-amber-950 text-amber-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} MM Foods. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
