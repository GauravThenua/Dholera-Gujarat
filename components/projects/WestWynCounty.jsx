"use client";

import Image from "next/image";
import westwynBanner from "@/public/images/westwyn-banner.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CostSheet from "../CostSheet";

export default function WestWynCounty() {
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
              src={westwynBanner}
              alt="WestWyn County Banner"
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
                WestWyn County – A Standard of Excellence
              </h2>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className=" max-w-7xl mx-auto mt-14 grid gap-14 grid-cols-1 md:grid-cols-2">
          {/* Intro Description full width */}
          <section className="md:col-span-2 bg-white rounded-3xl shadow-lg p-10 sm:p-14">
            <p
              className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto font-serif"
              itemProp="description"
            >
              Welcome to <strong>WestWyn County</strong>, a premium plotted
              development nestled in the heart of{" "}
              <strong>Dholera Smart City</strong>. Designed for investors,
              families, and visionaries shaping the future, this project offers
              more than just land — it’s your gateway to India’s first and
              largest government-backed smart city transformation.
            </p>
          </section>

          {/* Cards Container */}
          <section className="md:col-span-2 grid grid-cols-1 gap-10">
            {[
              {
                id: "project-highlights",
                title: "Project Highlights",
                items: [
                  "📍 Location: Fedra–Pipli Highway, Prime Growth Corridor",
                  "📏 Plot Sizes: 100–350 sq. yds.",
                  "🏠 Total Units: 130 exclusive plots",
                  "📜 Title Clear, NA/NOC Obtained, AUDA Approved",
                  "🔑 Possession: Immediate",
                  "📝 Documentation: Transparent and Hassle-Free",
                  "💰 Price Range: ₹10 Lacks onwards",
                  "📈 Investment: High Growth Potential",
                ],
              },
              {
                id: "amenities",
                title: "Amenities",
                items: [
                  "Gated Community with Project Boundary",
                  "Street Lights and Internal Roads",
                  "Power & Water Supply",
                  "Clubhouse with Co-Working Space",
                  "Swimming Pool & Yoga Deck",
                  "Senior Citizen Zone",
                  "Children’s Play Area",
                  "Indoor Games & Gym",
                  "EV Charging Station",
                  "24/7 Security & CCTV Surveillance",
                  "Jogging Track & Tree Plantation",
                  "App-Based Society Management",
                ],
              },
              {
                id: "strategic-advantages",
                title: "Strategic Advantages",
                items: [
                  "Entry from State Highway (100-Feet Road) – the liveliest road of Dholera",
                  "Minutes away from the Dholera Expressway & Proposed Metro Corridor",
                  "Located in the High-Growth Belt of Dholera Smart City",
                  "Surrounded by schools, hospitals, and commercial hubs",
                  "Near ABCD Building, Activation Zone, and Dholera International Airport",
                  "Close to Tata Semiconductor, ReNew Power, Solar Park, Freight Corridor",
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

            {/* Why Choose Card */}
            <div
              className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 cursor-default flex flex-col"
              aria-labelledby="why-choose"
            >
              <h2
                id="why-choose"
                className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2"
              >
                Why Choose WestWyn County?
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed text-base font-serif">
                Whether you're a first-time buyer, an NRI, a parent securing
                your child's future, or a retiree planning peaceful years —
                WestWyn County offers:
              </p>
              <ul className="space-y-3 text-gray-700 list-disc list-inside text-base flex-grow">
                <li>A trusted brand with zero false promises</li>
                <li>Exit clarity within 5 years</li>
                <li>Buy-back Guarantee*</li>
                <li>Resale Support & First Transfer Free</li>
                <li>A legacy you'll be proud to pass on</li>
              </ul>
            </div>

            {/* Investment Benefits Card */}
            <div
              className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 cursor-default flex flex-col"
              aria-labelledby="investment-benefits"
            >
              <h2
                id="investment-benefits"
                className="text-2xl font-semibold text-green-900 mb-6 border-b-4 border-green-400 pb-2"
              >
                Dholera Investment Benefits
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc list-inside text-base flex-grow">
                <li>High Price Appreciation</li>
                <li>Early Mover Advantage</li>
                <li>Rental Income Opportunity</li>
                <li>Industrial Growth Hub</li>
                <li>Government-Backed Smart City Development</li>
              </ul>
            </div>
          </section>

          {/* Site Locations */}
          <section
            className="md:col-span-2 bg-white rounded-3xl shadow-lg p-5 sm:p-14 "
            aria-label="Office Locations"
          >
            <h3 className="text-2xl font-semibold text-green-900 mb-8 border-b-2 border-green-400 pb-3">
              Site Locations
            </h3>
            <address className="not-italic space-y-5 text-gray-700 max-w-3xl mx-auto text-base flex flex-col gap-3">
              <p>
                <strong>🏢 Head Office:</strong> H-119 ,Sector-63, Noida, Uttar Pradesh
              </p>
              <p>
                <strong>🏬 Corporate Office:</strong> JMD Megapolis, Gurugram,
                Haryana
              </p>
              <p>
                <strong>📍 Site Office:</strong> Fedra-Pipli Road, State
                Highway, Dholera, Gujarat
              </p>
            </address>
          </section>

          {/* Cost Sheet Section with margin */}
          <section className="md:col-span-2 mt-5">
            <CostSheet />
          </section>

          {/* Call to Action Button */}
          <section className="md:col-span-2 text-center ">
            <a
              href="/contact"
              className="inline-block bg-green-800 text-white text-xl font-semibold px-16 py-5 rounded-full shadow-lg hover:bg-green-900 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-400"
              aria-label="Book Your Plot Now"
            >
              Book Your Plot Now
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
