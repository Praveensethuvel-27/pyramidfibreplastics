import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+914424567890"; // Example corporate number
  const message = encodeURIComponent("Hello PYRAMID FIBRE PLASTICS, I am interested in your fiber piping systems and storage tanks. Please share your catalog.");

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group animate-bounce"
      style={{ animationDuration: "3s" }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300 ease-out whitespace-nowrap">
        Chat with Us
      </span>
    </a>
  );
};

export default WhatsAppButton;
