// pages/gallery.js
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';

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
      "WestWyn County is a visionary plotted development that redefines investment in the heart of Dholera Smart City. Backed by BookMyAssets, it offers a perfect blend of smart urban planning, nature, and futuristic infrastructure.",
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

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - Dholera Projects</title>
        <meta
          name="description"
          content="Explore our premium real estate projects in Dholera with visual highlights and development features."
        />
      </Head>
        <Navbar/>
      <main className="min-h-screen bg-white px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          View Projects Gallery 
        </h1>

        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image with title overlay */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                <div className="absolute inset-0 bg-black/10 bg-opacity-10 flex items-center justify-center">
                  <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
                    {project.name}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className="px-2 md:px-4 text-gray-800">
                <h3 className="text-2xl font-semibold">
                  {project.status} – {project.name}
                </h3>
                <p className="mt-3 text-lg">{project.description}</p>
                <ul className="list-disc list-inside mt-4 space-y-1 text-gray-700">
                  {project.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}
