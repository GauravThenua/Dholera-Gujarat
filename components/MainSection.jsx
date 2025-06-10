"use client";

import Image from "next/image";
import React from "react";

const MainSection = () => {
  const features = [
    {
      title: "Smart Infrastructure",
      text: "Seamless zoning, AI-powered utilities, and digital governance redefine futuristic living.",
      img: "/images/smart-infra.jpg",
      color: "from-[#00796b] to-[#26a69a]",
      alt: "Smart Infrastructure in Dholera",
    },
    {
      title: "Investment Hub",
      text: "With global attention and government backing, Dholera is an investor’s dream city.",
      img: "/images/investment.jpg",
      color: "from-[#5d1049] to-[#ab47bc]",
      alt: "Investment opportunities in Dholera",
    },
    {
      title: "Sustainable Living",
      text: "Built with solar energy, zero water waste, and eco-conscious design for tomorrow’s needs.",
      img: "/images/sustainability.jpg",
      color: "from-[#33691e] to-[#8bc34a]",
      alt: "Sustainable living in Dholera",
    },
  ];

  return (
    <main className="relative bg-gradient-to-br from-[#d0f0f6] via-[#c5e2eb] to-[#a2e0db] py-10 px-6 overflow-hidden transition-colors duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight transition-all duration-700 ease-in-out">
          Welcome to Dholera Smart City
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#1a535c] max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-700 ease-in-out">
          Discover{" "}
          <strong className="font-semibold text-[#ff8800]">
            India’s first greenfield smart city
          </strong>
          , built for innovation, sustainability, and unmatched urban living.
          Dholera is transforming Gujarat’s landscape with{" "}
          <span className="text-[#dd4c00] font-medium">
            intelligent planning, smart utilities, and global investment
          </span>
          .
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {features.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-3xl overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-105 shadow-xl bg-gradient-to-br ${card.color} text-white`}
            >
              <div className="relative w-full h-48">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-700 ease-in-out"
                  priority={idx === 0}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 transition-all duration-700 ease-in-out">{card.title}</h2>
                <p className="text-sm opacity-90 transition-all duration-700 ease-in-out">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto shadow-2xl transition-transform duration-700 ease-in-out hover:scale-105">
          <Image
            src="/images/dholera_cityscape.webp"
            alt="Aerial view of Dholera Smart City"
            width={1600}
            height={600}
            sizes="100vw"
            className="rounded-3xl w-full h-auto object-cover transition-all duration-700 ease-in-out"
            priority
          />

          <div className="absolute inset-0 bg-opacity-30 flex items-end justify-start p-6 md:p-10 transition-all duration-700 ease-in-out">
            <div className="text-left">
              <h2 className="text-white text-2xl md:text-3xl font-bold transition-all duration-700 ease-in-out">
                Vision of Tomorrow, Today
              </h2>
              <p className="text-white text-sm md:text-base mt-2 opacity-90 transition-all duration-700 ease-in-out">
                Dholera is more than a city — it’s a smart ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
