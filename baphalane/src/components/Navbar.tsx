"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);

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
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 text-black">
          <Link href="/media" className="block">
            Media
          </Link>
          <Link href="/about_us" className="block">
            About
          </Link>

          {/* Toggleable Mobile Dropdown */}
          <div>
            <button
              className="font-semibold w-full text-left"
              onClick={() => setSubDropdownOpen(!subDropdownOpen)}
            >
              Sub-Villages
            </button>
            
          </div>
          <Link href="/#contact" className="block">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
