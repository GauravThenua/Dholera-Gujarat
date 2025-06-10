"use client";
import Head from "next/head";
import { useState } from "react";
import {
  Mail,
  User,
  MessageCircle,
  Phone,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameRegex.test(formData.name)) {
      return setError("Please enter a valid name (at least 3 letters).");
    }
    if (!emailRegex.test(formData.email)) {
      return setError("Please enter a valid email address.");
    }
    if (!phoneRegex.test(formData.phone)) {
      return setError("Please enter a valid 10-digit phone number.");
    }

    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(data.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - DholeraGujarat.in</title>
        <meta name="description" content="Get in touch with us for any inquiries or investment regarding Dholera Smart City." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/dholera_gujarat_logo.ico" />
      </Head>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/10">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-gray-300 mb-6 text-center">
            We'd love to hear from you!
          </p>

          {error && (
            <div className="flex items-center gap-2 text-red-500 bg-red-100 rounded p-3 mb-4">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 text-green-600 bg-green-100 rounded p-3 mb-4">
              <CheckCircle className="w-5 h-5" />
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd200] text-gray-800"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd200] text-gray-800"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd200] text-gray-800"
                required
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 h-32 rounded-lg bg-white/80 backdrop-blur border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd200] text-gray-800 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ffd200] text-black font-bold py-3 rounded-lg shadow-md hover:bg-[#f7971e] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
