"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function MediaSlideshow() {
  const images: string[] = [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/472620237_1197900345027420_8230794675843353623_n.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0000.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0023.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0024.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0026.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0027.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0044.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0047.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef<number | null>(null);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!startX.current) return;
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();
    startX.current = null;
  };

  return (
    <section className="bg-white py-14 px-4">
      <div className="container mx-auto max-w-5xl">

        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-gray-800">
            View Our Gallery
          </h3>
          <p className="text-gray-500 mt-2">
            Explore moments, events, and highlights from our community
          </p>
        </div>

        <div
          className="relative w-full h-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black group"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* Slides */}
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0"
              }`}
            >
              {/* Blur background */}
              <div
                className="absolute inset-0 scale-110 blur-3xl opacity-70"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

              {/* Main image */}
              <img
                src={img}
                alt="Gallery preview"
                className={`relative w-full h-full object-contain ${
                  index === currentIndex ? "animate-kenburns-pan" : ""
                }`}
              />
            </div>
          ))}

          {/* Film grain */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Light sweep */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute w-1/3 h-full bg-white/10 blur-2xl animate-lightSweep"></div>
          </div>

          {/* CTA */}
          <Link href="/media" className="absolute inset-0 flex items-center justify-center z-20">
            <span className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-medium group-hover:bg-green-800 transition">
              Open Gallery →
            </span>
          </Link>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full px-3 py-2 z-20"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full px-3 py-2 z-20"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes kenburnsPan {
          0% { transform: scale(1) translateX(-1%); }
          50% { transform: scale(1.05) translateX(1%); }
          100% { transform: scale(1.08) translateX(0); }
        }

        .animate-kenburns-pan {
          animation: kenburnsPan 6s ease-in-out forwards;
        }

        @keyframes lightSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }

        .animate-lightSweep {
          animation: lightSweep 8s linear infinite;
        }
      `}</style>
    </section>
  );
}