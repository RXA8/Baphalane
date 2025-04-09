"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link"; 

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">Baphalane Community</h1>
          <nav className="hidden md:flex gap-6 text-gray-700">
            <Link href="#about" className="hover:text-blue-600">About</Link>
            <Link href="#services" className="hover:text-blue-600">Services</Link>
            <Link href="#news" className="hover:text-blue-600">News</Link>
            <Link href="#events" className="hover:text-blue-600">Events</Link>
            <Link href="#contact" className="hover:text-blue-600">Contact</Link>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
            <Link href="#about" className="block">About</Link>
            <Link href="#services" className="block">Services</Link>
            <Link href="#news" className="block">News</Link>
            <Link href="#events" className="block">Events</Link>
            <Link href="#contact" className="block">Contact</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-[url('/hero.jpg')] h-[70vh] flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-50 p-6 rounded-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the Baphalane Community</h2>
          <p className="text-lg md:text-xl">Empowering our people. Enriching our future.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-blue-700">About Us</h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          The Baphalane community is committed to fostering growth, unity, and development for all its members. We strive to provide transparent services and engage our people in shaping a better future.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center text-blue-700">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Housing', 'Health & Wellness', 'Youth Programs'].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-blue-600">{service}</h4>
                  <p className="text-gray-600 text-sm">
                    Learn more about our {service.toLowerCase()} initiatives and how they benefit the community.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center text-blue-700">Latest News</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg">Community Clean-Up Drive</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Join us this weekend to help keep our neighborhoods clean and safe for everyone.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg">Youth Empowerment Workshop</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Register for our upcoming workshop focusing on skill development and job readiness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6 text-blue-700">Upcoming Events</h3>
          <p className="text-gray-700">Stay up-to-date with community events, gatherings, and important dates.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-700 py-16 px-4 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-4">Have questions or need more info? We are here to help.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Input placeholder="Your email address" className="w-full md:w-auto text-black" />
            <Button variant="secondary" className="bg-white text-blue-700 hover:bg-gray-200">
              <Mail className="mr-2" size={16} /> Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Baphalane Community. All rights reserved.</p>
      </footer>
    </div>
  );
}
