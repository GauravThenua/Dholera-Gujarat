"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
// import { useUser } from '@/context/UserContext';  // Commented out since login is removed
// import AuthModal from '@/components/AuthModal';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { userName, logout, openModal, showModal, closeModal } = useUser();

  return (
    <>
      <nav className="bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#c6b776] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/dholera_gujarat_logo.png"
                alt="Dholera Logo"
                className="h-10 w-10 object-contain drop-shadow-lg"
              />
              <span className="text-2xl font-extrabold text-white tracking-wide hover:text-[#ffd200] transition">
                Dholera Gujarat
              </span>
            </Link>
          </div>

          {/* Hamburger Icon - Mobile Only */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="text-white h-7 w-7" />
              ) : (
                <Menu className="text-white h-7 w-7" />
              )}{" "}
              Menu
            </button>
          </div>

          {/* Links Section - Desktop */}
          <div className="hidden md:flex space-x-6 text-white font-medium items-center">
            <Link
              href="/"
              className="hover:text-[#ffd200] transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#ffd200] transition duration-200"
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#ffd200] transition duration-200"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#ffd200] transition duration-200"
            >
              Contact
            </Link>

            {/* Login/logout section commented out for SEO and performance */}
            {/*
            {userName ? (
              <>
                <span className="text-white-300 hover:cursor-pointer hover:text-yellow-400">Hi, {userName}</span>
                <button
                  onClick={logout}
                  className="ml-2 bg-blue-400 hover:bg-blue-200 text-white px-3 py-1 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={openModal}
                className="hover:text-[#ffd200] hover:cursor-pointer"
              >
                Login
              </button>
            )}
            */}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-4 flex flex-col bg-[#0f2027] text-white font-medium">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#ffd200]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#ffd200]"
            >
              About Us
            </Link>
            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#ffd200]"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#ffd200]"
            >
              Contact
            </Link>

            {/* Login button on mobile commented out */}
            {/*
            {userName ? (
              <span className="text-shadow-white font-semibold">
                Hi, {userName}
              </span>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openModal();
                }}
                className="bg-white text-black px-4 py-1.5 rounded-lg font-semibold hover:bg-yellow-300"
              >
                Login
              </button>
            )}
            */}
          </div>
        )}
      </nav>

      {/* Modal rendering commented out */}
      {/* {showModal && <AuthModal onClose={closeModal} />} */}
    </>
  );
}
