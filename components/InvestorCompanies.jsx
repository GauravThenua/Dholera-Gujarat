// components/InvestorCompanies.jsx

import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';

const investorData = [
  {
    name: "Tata Power",
    logo: "/images/investors/tata-power.png",
    project: "Renewable Energy Infrastructure",
    description:
      "Tata Power is building solar infrastructure and smart energy systems to power Dholera’s clean future.",
    url: "https://www.tatapower.com",
  },
  {
    name: "ReNew Power",
    logo: "/images/investors/renew.png",
    project: "Mega Solar Park",
    description:
      "ReNew is creating a massive solar park, contributing to India’s renewable energy goals from Dholera.",
    url: "https://renewpower.in",
  },
  {
    name: "Airbus",
    logo: "/images/investors/airbus.png",
    project: "Aerospace Manufacturing Hub",
    description:
      "Airbus plans to collaborate in building advanced aerospace manufacturing facilities in Dholera.",
    url: "https://www.airbus.com",
  },
  {
    name: "Boeing",
    logo: "/images/investors/boeing.png",
    project: "Defense & Aviation Tech Plant",
    description:
      "Boeing is planning a defense and aviation component unit within Dholera SIR’s industrial zones.",
    url: "https://www.boeing.com",
  },
  {
    name: "Adani Group",
    logo: "/images/investors/adani.png",
    project: "Smart Infrastructure & Logistics",
    description:
      "Adani Group is developing smart grid logistics and infrastructure within Dholera’s industrial corridors.",
    url: "https://www.adani.com",
  },
  {
    name: "Torrent Power",
    logo: "/images/investors/torrent.png",
    project: "Smart Grid Power Supply",
    description:
      "Torrent Power is deploying modern power distribution and smart grids to serve Dholera’s industry.",
    url: "https://www.torrentpower.com",
  },
  {
    name: "Rafael",
    logo: "/images/investors/rafael.png",
    project: "Defense R&D Facility",
    description:
      "Rafael is planning an R&D and production unit for defense electronics in the Dholera defense corridor.",
    url: "https://www.rafael.co.il",
  },
  {
    name: "Essar",
    logo: "/images/investors/essar.png",
    project: "Green Hydrogen & Energy Hub",
    description:
      "Essar is investing in green hydrogen and energy storage solutions in Dholera SIR.",
    url: "https://www.essar.com",
  },
  {
    name: "Nayara Energy",
    logo: "/images/investors/nayara.png",
    project: "Clean Fuel Tech Plant",
    description:
      "Nayara is setting up clean fuel refining units aligned with Dholera’s industrial innovation goals.",
    url: "https://www.nayaraenergy.com",
  },
  {
    name: "Aditya Birla Group",
    logo: "/images/investors/birla.png",
    project: "Smart Materials & Industrial Chemicals",
    description:
      "Aditya Birla Group is investing in sustainable chemical manufacturing in Dholera industrial zones.",
    url: "https://www.adityabirla.com",
  },
];

const InvestorCompanies = () => {
  const [lead, setLead] = useState({ name: "", phone: "" });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Companies Investing in Dholera",
    itemListElement: investorData.map((company, index) => ({
      "@type": "Organization",
      name: company.name,
      url: company.url,
      description: company.description,
      position: index + 1,
    })),
  };

  return (
    <section className="bg-white py-12 px-4 md:px-16">
      {/* <Head>
        <title>Dholera Investment Companies | Top Investors in Smart City</title>
        <meta
          name="description"
          content="Top companies like Tata Power, Adani, Airbus, and ReNew are investing in Dholera Smart City. Learn about their projects and future plans."
        />
        <meta property="og:title" content="Companies Investing in Dholera Smart City" />
        <meta
          property="og:description"
          content="Explore major companies investing in Dholera like Tata Power, Adani, Airbus, and Boeing. See upcoming projects and growth."
        />
        <meta property="og:image" content="/images/og/dholera-investors.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head> */}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-800 mb-6"
      >
        Major Companies Investing in Dholera Smart City
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
      >
        Discover the global giants investing in India's first smart city — Dholera. These strategic investments are shaping India's future infrastructure, energy, and defense capabilities.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {investorData.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex justify-center mb-4 h-16">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={60}
                className="object-contain max-h-16"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 text-center">{company.name}</h2>
            <h3 className="text-blue-600 text-sm text-center">{company.project}</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">{company.description}</p>
            {/* <div className="text-center mt-3">
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm hover:text-blue-700"
              >
                Visit Website
              </a>
            </div> */}
          </motion.div>
        ))}
      </div>

      {/* CTA & Brochure */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 p-10 rounded-3xl shadow-md text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Get the Complete Investment Guide to Dholera
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Download the latest investment brochure with detailed projects, locations, and investment plans.
        </p>
        <a
          href="./brochure/dholera-investment.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          📄 Download Brochure
        </a>
      </motion.div>

      {/* Lead Form */}
      <div className="mt-12 max-w-xl mx-auto">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
          Want to Discuss Investment Opportunities?
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Thank you, ${lead.name}! We'll contact you shortly.`);
            setLead({ name: "", phone: "" });
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={lead.name}
            required
            onChange={(e) => setLead({ ...lead, name: e.target.value })}
            className="w-full px-4  text-black py-2 border rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={lead.phone}
            required
            onChange={(e) => setLead({ ...lead, phone: e.target.value })}
            className="w-full px-4 text-black py-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Request Callback
          </button>
        </form>
      </div>
    </section>
  );
};

export default InvestorCompanies;
