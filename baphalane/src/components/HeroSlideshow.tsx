"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const slides = [
  {
    src: "/IMG-20250922-WA0030.jpg",
    title: "Welcome to the Baphalane Website",
    subtitle: "Empowering our people. Enriching our future.",
  },
  {
    src: "/Screenshot 2025-11-03 113432.png",
    title: "Celebrating Our Heritage",
    subtitle: "Preserving culture, building unity.",
  },
  {
    src: "/IMG-20250923-WA0009.jpg",
    title: "Strength in Community",
    subtitle: "Together we grow stronger.",
  },
  {
    src: "/IMG-20251103-WA0008.jpg",
    title: "Future Generations",
    subtitle: "Creating opportunities for tomorrow.",
  },
  {
    src: "/IMG-20251103-WA0035.jpg",
    title: "A brighter tomorrow",
    subtitle: "Investing in youth and education.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] flex flex-col">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background */}
          <Image
            src={slide.src}
            alt={`Slide ${index}`}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content */}
          <div className="relative z-20 h-full flex items-center justify-start px-6">
            <div className="rounded-xl p-8 lg:w-1/2 md:w-1/2 w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left text-white drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-3xl text-left text-white drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navbar (always above all slides) */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Navbar />
      </div>
    </div>
  );
}
