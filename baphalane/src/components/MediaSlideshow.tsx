"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function MediaSlideshow() {
    const router = useRouter();

  const images: string[] = [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/472620237_1197900345027420_8230794675843353623_n.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0005.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0035.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Heritage/Heritage%20event.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0000.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric%20awards%202/20260131_121034.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0011.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0023.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/IMG-20251217-WA0059.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0024.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0012.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/this.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20slideshow%20images/IMG-20260223-WA0027.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/this2.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0050.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric%20awards%202/20260131_112822.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20Foundation%20speech/IMG-20260223-WA0039.jpg",
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
      <div className="container mx-auto w-[100%]">

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
              <div
                onClick={() => router.push("/media")}
                className="absolute inset-0 overflow-hidden cursor-pointer"
               >
              <img
                src={img}
                alt="Gallery preview"
                className={`relative w-full h-full object-contain ${
                  index === currentIndex ? "animate-kenburns-pan" : ""
                }`}
              />
              </div>
            </div>
          ))}

          {/* Film grain */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Light sweep */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute w-1/3 h-full bg-white/10 blur-2xl animate-lightSweep"></div>
          </div>

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

            {/* Progress Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
            <div
                key={currentIndex} // restart animation each slide
                className="h-full bg-white animate-slide-progress"
            />
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

        @keyframes slideProgress {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
        }

        .animate-slide-progress {
        animation: slideProgress 6s linear forwards; /* match slide interval */
        }
      `}</style>
    </section>
  );
}