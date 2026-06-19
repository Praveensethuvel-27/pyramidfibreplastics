import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Newsletter subscription request: ${email}`);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Looking for custom industrial composite designs?
            </h3>
            <p className="text-gray-100 text-sm md:text-base mt-2 font-medium opacity-90">
              Get in touch with our design engineers for a complete blueprint and quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <Link
              to="/enquiry"
              className="bg-white hover:bg-accent text-primary font-bold text-center px-6 py-3 rounded-xl transition-all shadow-md"
            >
              Get Custom Quote
            </Link>
            <a
              href="mailto:engineering@pyramidfibreplastics.com"
              className="border border-white/40 hover:bg-white/10 text-white font-bold text-center px-6 py-3 rounded-xl transition-all"
            >
              Email Engineering
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About PYRAMID Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
              PF
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider text-white leading-none">
                PYRAMID
              </span>
              <span className="text-primary text-[10px] font-bold tracking-widest mt-0.5">
                FIBRE PLASTICS
              </span>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed text-xs">
            PYRAMID FIBRE PLASTICS is a global leader in high-performance composite engineering. We design and manufacture FRP, GRP, and HDPE piping systems, custom storage vessels, and structural composite shapes.
          </p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
              <FaLinkedin size={14} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-primary-light hover:text-white flex items-center justify-center transition-colors">
              <FaTwitter size={14} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors">
              <FaYoutube size={14} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors">
              <FaFacebook size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-primary pl-2">
            Quick Navigation
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">About Company</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary transition-colors">Product Showcases</Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-primary transition-colors">Industries Serviced</Link>
            </li>
            <li>
              <Link to="/process" className="hover:text-primary transition-colors">Manufacturing Steps</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary transition-colors">Factory Gallery</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-primary transition-colors">Careers & Openings</Link>
            </li>
          </ul>
        </div>

        {/* Technical Contacts Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-primary pl-2">
            Corporate Office
          </h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-primary mt-1 shrink-0" size={14} />
              <span className="leading-relaxed">
                Plot 12-A, Industrial Growth Centre, Phase-II, Guindy, Chennai, Tamil Nadu - 600032
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-primary shrink-0" size={12} />
              <span>+91 44 2456 7890</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-primary shrink-0" size={12} />
              <span>info@pyramidfibreplastics.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-primary pl-2">
            Newsletter
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Subscribe to our industrial bulletin to receive articles on pipe maintenance and engineering standards.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl py-3 px-4 text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-md"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <div className="bg-primary/20 text-primary-light border border-primary/30 p-2.5 rounded-lg text-center text-xs">
              Thank you for subscribing!
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-gray-500">
          <div>
            © {new Date().getFullYear()} PYRAMID FIBRE PLASTICS. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
