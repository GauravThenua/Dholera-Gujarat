'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@/context/UserContext';

export default function AuthModal({ onClose }) {
  const { login } = useUser();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/register';

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok && data.success) {
      if (isLogin) login(data.name || formData.name);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-800 rounded-2xl p-10 w-full max-w-md relative shadow-2xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-white text-2xl hover:text-yellow-400 transition"
          >
            ×
          </button>

          <h2 className="text-3xl font-extrabold text-center mb-6 text-white">
            {isLogin ? 'Welcome Back 👋' : 'Create an Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <input
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 rounded-lg bg-gray-700 placeholder-gray-300"
                  onChange={handleChange}
                />
                <input
                  name="phone"
                  type="tel"
                  pattern="\d{10}"
                  placeholder="Phone Number"
                  required
                  className="w-full p-3 rounded-lg bg-gray-700 placeholder-gray-300"
                  onChange={handleChange}
                />
              </>
            )}
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 placeholder-gray-300"
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded-lg bg-gray-700 placeholder-gray-300"
              onChange={handleChange}
            />

            <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition">
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>

          {message && (
            <p className="text-center text-sm mt-3 text-yellow-300 font-semibold">{message}</p>
          )}

          <p className="text-center text-sm mt-6 text-white">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{' '}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage('');
              }}
              className="text-yellow-400 hover:underline"
              type="button"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
