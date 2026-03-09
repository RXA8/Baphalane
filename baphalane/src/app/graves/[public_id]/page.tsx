// app/graves/[public_id]/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pool from "../../../../lib/db";
import GraveClient from "./GraveClient";
import { RowDataPacket } from "mysql2";

// Convert full name to initials (e.g., "Jane Joe Joy" -> "J.J.J")
function getInitials(fullName: string): string {
  if (!fullName) return "";

  return fullName
    .trim()
    .split(/\s+/)
    .map((name) => name[0].toUpperCase())
    .join(".");
}

// Fetch grave info by public_id
async function getGrave(public_id: string) {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `
      SELECT
        public_id,
        first_name,
        surname,
        date_of_burial
      FROM cemetery_graves
      WHERE public_id = ?
      LIMIT 1
      `,
      [public_id]
    );

    if (rows.length === 0) return null;

    const row = rows[0];

    return {
      public_id: row.public_id,
      initials: getInitials(row.first_name),
      surname: row.surname,
      date_of_burial: row.date_of_burial,
    };
  } catch (error) {
    console.error("Database error:", error);
    return null;
  }
}

export default async function GravePage({
  params,
}: {
  params: Promise<{ public_id: string }>; // 1. Wrap in Promise
}) {
  // 2. Await the params before accessing public_id
  const { public_id } = await params;
  
  // Now pass the unwrapped string to your fetcher
  const grave = await getGrave(public_id);

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
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="relative z-10 flex items-center justify-center p-6">
          {grave ? (
            <GraveClient grave={grave} />
          ) : (
            <div className="text-white text-xl">Grave not found.</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}