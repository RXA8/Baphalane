// app/media/page.tsx
"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

// 📌 IMAGE COLLECTIONS (edit this anytime)
const imageCollections: Record<string, string[]> = {
  "Matric Study Pack Day": [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0003.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0005.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0006.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0008.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0009.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0011.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0012.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0015.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0020.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0026.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0027.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0028.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/IMG-20251103-WA0035.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric/WhatsApp%20Image%202025-10-31%20at%2020.00.26_1764866e.jpg",
  ],
  
  "Kgosi Ramokoka Radio Interview": [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/kgosi%20radio/IMG-20251107-WA0003.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/kgosi%20radio/IMG-20251107-WA0005.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/kgosi%20radio/IMG-20251107-WA0006.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/kgosi%20radio/IMG-20251107-WA0007.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/kgosi%20radio/IMG-20251107-WA0008.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/kgosi%20radio/IMG-20251107-WA0009.jpg",
  ],

  "Food parcel handout for holidays": [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/20251217-104830.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/20251217-104851.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/20251217-104854.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/20251217-105044.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/IMG-20251217-WA0059.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/IMG-20251217-WA0061.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/IMG-20251217-WA0066.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/IMG-20251217-WA0067.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/IMG-20251218-WA0046.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/food%20parcels/IMG-20251219-WA0005.jpg",
  ],

  "Phadi SANDF meeting": [
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
  "Bojating SANDF meeting": [
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
  "Ramokokastad SANDF meeting": [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0010.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0011.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0013.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0015.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0016.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0017.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0018.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/SANDF/ramokokastad/IMG-20250923-WA0019.jpg",
  ],
  "Minister of electricity and energy and Education MEC visit to Phalane": [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0001.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0002.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0003.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0004.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0005.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0006.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0007.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0008.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0009.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0010.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0011.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Eskom%20event/IMG-20260223-WA0012.jpg",
  ],

  "Kgosi JEM Ramokoka at YOU FM": [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20you%20fm/IMG-20260223-WA0021.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20you%20fm/IMG-20260223-WA0028.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20you%20fm/IMG-20260223-WA0031.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20you%20fm/IMG-20260223-WA0041.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20you%20fm/IMG-20260223-WA0042.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20you%20fm/IMG-20260223-WA0045.jpg",
  ],

  "Kgosi giving a speech for Kgosi KA Ramokoka foundation": [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20Foundation%20speech/IMG-20260223-WA0038.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20Foundation%20speech/IMG-20260223-WA0039.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20Foundation%20speech/IMG-20260223-WA0043.jpg",
  ],

  "Kgosi Ramokoka at Bakwena ba Mogopa water reticulation system launch": [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20water%20and%20sanitation%20event/IMG-20260223-WA0013.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20water%20and%20sanitation%20event/IMG-20260223-WA0014.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20water%20and%20sanitation%20event/IMG-20260223-WA0015.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20water%20and%20sanitation%20event/IMG-20260223-WA0016.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Kgosi%20water%20and%20sanitation%20event/IMG-20260223-WA0017.jpg",
  ],

  "Baphalane clinic world AIDS day event": [
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0036.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0040.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0046.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0050.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0054.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0057.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0062.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0062.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0069.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0075.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0087.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0091.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0091.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0093.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0095.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0103.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0107.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0109.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0111.jpg",
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/World%20AIDS%20day/IMG-20251205-WA0117.jpg",
  ],


};

// Flatten all images
const allImages = Object.values(imageCollections).flat();

export default function Media() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

      <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Media</h1>
          <p className="text-lg text-gray-600">
            Browse through our community photo collections
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("All")}
            className={`px-5 py-2 rounded-lg font-semibold transition ${
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
              className={`px-5 py-2 rounded-lg font-semibold transition ${
                filter === category
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* EMPTY STATE */}
        {imagesToShow.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No images available for <strong>{filter}</strong> yet.
          </p>
        )}

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {imagesToShow.map((src, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(src)}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Image
                src={src}
                alt={`Media ${idx}`}
                fill
                loading="lazy"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </main>

      {/* 🔍 LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full h-[80vh]">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain rounded-lg"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold shadow"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
