"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Grave } from "../../../../lib/types";
import { CalendarDays, Grid3X3, Hash, Navigation, FileText, User } from "lucide-react";

export default function GraveDetailPage() {
  const params = useParams(); // gets the dynamic [id]
  const [grave, setGrave] = useState<Grave | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGrave = async () => {
      try {
        const res = await fetch(`/api/graves/${params.id}`);
        const data: Grave = await res.json();
        setGrave(data);
      } catch (err) {
        console.error("Failed to fetch grave:", err);
      }
      setLoading(false);
    };

    fetchGrave();
  }, [params.id]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    return dateString.split("T")[0];
  };

  if (loading) return <p className="text-center mt-20 text-lg animate-pulse">Loading grave details...</p>;
  if (!grave) return <p className="text-center mt-20 text-lg">Grave not found.</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div
        className="flex-1 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: "url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/ecemetery%20background/pexels-stywo-1261728.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-10 text-white">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <User size={28} className="text-green-300" />
            {grave.first_name} {grave.surname}
          </h1>

          <div className="space-y-3 text-lg">
            <p className="flex items-center gap-2"><CalendarDays size={18} /> Born: {formatDate(grave.date_of_birth)}</p>
            <p className="flex items-center gap-2"><CalendarDays size={18} /> Died: {formatDate(grave.date_of_death)}</p>
            <p className="flex items-center gap-2"><CalendarDays size={18} /> Burial: {formatDate(grave.date_of_burial)}</p>

            <p className="flex items-center gap-2"><Grid3X3 size={18} /> Section: {grave.section}</p>
            <p className="flex items-center gap-2"><Hash size={18} /> Row: {grave.row_number}</p>
            <p className="flex items-center gap-2"><Hash size={18} /> Position: {grave.position_in_row}</p>
            <p className="flex items-center gap-2"><Navigation size={18} /> GPS: {grave._gps_location_latitude}, {grave._gps_location_longitude}</p>
            <p className="flex items-center gap-2 font-semibold"><FileText size={18} /> Ref: {grave.grave_reference}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}