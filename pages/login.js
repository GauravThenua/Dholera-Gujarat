"use client";

import Footer from "@/components/Footer";
import MapDirections from "@/components/MapDirections";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve userName from localStorage if available
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok && data.name) {
      localStorage.setItem("userName", data.name); // store name
      setUserName(data.name); // update state
    }
  };

  return (
    <>
      <Navbar userName={userName} />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <input name="email" type="email" placeholder="Email" required className="w-full p-2 rounded" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" required className="w-full p-2 rounded" onChange={handleChange} />

          <button className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition">Login</button>
          {message && <p className="text-center mt-2">{message}</p>}
        </form>
      </div>
      <MapDirections />
      <Footer />
    </>
  );
}
