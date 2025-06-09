"use client";

import Footer from "@/components/Footer";
import MapDirections from "@/components/MapDirections";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input name="name" placeholder="Full Name" required className="w-full p-2 rounded" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required className="w-full p-2 rounded" onChange={handleChange} />
        <input name="phone" type="tel" pattern="\d{10}" placeholder="Phone Number" required className="w-full p-2 rounded" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required className="w-full p-2 rounded" onChange={handleChange} />

        <button className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition">Register</button>
        {message && <p className="text-center mt-2">{message}</p>}
      </form>
    </div>
   <MapDirections/>
   <Footer/>
    </>
  );
}
