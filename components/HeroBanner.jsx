import React from "react";
import Image from "next/image";

export default function HeroBanner() {
  const features = [
    {
      title: "🚄 Excellent Connectivity",
      desc: "Strategically located with access to the Delhi-Mumbai Industrial Corridor (DMIC), a high-speed bullet train, 6-lane expressways, and an upcoming international airport. Dholera ensures you're connected to the world.",
    },
    {
      title: "🏭 Industrial & Tech Zone",
      desc: "Dedicated industrial zones for high-tech industries: aerospace, defense, semiconductors, electric vehicles, and green tech. Pre-approved land and single-window clearance make it investor-friendly.",
    },
    {
      title: "🌱 Eco-Smart Living",
      desc: "Dholera is India's first Platinum-rated Greenfield city. Features include 100% renewable energy, underground utilities, smart traffic systems, and 30% green space across the city.",
    },
    {
      title: "💼 Investment Magnet",
      desc: "Attracting global investors with plug-and-play infrastructure, zero waterlogging zones, 24x7 power, and data networks. Approved by GIDC, NITI Aayog, and supported by global urban planners.",
    },
    {
      title: "🏙️ Smart Urban Planning",
      desc: "Divided into logically planned residential, commercial, and industrial zones with integrated transport, education hubs, and healthcare zones—designed for both work and life.",
    },
    {
      title: "📈 High ROI Potential",
      desc: "Early investors are already seeing sharp land value appreciation. As Dholera nears completion phases, ROI is expected to multiply, making now the best time to invest.",
    },
  ];

  const galleryImages = [
    "/images/dholera1.jpg",
    "/images/dholera2.jpg",
    "/images/dholera3.jpg",
    "/images/dholera4.jpg",
    "/images/dholera5.jpg",
    "/images/dholera6.jpg",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/images/dholera-banner.jpg"
          alt="Dholera Smart City Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
          <div className="px-8 py-6 rounded-2xl text-center shadow-lg max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-3">
              Invest in Dholera Smart City
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed drop-shadow">
              India's First Greenfield Smart City with Global Infrastructure
              Standards
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-br from-white via-gray-100 to-white">
        <h3 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
          Why Invest in Dholera Smart City?
        </h3>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed text-gray-800">
          Dholera, Gujarat’s first and most ambitious smart city, is not just a
          city—it's the future. Spanning over 920 sq. km and backed by the
          Government of India, Dholera is built with a vision to become a global
          economic powerhouse. With world-class infrastructure,
          investor-friendly policies, and cutting-edge sustainability features,
          Dholera offers a once-in-a-lifetime opportunity for real estate,
          industrial, and technology investors. Whether you're looking to
          invest, build, or settle, Dholera is where growth meets innovation.
        </p>
        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
          >
            Invest Now – Secure Your Future
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-[#f4f8fb] py-16 shadow-inner">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-10 text-center">
            Key Highlights of Dholera – Built for the Future
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-3 text-blue-700">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
            A Glimpse of Dholera – Vision to Reality
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Dholera View ${idx + 1}`}
                  width={400}
                  height={256}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
            >
              Discover Investment Projects →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
