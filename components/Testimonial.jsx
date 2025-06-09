// components/Testimonial.jsx
"use client";

import React, { memo } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Real Estate Investor, Mumbai",
    quote: "Dholera is the best investment decision I’ve made. The infrastructure and growth potential are unmatched in India. I’ve already seen 2x return in just 3 years.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Meera Shah",
    role: "Tech Entrepreneur",
    quote: "We’re establishing our solar tech plant in Dholera. It’s a futuristic city with smart grids, dedicated industrial corridors, and zero red tape.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Anil Mehta",
    role: "NRI Investor, USA",
    quote: "Looking for a future-proof investment in India? Dholera is the answer. It’s smart, green, globally connected—and it's just getting started.",
    image: "/images/testimonial3.jpg",
  },
  {
    name: "Pooja Verma",
    role: "Architect, Ahmedabad",
    quote: "I was amazed by the eco-planning, walkable city design, and clean infrastructure. Dholera is the city India needs for its future.",
    image: "/images/testimonial4.jpg",
  },
  {
    name: "Sameer Khan",
    role: "Startup Founder",
    quote: "We're moving our HQ to Dholera. With smart facilities, high-speed internet, and a thriving business ecosystem—it’s a no-brainer.",
    image: "/images/testimonial5.jpg",
  },
  {
    name: "Neha Joshi",
    role: "Environmentalist",
    quote: "As someone who values sustainability, Dholera’s green cover, renewable energy systems, and water reuse plants won me over.",
    image: "/images/testimonial6.jpg",
  },
];

const Testimonial = () => {
  const animation = { duration: 1000, easing: (t) => t };

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      drag: false,
      slides: {
        perView: 3,
        spacing: 24,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 2, spacing: 16 },
        },
        "(max-width: 640px)": {
          slides: { perView: 1, spacing: 12 },
        },
      },
      created(slider) {
        slider.moveToIdx(0, true, animation);
      },
    },
    [
      (slider) => {
        let interval;

        function autoplay() {
          interval = setInterval(() => {
            slider.next();
          }, 3000);
        }

        slider.on("created", autoplay);
        slider.on("destroyed", () => clearInterval(interval));
      },
    ]
  );

  return (
    <section className="py-24 bg-gradient-to-br from-[#f0f4f8] via-[#d2e6f5] to-[#fefefe]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-500 to-indigo-400 drop-shadow">
          What Investors Say About Dholera
        </h3>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, idx) => (
            <div key={idx} className="keen-slider__slide px-2">
              <div className="transition-transform duration-500 hover:scale-[1.03] bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-200 p-6 text-center flex flex-col items-center">
                <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-teal-400 shadow mb-5">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                    quality={60}
                    priority={idx < 2} // prioritize only 1st 2 images
                  />
                </div>

                <p className="italic mb-4 text-gray-600 text-base leading-relaxed">
                  “{t.quote}”
                </p>

                <h4 className="text-lg font-semibold text-teal-700">
                  {t.name}
                </h4>
                <span className="text-sm text-sky-500 font-medium">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonial);
