// pages/about.js
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapDirections from "@/components/MapDirections";
import FAQSection from "@/components/FAQSection";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About Dholera Gujarat</title>
        <meta
          name="description"
          content="Explore Dholera Smart City and discover why DholeraGujarat.in is your most trusted destination for investments, insights, and updates."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-100 to-white text-gray-900">
        {/* Hero Section */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/dholera-banner.jpg"
            alt="Dholera Smart City Banner"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="/images/dholera-banner-blur.jpg"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center backdrop-blur bg-black/30 p-6 rounded-xl">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
                Welcome to{" "}
                <span className="text-[#ffd200]">DholeraGujarat.in</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl">
                Your trusted digital gateway to{" "}
                <span className="font-semibold text-white">
                  Dholera Smart City
                </span>{" "}
                — India’s first and largest planned greenfield smart city. At
                DholeraGujarat.in, we provide verified property listings, expert
                investment guidance, and up-to-date insights into
                infrastructure, residential projects, and commercial
                opportunities. Whether you're a first-time buyer or a seasoned
                investor, explore the future of smart living and high-potential
                investments with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              DholeraGujarat.in is your gateway to India’s first and largest
              planned smart city — Dholera Special Investment Region (SIR). We
              provide detailed, transparent, and real-time insights into the
              opportunities Dholera offers across industrial, residential,
              commercial, and technological domains. From major infrastructure
              developments and investor updates to government schemes and
              project launches, our platform helps you stay ahead in Dholera’s
              booming real estate and smart development landscape.
            </p>
          </div>

          <Section title="🌐 Who We Are" color="text-red-600">
            <p className="text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-red-500">
                DholeraGujarat.in
              </span>
              , we are a dedicated team of real estate analysts, developers,
              digital consultants, and visionaries working to empower investors,
              stakeholders, and future residents of Dholera Smart City. We aim
              to offer the most accessible and user-friendly interface for
              exploring properties, investment plans, news, and resources
              related to Dholera.
            </p>
          </Section>

          <Section title="🔍 What We Do" color="text-blue-800">
            <p className="text-lg leading-relaxed text-gray-700">
              We provide verified information and listings related to Dholera
              SIR including current and upcoming projects, area-wise
              developments, pricing trends, investor incentives, connectivity
              maps, and expert opinions. We also support investors with
              consultation, legal advice, and builder partnerships to make your
              journey seamless.
            </p>
          </Section>

          <Section title="🎯 Our Mission" color="text-blue-700" bg="bg-white">
            <p className="text-lg text-gray-700">
              Our mission is to serve as the most trusted digital companion for
              those looking to invest or grow with Dholera. We bring{" "}
              <strong>real-time updates</strong>,{" "}
              <strong>expert analysis</strong>, and a{" "}
              <strong>seamless user experience</strong> to your screen.
            </p>
          </Section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              ✨ Special Features of Dholera
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="World-Class Infrastructure"
                description="Smart roads, solar power, ICT-enabled services, and intelligent traffic systems."
              />
              <FeatureCard
                title="Plug-and-Play Utilities"
                description="Centralized waste management, water recycling, and 24x7 utilities ready to deploy."
              />
              <FeatureCard
                title="Eco-Friendly Design"
                description="Green spaces, energy-efficient buildings, and low-emission zones."
              />
              <FeatureCard
                title="Strategic Location"
                description="Connectivity via Expressways, Dholera International Airport, and Metro Rail."
              />
            </div>
          </section>

          <Section
            title="✅ Why Choose DholeraGujarat.in?"
            color="text-red-700"
            bg="bg-gradient-to-r from-red-100 to-red-50"
          >
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-800">
              <li>
                Comprehensive and updated information about all sectors of
                Dholera SIR
              </li>
              <li>Trustworthy platform with verified listings and news</li>
              <li>In-depth market analysis and smart investment tips</li>
              <li>Personalised assistance and consultation available</li>
              <li>
                Strong network with reputed developers and government-approved
                projects
              </li>
            </ul>
          </Section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">
              🚧 Key Highlights of Dholera
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <HighlightCard
                title="920 sq. km Area"
                description="Dholera is twice the size of Delhi and six times of Shanghai's initial phase."
              />
              <HighlightCard
                title="Smart Governance"
                description="All services integrated digitally: land, traffic, power, and water."
              />
              <HighlightCard
                title="Investment Magnet"
                description="Billions in FDI already secured across residential, industrial, and tech zones."
              />
            </div>
          </section>

          <Section
            title="💡 Tech & Innovation in Dholera"
            color="text-indigo-700"
            bg="bg-indigo-50"
          >
            <p className="text-lg text-gray-700 mb-4">
              Dholera integrates IoT, AI-driven traffic systems, and advanced
              surveillance to create a secure and efficient cityscape.
              High-speed data connectivity and cloud infrastructure support
              businesses and residents alike.
            </p>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>Smart poles with 5G capability</li>
              <li>AI-powered waste management systems</li>
              <li>Blockchain-based land record system</li>
              <li>Fully automated traffic control centers</li>
            </ul>
          </Section>

          <Section title="🚀 Our Vision" color="text-indigo-700" bg="bg-white">
            <p className="text-lg leading-relaxed text-gray-700">
              We envision becoming the most comprehensive platform for
              everything about Dholera — from land purchase to legal advice,
              investment tools to expert blogs, all in one place.
            </p>
          </Section>

          <Section
            title="🌟 What People Are Saying"
            color="text-gray-800"
            bg="bg-gradient-to-br from-white to-indigo-100"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <TestimonialCard
                quote="Dholera's smart infrastructure has transformed how we envision urban development in India."
                author="Rajesh Patel, Urban Planner"
              />
              <TestimonialCard
                quote="Investing in Dholera was the best decision I've made in the past decade."
                author="Neha Mehta, Investor"
              />
            </div>
          </Section>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-4">
              Ready to explore Dholera Smart City opportunities?
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <FAQSection />
      <MapDirections />
      <Footer />
    </>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Section({
  title,
  children,
  color = "text-gray-800",
  bg = "bg-transparent",
}) {
  return (
    <section className={`mb-16 ${bg} p-8 rounded-xl shadow`}>
      <h2 className={`text-3xl font-bold ${color} mb-4`}>{title}</h2>
      {children}
    </section>
  );
}

function HighlightCard({ title, description }) {
  return (
    <div className="bg-purple-600 p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <p className="text-gray-700 italic">“{quote}”</p>
      <p className="mt-4 font-semibold text-gray-800">— {author}</p>
    </div>
  );
}
