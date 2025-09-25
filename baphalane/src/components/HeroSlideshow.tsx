"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const images = [
  "/IMG-20250922-WA0030.jpg",
  "/IMG-20250922-WA0031.jpg",
  "/IMG-20250923-WA0009.jpg",
  "/IMG-20250923-WA0017.jpg",
  "/IMG-20250925-WA0018.jpg"

];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] flex flex-col">
      {/* Slideshow Background */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar (overlays slideshow) */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <section className="relative z-20 h-[60vh] flex items-center justify-start px-6">
        <div className="rounded-xl p-8 lg:w-1/2 md:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left text-white drop-shadow-lg">
            Welcome to the Baphalane Website
          </h2>
          <p className="text-lg md:text-3xl text-left text-white drop-shadow-md">
            Empowering our people. <br /> Enriching our future.
          </p>
        </div>
      </section>
    </div>
  );
}
