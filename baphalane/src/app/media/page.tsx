// app/media/page.tsx (or pages/media/index.tsx depending on your setup)
"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
// import Bojating from "../bojating/page";

// ✅ Image collections grouped into arrays
const imageCollections: Record<string, string[]> = {
  Phadi: [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0003.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0004.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0006.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0009.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0010.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0013.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0015.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0016.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0023.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250911-WA0024.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/phadi/IMG-20250922-WA0019.jpg",
  ],
  Bojating: [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250911-WA0005.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250911-WA0007.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250911-WA0018.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250911-WA0018.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250911-WA0019.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250911-WA0020.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250911-WA0021.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250911-WA0022.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250922-WA0023.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250922-WA0024.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250922-WA0030.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/bojating/IMG-20250922-WA0031.jpg",
  ],
  Ramokokastad: [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0010.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0011.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0013.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0015.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0016.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0017.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0018.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0019.jpg",
  ],
};

// ✅ Helper: flatten all arrays into one
const allImages = Object.values(imageCollections).flat();

export default function Media() {
  const [filter, setFilter] = useState("All");

  // ✅ Decide which images to show
  const imagesToShow =
    filter === "All" ? allImages : imageCollections[filter] || [];

  return (
    <>
      <Head>
        <title>Media | Baphalane</title>
        <meta
          name="description"
          content="Explore images and media from the Baphalane Community."
        />
      </Head>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Media</h1>
          <p className="text-lg text-gray-600">
            Browse through our photo collections
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === "All"
                ? "bg-green-700 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {Object.keys(imageCollections).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === category
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagesToShow.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`Media ${idx}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
