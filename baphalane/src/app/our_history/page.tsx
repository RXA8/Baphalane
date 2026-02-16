"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HistoryPage() {
  const pdfUrl =
    "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/history/History%20of%20baphalane.pdf";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="bg-green-900 text-white py-12 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="text-sm text-green-200 hover:text-white transition"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold mt-4">
            History of the Baphalane People
          </h1>

          <p className="mt-3 text-green-100 max-w-2xl">
            Explore a comprehensive historical document detailing the origins,
            leadership, cultural heritage, and journey of the Baphalane nation.
            This archive preserves our history for present and future generations.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href={pdfUrl}
              target="_blank"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-lg shadow transition"
            >
              Open in New Tab
            </a>

            <a
              href={pdfUrl}
              download
              className="border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black px-5 py-2 rounded-lg transition"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-1 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Document Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            
            {/* Card Header */}
            <div className="bg-green-800 text-white px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                Historical Archive Document
              </h2>
              <span className="text-sm text-green-200">
                Official Record
              </span>
            </div>

            {/* PDF Viewer */}
            <div className="p-4">
              <iframe
                src={pdfUrl}
                className="w-full h-[80vh] rounded-lg border"
                title="Baphalane History PDF"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-green-900">
              Preserving Our Heritage
            </h3>
            <p className="text-gray-600 mt-3">
              This document serves as an important record of the Baphalane identity,
              traditions, and leadership lineage, ensuring future generations remain connected
              to their roots.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
