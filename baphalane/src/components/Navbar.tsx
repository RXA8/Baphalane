"use client";

import { useState } from "react";
import Link from "next/link";
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
      <Link href="/" className="text-2xl font-bold text-green-900 hover:text-green-700">
        Baphalane
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7 text-black font-semibold items-center">
          <Link href="#about" className="hover:text-green-700">About</Link>
          <Link href="#services" className="hover:text-green-700">Services</Link>
          <Link href="#news" className="hover:text-green-700">News</Link>
          <Link href="#events" className="hover:text-green-700">Events</Link>
          <Link href="#contact" className="hover:text-green-700">Contact</Link>

          {/* Hover-based Dropdown */}
          <div className="relative group">
            <button className="hover:text-green-700 focus:outline-none">
              Sub-Villages
            </button>
            <div className="absolute bg-white shadow-lg rounded-md invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ">
              <Link href="/phadi" className="block px-1.5 py-2 hover:bg-green-100">Phadi</Link>
              <Link href="/mmorogong" className="block px-1.5 py-2 hover:bg-green-100">Mmorogong</Link>
              <Link href="/bojating" className="block px-1.5 py-2 hover:bg-green-100">Bojating</Link>
              <Link href="/phalane" className="block px-1.5 py-2 hover:bg-green-100">Phalane</Link>
            </div>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-blue" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="md:hidden bg-white px-4 py-2 space-y-2 text-black">
        <Link href="#about" className="block">About</Link>
        <Link href="#services" className="block">Services</Link>
        <Link href="#news" className="block">News</Link>
        <Link href="#events" className="block">Events</Link>
        <Link href="#contact" className="block">Contact</Link>

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
            <Link href="/phadi" className="block">Phadi</Link>
            <Link href="/mmorogong" className="block">Mmorogong</Link>
            <Link href="/bojating" className="block">Bojating</Link>
            <Link href="/phalane" className="block">Phalane</Link>
            </div>
        )}
        </div>
    </div>
    )}

    </header>
  );
}
