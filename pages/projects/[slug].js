// pages/projects/[slug].js
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WestWynCounty from "@/components/projects/WestWynCounty";

const projects = [
  {
    name: "Paradise 2",
    slug: "paradise-2",
    status: "Sold Out",
    description:
      "Paradise 2 is a well-planned residential community located in the heart of the Dholera Special Investment Region (SIR), Gujarat...",
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
      "Orchid Township is a well-planned residential community located in the heart of the Dholera SIR...",
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
      "Paradise is a residential project offering a range of plot sizes...",
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
      "Maple is a residential project offering a range of plot sizes...",
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
      "Marina Bay is a residential project offering a range of plot sizes...",
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
      "WestWyn County is a visionary plotted development located in the Activation Zone of Dholera SIR...",
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

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    props: { project },
  };
}

export default function ProjectDetail({ project }) {
  // Special case for WestWyn County
  if (project.slug === "westwyn-county") {
    return (
      <>
        <Head>
          <title>WestWyn County – Premium Plots in Dholera</title>
          <meta
            name="description"
            content="WestWyn County offers NA/NOC-approved plots in Dholera Smart City. Immediate possession, trusted developer, gated community with modern amenities."
          />
          <link
            rel="canonical"
            href="https://dholeragujarat.in/projects/westwyn-county"
          />
        </Head>
        <WestWynCounty />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{project.name} - Dholera Project Details</title>
        <meta name="description" content={project.description} />
        <link
          rel="canonical"
          href={`https://dholeragujarat.in/projects/${project.slug}`}
        />
        <meta
          property="og:title"
          content={`${project.name} - Dholera Project`}
        />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta
          property="og:url"
          content={`https://dholeragujarat.in/projects/${project.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto bg-white rounded shadow p-6">
          <h1 className="text-4xl text-black font-bold mb-6">{project.name}</h1>
          <div className="relative w-full h-80 mb-6 rounded overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <h2 className="text-2xl text-black font-semibold mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-700">
            {project.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
