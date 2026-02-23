"use client";

import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FileText } from "lucide-react";

const documents = [
  {
    title: "Bojating EIA & WUL Poster (Setswana)",
    url: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/informative%20documents/Bojating%20EIA%20and%20WUL%20Poster%20Setswana.pdf",
  },
  {
    title: "Bua Motlase – April 2022",
    url: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/informative%20documents/Bua%20Motlase%20_April%202022.pdf",
  },
  {
    title: "Bua Motlase – May 2022",
    url: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/informative%20documents/Bua%20Motlase%20May%202022.pdf",
  },
  {
    title: "Bua Motlase – September 2022",
    url: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/informative%20documents/Bua%20Motlase%20September%202022.pdf",
  },
  {
    title: "Bua Motlase – 28 September 2022",
    url: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/informative%20documents/Bua%20Motlase%2028%20September%202022.pdf",
  },
  {
    title: "Puo ya Maemo a Morafe (English)",
    url: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/informative%20documents/ENGLISH%20PUO%20YA%20MAEMO%20A%20MORAFE%20(1).pdf",
  },
  {
    title: "Annual Report 2025 / 2026",
    url: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/informative%20documents/REPORT%202025%20OR%2026%20Final.pdf",
  },
  {
    title: "Kgosi Kobeta Ramokoka Newspaper Extract",
    url: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/informative%20documents/Kgosi%20Kobeta%20Ramokoka%20Newspaper%20Extract.pdf"
  }
];

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources | Baphalane</title>
        <meta
          name="description"
          content="Explore documents relevant to the Baphalane Community."
        />
      </Head>

      <Navbar />

      <main className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Community Resources
          </h1>

          <p className="text-gray-600 mb-10 max-w-3xl">
            Access important reports, announcements, and community documents.
            All files open in a new tab for easy viewing or download.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 shadow hover:shadow-lg transition border"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-green-100 text-green-700">
                    <FileText className="w-6 h-6" />
                  </div>

                  <h3 className="text-gray-800 font-semibold group-hover:text-green-700 transition">
                    {doc.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  PDF document • Click to view
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
