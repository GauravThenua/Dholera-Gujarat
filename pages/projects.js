// pages/projects.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const projects = [
  {
    name: "Paradise 2",
    slug: "paradise-2",
    status: "Sold Out",
    description:
      "Paradise 2 is a well-planned residential community located in the heart of the Dholera Special Investment Region (SIR), Gujarat. This project offers thoughtfully designed residential plots tailored to meet the demands of modern living.",
    highlights: [
      "Prime Location within Dholera SIR",
      "Varied Plot Sizes",
      "Well-Planned Infrastructure",
    ],
    image: "/images/dholera-projects-image.jpg",
  },
  {
    name: "Orchid Township",
    slug: "orchid-township",
    status: "Sold Out",
    description:
      "Orchid Township is a well-planned residential community located in the heart of the Dholera Special Investment Region (SIR), Gujarat. This project offers thoughtfully designed residential plots tailored to meet the demands of modern living.",
    highlights: [
      "Prime Location within Dholera SIR",
      "Varied Plot Sizes",
      "Well-Planned Infrastructure",
    ],
    image: "/images/dholera-projects-image.jpg",
  },
  {
    name: "Paradise",
    slug: "paradise",
    status: "Sold Out",
    description:
      "Paradise is a residential project offering a range of plot sizes to suit different needs, situated within the Dholera SIR.",
    highlights: [
      "Strategic Location",
      "Modern Amenities",
      "High Investment Potential",
    ],
    image: "/images/dholera-projects-image.jpg",
  },
  {
    name: "Maple",
    slug: "maple",
    status: "Sold Out",
    description:
      "Maple is a residential project offering a range of plot sizes to suit different needs, situated within the Dholera SIR.",
    highlights: [
      "Strategic Location",
      "Modern Amenities",
      "High Investment Potential",
    ],
    image: "/images/dholera-projects-image.jpg",
  },
  {
    name: "Marina Bay",
    slug: "marina-bay",
    status: "Sold Out",
    description:
      "Marina Bay is a residential project offering a range of plot sizes to suit different needs, situated within the Dholera SIR.",
    highlights: [
      "Strategic Location",
      "Modern Amenities",
      "High Investment Potential",
    ],
    image: "/images/dholera-projects-image.jpg",
  },
  {
    name: "WestWyn County",
    slug: "westwyn-county",
    status: "Available",
    description:
      "WestWyn County is a visionary plotted development that redefines investment in the heart of Dholera Smart City. Backed by DholeraGujarat.in, it offers a perfect blend of smart urban planning, nature, and futuristic infrastructure.",
    highlights: [
      "Located in the Activation Zone",
      "Plot sizes from 100 to 500 sq. yd.",
      "Immediate possession with legal clearances",
      "EV charging points and solar-ready design",
      "24x7 gated security and smart app-based management",
    ],
    image: "/images/westwyn-banner.jpg",
  },
];

export default function Projects() {
  const liveProject = projects.find((p) => p.name === "WestWyn County");

  return (
    <>
      <Head>
        <title>Dholera Gujarat Projects</title>
        <meta
          name="description"
          content="Explore the latest projects in Dholera Gujarat Smart City, including residential and commercial developments."
        />
        <link rel="canonical" href="https://yourdomain.com/projects" />
        <link rel="icon" href="/images/dholera_gujarat_logo.ico" />
        <meta property="og:title" content="Dholera Gujarat Projects" />
        <meta
          property="og:description"
          content="Explore the latest projects in Dholera Gujarat Smart City, including residential and commercial developments."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <div className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-black">
          <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>

          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-8 text-green-800 border-b-4 border-green-600 pb-2">
              Live Project
            </h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-72 w-full sm:h-96">
                <Image
                  src={liveProject.image}
                  alt={liveProject.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {/* Overlay with project status badge */}
                <span className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {liveProject.status}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-3 text-green-900">
                  {liveProject.name}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {liveProject.description}
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                  {liveProject.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="hover:text-green-700 transition-colors cursor-default"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/projects/${liveProject.slug}`}
                  className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:-translate-y-1"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{project.status}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
