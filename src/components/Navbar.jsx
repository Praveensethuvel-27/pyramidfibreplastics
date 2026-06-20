import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { products } from "../data/products";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsMegaOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Header Contact Bar */}
      <div className="bg-primary-dark text-white text-xs py-2 px-4 md:px-12 flex justify-between items-center z-50 relative">
        <div className="flex items-center space-x-6">
          <a href="tel:+914424567890" className="flex items-center space-x-2 hover:text-accent transition-colors">
            <FaPhoneAlt size={10} />
            <span>+91 44 2456 7890</span>
          </a>
          <a href="mailto:info@pyramidfibreplastics.com" className="hidden sm:flex items-center space-x-2 hover:text-accent transition-colors">
            <FaEnvelope size={10} />
            <span>info@pyramidfibreplastics.com</span>
          </a>
        </div>
        <div className="text-gray-300 text-[10px] md:text-xs font-light">
          ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 Certified
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 glass-nav shadow-premium py-3"
            : "top-8 bg-white/95 border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-md">
              PF
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-wide text-gray-900 leading-none">
                PYRAMID
              </span>
              <span className="text-[10px] text-primary font-bold tracking-widest mt-0.5">
                FIBRE PLASTICS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-7">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700"
                }`
              }
            >
              About
            </NavLink>

            {/* Mega Menu Trigger */}
            <div
              className="relative group py-1"
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}
            >
              <button
                className={`text-sm font-semibold tracking-wide flex items-center space-x-1 transition-colors hover:text-primary group-hover:text-primary ${
                  location.pathname.startsWith("/products") ? "text-primary pb-1" : "text-gray-700"
                }`}
              >
                <span>Products</span>
                <HiChevronDown className={`transition-transform duration-200 ${isMegaOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu Panel */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[800px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-3 gap-6 transition-all duration-300 transform origin-top ${
                  isMegaOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <div className="col-span-2 border-b border-gray-100 pb-2 mb-2">
                    <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                      Industrial Product Categories
                    </h3>
                  </div>
                  {products.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="group/item flex items-start space-x-3 p-2 rounded-xl hover:bg-accent/40 transition-all duration-200"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 rounded-lg object-cover shadow-sm group-hover/item:scale-105 transition-transform duration-200"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 group-hover/item:text-primary transition-colors">
                          {p.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                          {p.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-5 border border-primary/10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-md font-bold text-gray-900 leading-tight">
                      Custom Engineering Solutions
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      We engineer custom diameter FRP pipes, specialized dual-laminates, and fittings tailored to your chemical medium parameters.
                    </p>
                  </div>
                  <Link
                    to="/products"
                    className="mt-4 inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-primary/20 hover:shadow-lg"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700"
                }`
              }
            >
              Industries
            </NavLink>
            <NavLink
              to="/process"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700"
                }`
              }
            >
              Process
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700"
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700"
                }`
              }
            >
              Certifications
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700"
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700"
                }`
              }
            >
              Careers
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Get Quote CTA */}
          <div className="hidden lg:block">
            <Link
              to="/enquiry"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800 focus:outline-none p-1"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 bg-white z-45 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto px-6 pt-28 pb-24 space-y-1 flex flex-col justify-between">
            <div className="space-y-3">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/industries"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Industries We Serve
              </NavLink>
              <NavLink
                to="/process"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Manufacturing Process
              </NavLink>
              <NavLink
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/certifications"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Certifications
              </NavLink>
              <NavLink
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/careers"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Careers
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-md font-bold ${
                    isActive ? "bg-accent text-primary" : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </div>
            
            <div className="pt-6 border-t border-gray-100 flex flex-col space-y-4">
              <Link
                to="/enquiry"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl shadow-lg transition-all"
              >
                Request A Quote
              </Link>
              <div className="text-center text-xs text-gray-500">
                Email: info@pyramidfibreplastics.com | Phone: +91 44 2456 7890
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
