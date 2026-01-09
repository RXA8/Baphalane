"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="shadow-md top-0 z-50"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* ✅ Replace text with logo and green label */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Baphalane Logo Full Colour.png"
            alt="Baphalane Logo"
            width={60} // adjust size as needed
            height={60}
            priority
          />

          {/* Hover light green */}
          <span className="text-green-900 font-bold text-2xl md:text-3xl lg:text-3xl hover:text-green-700 transition-colors duration-100">
            Baphalane
          </span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7 text-black font-semibold items-center">
          <Link href="/media" className="hover:text-green-700">
            Media
          </Link>
          <Link href="/about_us" className="hover:text-green-700">
            About
          </Link>
          <Link href="/#contact" className="hover:text-green-700">
            Contact
          </Link>
          <Link href="/resources" className="hover:text-green-700">
            Resources
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-blue"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          bg-white
          text-black
          divide-y divide-gray-200
          rounded-b-xl
          shadow-md
          transform transition-all duration-300 ease-in-out
          ${menuOpen
            ? "max-h-64 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"}
        `}
      >
        <Link
          href="/media"
          className="block px-4 py-3 odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition"
        >
          Media
        </Link>

        <Link
          href="/about_us"
          className="block px-4 py-3 odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition"
        >
          About
        </Link>

        <Link
          href="/#contact"
          className="block px-4 py-3 odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition"
        >
          Contact
        </Link>

        <Link
          href="/resources"
          className="block px-4 py-3 odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition"
        >
          Resources
        </Link>
      </div>

    </header>
  );
}
