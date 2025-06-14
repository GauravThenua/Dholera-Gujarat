"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MainSection from "@/components/MainSection";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import MapDirections from "@/components/MapDirections";
import AuthModal from "@/components/AuthModal";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import InvestorCompanies from "@/components/InvestorCompanies";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <>
      <Head>
        <title>DholeraGujarat.in</title>
        <meta
          name="description"
          content="Explore Dholera Smart City and discover why DholeraGujarat.in is your most trusted destination for investments, insights, and updates."
        />
        <link rel="icon" href="./images/dholera_gujarat_logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar onLoginClick={() => setShowModal(true)} userName={userName} />
      <HeroSlider />

      <MainSection />
      <HeroBanner />
      <InvestorCompanies />
      <Testimonial />

      <AnimatePresence>
        {showModal && (
          <AuthModal
            onClose={() => setShowModal(false)}
            onLoginSuccess={(name) => {
              setUserName(name);
              localStorage.setItem("userName", name); // persist name
              setShowModal(false);
            }}
          />
        )}
      </AnimatePresence>

      <MapDirections />
      <Footer />
    </>
  );
}
