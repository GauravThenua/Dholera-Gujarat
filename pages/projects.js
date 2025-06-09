// pages/projects.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

const projects = [
  {
    name: 'Paradise 2',
    slug: 'paradise-2',
    status: 'Sold Out',
    description:
      'Paradise 2 is a well-planned residential community located in the heart of the Dholera Special Investment Region (SIR), Gujarat. This project offers thoughtfully designed residential plots tailored to meet the demands of modern living.',
    highlights: [
      'Prime Location within Dholera SIR',
      'Varied Plot Sizes',
      'Well-Planned Infrastructure',
    ],
    image: '/images/dholera-projects-image.jpg',
  },
  {
    name: 'Orchid Township',
    slug: 'orchid-township',
    status: 'Sold Out',
    description:
      'Orchid Township is a well-planned residential community located in the heart of the Dholera Special Investment Region (SIR), Gujarat. This project offers thoughtfully designed residential plots tailored to meet the demands of modern living.',
    highlights: [
      'Prime Location within Dholera SIR',
      'Varied Plot Sizes',
      'Well-Planned Infrastructure',
    ],
    image: '/images/dholera-projects-image.jpg',
  },
  {
    name: 'Paradise',
    slug: 'paradise',
    status: 'Sold Out',
    description:
      'Paradise is a residential project offering a range of plot sizes to suit different needs, situated within the Dholera SIR.',
    highlights: [
      'Strategic Location',
      'Modern Amenities',
      'High Investment Potential',
    ],
    image: '/images/dholera-projects-image.jpg',
  },
  {
    name: 'Maple',
    slug: 'maple',
    status: 'Sold Out',
    description:
      'Maple is a residential project offering a range of plot sizes to suit different needs, situated within the Dholera SIR.',
    highlights: [
      'Strategic Location',
      'Modern Amenities',
      'High Investment Potential',
    ],
    image: '/images/dholera-projects-image.jpg',
  },
  {
    name: 'Marina Bay',
    slug: 'marina-bay',
    status: 'Sold Out',
    description:
      'Marina Bay is a residential project offering a range of plot sizes to suit different needs, situated within the Dholera SIR.',
    highlights: [
      'Strategic Location',
      'Modern Amenities',
      'High Investment Potential',
    ],
    image: '/images/dholera-projects-image.jpg',
  },
  {
    name: 'WestWyn County',
    slug: 'westwyn-county',
    status: 'Available',
    description:
      'WestWyn County is a visionary plotted development that redefines investment in the heart of Dholera Smart City. Backed by BookMyAssets, it offers a perfect blend of smart urban planning, nature, and futuristic infrastructure.',
    highlights: [
      'Located in the Activation Zone',
      'Plot sizes from 100 to 500 sq. yd.',
      'Immediate possession with legal clearances',
      'EV charging points and solar-ready design',
      '24x7 gated security and smart app-based management',
    ],
    image: '/images/dholera-projects-image.jpg',
  },
];

export default function Projects() {
  const liveProject = projects.find(p => p.name === 'WestWyn County');

  return (
    <>
      <Head>
        <title>{`Dholera Smart City Projects`}</title>
        <meta name="description" content="Explore the latest projects in Dholera Smart City, including residential and commercial developments." />
        <link rel="canonical" href="https://yourdomain.com/projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <div className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-black">
          <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>

          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-green-700">Live Project</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={liveProject.image}
                  alt={liveProject.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-green-700">{liveProject.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{liveProject.status}</p>
                <p className="text-gray-700 mb-4">{liveProject.description}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {liveProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                <Link href={`/projects/${liveProject.slug}`} legacyBehavior>
                  <a className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition">View Details</a>
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                  <p className="text-sm text-gray-500 mb-4">{project.status}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                  <Link href={`/projects/${project.slug}`} legacyBehavior>
                    <a className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">View Details</a>
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
