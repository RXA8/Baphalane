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
          <Link href="/council" className="hover:text-green-700">
            Council
          </Link>
          <Link href="/media" className="hover:text-green-700">
            Media
          </Link>
          <Link href="/about_us" className="hover:text-green-700">
            About
          </Link>

          {/* Hover-based Dropdown */}
          <div className="relative group">
            <button className="hover:text-green-700 focus:outline-none">
              Sub-Villages
            </button>
            <div className="absolute z-50 bg-white shadow-lg rounded-md invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/phadi" className="block px-1.5 py-2 hover:bg-green-100">
                Phadi
              </Link>
              <Link href="/mmorogong" className="block px-1.5 py-2 hover:bg-green-100">
                Mmorogong
              </Link>
              <Link href="/bojating" className="block px-1.5 py-2 hover:bg-green-100">
                Bojating
              </Link>
              <Link href="/phalane" className="block px-1.5 py-2 hover:bg-green-100">
                Phalane
              </Link>
            </div>
          </div>

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
          <Link href="/council" className="block">
            Council
          </Link>
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
            {subDropdownOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/phadi" className="block">
                  Phadi
                </Link>
                <Link href="/mmorogong" className="block">
                  Mmorogong
                </Link>
                <Link href="/bojating" className="block">
                  Bojating
                </Link>
                <Link href="/phalane" className="block">
                  Phalane
                </Link>
              </div>
            )}
          </div>
          <Link href="/#contact" className="block">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
