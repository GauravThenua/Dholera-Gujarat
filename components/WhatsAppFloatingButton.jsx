import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloatingButton() {
  const whatsappNumber = '+919540561820'; // Your number in international format
  const preFilledMessage = 'Hello, I am interested in investing in Dholera Smart City. Please assist me.';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preFilledMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-15 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
