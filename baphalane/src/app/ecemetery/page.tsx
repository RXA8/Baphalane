"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Grave } from "../../../lib/types";

import {
  CalendarDays,
  Grid3X3,
  Hash,
  Navigation,
  FileText,
  User
} from "lucide-react";

export default function ECemeteryPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Grave[]>([]);
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    return dateString.split("T")[0];
  };

  const handleSearch = async (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/graves/search?q=${value}`);
      const data: Grave[] = await res.json();
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div
        className="flex-1 bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage:
            "url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/ecemetery%20background/pexels-stywo-1261728.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Baphalane eCemetery
          </h1>

          <input
            type="text"
            placeholder="Search by first name or surname..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/30
                       focus:outline-none focus:ring-2 focus:ring-green-400
                       text-white placeholder-white/70 text-lg backdrop-blur-md
                       transition-all duration-300 mb-12"
          />

          {loading && (
            <p className="text-center text-lg animate-pulse">
              Searching cemetery records...
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {results.map((grave) => (
              <div
                key={grave.id}
                className="bg-white/10 border border-white/20 rounded-2xl p-6
                          backdrop-blur-md shadow-lg
                          transform transition-all duration-500
                          hover:scale-105 hover:-translate-y-2
                          hover:shadow-2xl hover:bg-white/20
                          cursor-pointer"
              >
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <User size={20} className="text-green-300" />
                  {grave.first_name} {grave.surname}
                </h2>

                <p className="text-sm opacity-90 flex items-center gap-2">
                  <CalendarDays size={16} />
                  Born: {formatDate(grave.date_of_birth)}
                </p>

                <p className="text-sm opacity-90 flex items-center gap-2">
                  <CalendarDays size={16} />
                  Died: {formatDate(grave.date_of_death)}
                </p>

                <p className="text-sm opacity-90 flex items-center gap-2">
                  <CalendarDays size={16} />
                  Burial: {formatDate(grave.date_of_burial)}
                </p>

                <div className="mt-4 text-sm space-y-2">
                  <p className="flex items-center gap-2">
                    <Grid3X3 size={16} />
                    Section: {grave.section}
                  </p>

                  <p className="flex items-center gap-2">
                    <Hash size={16} />
                    Row: {grave.row_number}
                  </p>

                  <p className="flex items-center gap-2">
                    <Hash size={16} />
                    Position: {grave.position_in_row}
                  </p>

                  <p className="flex items-center gap-2 mt-2">
                    <Navigation size={16} />
                    GPS: {grave._gps_location_latitude},{" "}
                    {grave._gps_location_longitude}
                  </p>

                  <p className="font-semibold mt-3 flex items-center gap-2">
                    <FileText size={16} />
                    Ref: {grave.grave_reference}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!loading && query && results.length === 0 && (
            <p className="text-center mt-8 text-lg opacity-80">
              No graves found.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}