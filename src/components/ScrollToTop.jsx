import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Scroll window to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 2. Track window scroll to display/hide floating button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-primary/90 hover:bg-primary text-white p-3.5 rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center border border-white/20 backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
