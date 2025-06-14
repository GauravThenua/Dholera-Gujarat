// pages/blog.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    title: "Why Dholera is India’s Smart City of the Future",
    slug: "dholera-smart-city",
    excerpt: "Explore why Dholera is emerging as India's top smart city destination and why investors are rushing in.",
    image: "/images/blog/blog1.jpeg",
    date: "June 10, 2025",
    author: "Admin",
  },
  {
    title: "Top 5 Real Estate Projects in Dholera You Should Know",
    slug: "top-real-estate-projects",
    excerpt: "From Paradise 2 to WestWyn County — here are the must-know investment opportunities in Dholera.",
    image: "/images/blog/blog2.jpeg",
    date: "June 5, 2025",
    author: "Admin",
  },
  {
    title: "How the Dholera SIR is Transforming Gujarat’s Economy",
    slug: "dholera-sir-economy",
    excerpt: "Learn how Dholera’s Special Investment Region is becoming a major industrial and tech hub in India.",
    image: "/images/blog/blog3.jpeg",
    date: "June 1, 2025",
    author: "Admin",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Dholera Gujarat</title>
        <meta
          name="description"
          content="Latest insights, news and investment guides about Dholera Smart City and real estate."
        />
      </Head>
      <Navbar/>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Dholera Smart City Blog
        </h1>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div>
                <div className="relative w-full h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.date} • {post.author}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-blue-600 font-medium">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}
