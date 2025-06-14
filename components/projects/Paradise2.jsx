"use client";

import Image from "next/image";
import paradiseBanner from "@/public/images/dholera-projects-image.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CostSheet from "../CostSheet";
import WhatsAppFloatingButton from "../WhatsAppFloatingButton";

export default function Paradise2() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 px-6 sm:px-10 lg:px-20 py-12"
        itemScope
        itemType="https://schema.org/Residence"
      >
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-64 sm:h-80 md:h-[420px] lg:h-[540px]">
            <Image
              src={paradiseBanner}
              alt="Paradise 2 Banner"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute left-6 bottom-6 sm:left-12 sm:bottom-12 backdrop-blur-md rounded-xl px-6 py-4 max-w-3xl">
              <h2
                className="text-white sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg"
                itemProp="name"
              >
                Paradise 2 – A Place Worth Living
              </h2>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className="max-w-7xl mx-auto mt-14 grid gap-14 grid-cols-1 md:grid-cols-2">
          {/* Intro Description */}
          <section className="md:col-span-2 bg-white rounded-3xl shadow-lg p-10 sm:p-14">
            <p
              className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto font-serif"
              itemProp="description"
            >
              <strong>Paradise 2</strong> is a thoughtfully planned residential plotted development located in the strategic corridor of <strong>Dholera Smart City</strong>. This project presents a perfect balance of nature, investment value, and infrastructure, offering a solid opportunity for future-focused investors and families alike.
            </p>
          </section>

          {/* Cards */}
          <section className="md:col-span-2 grid grid-cols-1 gap-10">
            {[
              {
                id: "project-highlights",
                title: "Project Highlights",
                items: [
                  "📍 Location: TP-2A, Dholera SIR",
                  "📏 Plot Sizes: 100–400 sq. yds.",
                  "🧾 Title Clear, NA/NOC & AUDA Approved",
                  "🔑 Ready-to-possess plots",
                  "📝 100% Legally Verified Documentation",
                  "💰 Price Starting at ₹9.5 Lakhs",
                ],
              },
              {
                id: "amenities",
                title: "Amenities",
                items: [
                  "Secured Gated Entry",
                  "Wide Internal Roads with Street Lights",
                  "Green Landscaping & Garden Spaces",
                  "Play Area for Children",
                  "Senior Citizen Sitting Area",
                  "Solar Powered Street Lighting",
                  "Water and Drainage Infrastructure",
                ],
              },
              {
                id: "location-benefits",
                title: "Strategic Location Advantages",
                items: [
                  "Near Activation Area of Dholera",
                  "Close to Dholera International Airport",
                  "5 Mins from ABCD Building & Expressway",
                  "Near Proposed Metro & Logistic Hub",
                  "Easy Access to TP Schemes and Industrial Belt",
                ],
              },
            ].map(({ id, title, items }) => (
              <div
                key={id}
                className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 cursor-default flex flex-col"
                aria-labelledby={id}
              >
                <h2
                  id={id}
                  className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2"
                >
                  {title}
                </h2>
                <ul className="space-y-3 text-gray-700 list-disc list-inside text-base flex-grow">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Why Choose */}
            <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 cursor-default flex flex-col">
              <h2 className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2">
                Why Paradise 2?
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed text-base font-serif">
                Whether you're securing your dream home or your next big investment, Paradise 2 offers:
              </p>
              <ul className="space-y-3 text-gray-700 list-disc list-inside text-base flex-grow">
                <li>Excellent Location & ROI</li>
                <li>RERA Compliant & Legally Approved</li>
                <li>Government Smart City Benefits</li>
                <li>Flexible Plot Options for Every Budget</li>
              </ul>
            </div>
          </section>

          {/* Site Office Details */}
          <section className="md:col-span-2 bg-white rounded-3xl shadow-lg p-5 sm:p-14">
            <h3 className="text-2xl font-semibold text-green-900 mb-8 border-b-2 border-green-400 pb-3">
              Site Locations
            </h3>
            <address className="not-italic space-y-5 text-gray-700 max-w-3xl mx-auto text-base flex flex-col gap-3">
              <p>
                <strong>🏢 Head Office:</strong> H-119, Sector-63, Noida, Uttar Pradesh
              </p>
              <p>
                <strong>🏬 Corporate Office:</strong> JMD Megapolis, Gurugram, Haryana
              </p>
              <p>
                <strong>📍 Site Office:</strong> TP-2A Zone, Fedra-Pipli Road, Dholera, Gujarat
              </p>
            </address>
          </section>

          {/* Cost Sheet */}
          <section className="md:col-span-2 mt-5">
            <CostSheet />
          </section>

          {/* Book Now CTA */}
          <section className="md:col-span-2 text-center px-4">
            <div className="bg-gradient-to-br from-green-200 via-blue-300 to-green-100 rounded-2xl shadow-xl py-12 px-6 sm:px-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
                Book Your Plot in Paradise 2
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-medium">
                Want more info? Let’s connect and make your dream plot a reality.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <a
                  href="tel:+919540561820"
                  className="bg-white border border-green-700 text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition duration-300 shadow-sm"
                >
                  📞 Call Us on +91 95405 61820
                </a>
                <a
                  href="https://wa.me/919540561820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-sm"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
