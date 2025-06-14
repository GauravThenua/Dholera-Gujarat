// components/HeroSlider.jsx
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    img: '/images/slider/slider1.png',
    title: 'Real Estate that Reflects Your Vision',
    subtitle: 'Welcome to DholeraGujarat.in',
    text: 'Crafted with Care, Delivered with Precision - in Dholera Smart City',
    alt: 'Aerial view of real estate in Dholera Smart City',
  },
  {
    img: '/images/slider/westwyngate.png',
    title: 'Our Blueprint to Build Your Dream',
    subtitle: 'Welcome to DholeraGujarat.in',
    text: 'Delivering Spaces That Inspire & Empower',
    alt: 'Clubhouse view of Westwyn Gate in Dholera',
  },
  {
    img: '/images/slider/paradise2.png',
    title: 'Driving the Growth of Dholera Smart City',
    subtitle: 'Welcome to DholeraGujarat.in',
    text: 'Turning Ideas into Iconic Landmarks',
    alt: 'Entry gate of Paradise 2 real estate project',
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0} // prioritize the first image for LCP
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-bold px-4">
                <div className="p-8 rounded-xl max-w-2xl text-center space-y-4">
                  <div className="text-lg tracking-wider uppercase">{slide.subtitle}</div>
                  <h2 className="text-3xl font-bold">{slide.title}</h2>
                  <p className="italic text-lg">{slide.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </section>
  );
}
