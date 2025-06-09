'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import MapDirections from '@/components/MapDirections';

export default function AuthPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setShowModal(true)} />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-400 text-black px-8 py-3 font-bold text-lg rounded-xl shadow-xl hover:bg-yellow-500 transition duration-300"
        >
          Login / Register
        </button>
      </div>

      <AnimatePresence>
        {showModal && <AuthModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>

      <MapDirections />
      <Footer />
    </>
  );
}
