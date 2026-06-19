import React, { useEffect } from "react";
import { HiX } from "react-icons/hi";

const Lightbox = ({ isOpen, image, title, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-primary transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer focus:outline-none"
        aria-label="Close Lightbox"
      >
        <HiX size={26} />
      </button>

      {/* Lightbox content */}
      <div className="max-w-5xl w-full flex flex-col items-center">
        <img
          src={image}
          alt={title || "Gallery View"}
          className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl animate-scale-up"
        />
        {title && (
          <div className="mt-4 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wide">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
