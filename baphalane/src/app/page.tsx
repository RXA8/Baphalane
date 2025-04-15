"use client";
// import { supabase } from "../../lib/supabase";



import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { useRef } from "react";


const services = [
  "Housing",
  "Health & Wellness",
  "Youth Programs",
  "Education",
  "Entrepreneurship",
  "Community Safety",
];



export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div
        className="relative bg-cover bg-center md:bg-[url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/background-images//back.jpg')] bg-[url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/background-images//pexels-freestockpro-321542.jpg')]"
      >

        <div className="">
          {/* Header */}
          <header className="shadow-md sticky top-0 z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            <div className="container mx-auto px-4 py-4 flex items-left justify-between">
              <h1 className="text-2xl font-bold text-green-900">Baphalane🐊</h1>
              <nav className="hidden md:flex gap-7 text-black font-semibold">
                <Link href="#about" className="hover:text-green-700">About</Link>
                <Link href="#services" className="hover:text-green-700">Services</Link>
                <Link href="#news" className="hover:text-green-700">News</Link>
                <Link href="#events" className="hover:text-green-700">Events</Link>
                <Link href="#contact" className="hover:text-green-700 ">Contact</Link>
              </nav>
              <button className="md:hidden text-blue" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
            {menuOpen && (
              <div className="md:hidden bg-white bg-opacity-50 px-4 py-2 space-y-4 text-black ">
                <Link href="#about" className="block">About</Link>
                <Link href="#services" className="block">Services</Link>
                <Link href="#news" className="block">News</Link>
                <Link href="#events" className="block">Events</Link>
                <Link href="#contact" className="block">Contact</Link>
              </div>
            )}
          </header>

          {/* Hero Section */}
          <section className="h-[55vh] flex items-center justify-start  px-2">
            {/* The text below should only take up 50% of the width */}
            <div className=" rounded-xl p-8 lg:w-1/2 md:w-1/2 w-full ">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left font md:text-black text-white ">Welcome to the Baphalane Community Website</h2>
              <p className="text-lg md:text-3xl text-left text-white md:text-black">Empowering our people. <br />Enriching our future.</p>
            </div>
          </section>


          </div>
      </div>

          {/* About Section */}
          <section id="about" className="container mx-auto py-16 px-4 text-center ">
            <h3 className="text-3xl font-semibold mb-6 text-green-700">About Us</h3>
            <p className="max-w-3xl mx-auto text-2xl text-gray-700">
              The Baphalane community is committed to fostering growth, unity, sustainability and development for all its members. We strive to provide transparent services and engage our people in shaping a better future.
            </p>
          </section>
        


      {/* Services */}
      
      <section id="services" className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center text-green-700">Our Services</h3>

          <div className="relative">
            {/* Scroll Buttons */}
            <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
          >
          <ChevronLeft className="text-blue-600" />
          </button>   

            <button
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
            >
              <ChevronRight className="text-blue-600" />
            </button>


            {/* Carousel */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar px-10"
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-[280px] max-w-[300px] flex-shrink-0">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-blue-600">{service}</h4>
                      <p className="text-gray-600 text-sm">
                        Learn more about our {service.toLowerCase()} initiatives and how they benefit the community.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center text-green-700">Latest News</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "New Clinic Opens in Community",
                image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
              },
              {
                title: "Education Grant Applications Now Open",
                image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
              },
              {
                title: "Water Supply Upgrades Underway",
                image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${news.image})` }}
              >
                <div className="absolute bottom-0 w-full bg-gray-500 bg-opacity-60 text-white p-4">
                  <h4 className="text-lg font-bold">{news.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Events */}
      <section id="events" className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center text-green-700">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-">
                <h4 className="font-bold text-lg">Community Clean-Up Day</h4>
                <p className="text-gray-600">Join us for a day dedicated to cleaning our streets and parks. Volunteers welcome!</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg">Youth Soccer Tournament</h4>
                <p className="text-gray-600">Come support our local youth teams as they compete in a fun, friendly tournament.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-">
                <h4 className="font-bold text-lg">Community Clean-Up Day</h4>
                <p className="text-gray-600">Join us for a day dedicated to cleaning our streets and parks. Volunteers welcome!</p>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="bg-gray-600 py-16 px-4 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-1">

            {/* Contact Info + Subscribe */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-6">Have questions or need more info? We are here to help.</p>

            {/* Dummy Info */}
            <div className="mb-6 space-y-2 text-sm text-gray-200">
              <p><strong>Address:</strong> Ga Ramokoka, Ramokokastad, 0388, South Africa, Moses Kotane, South Africa, 0388</p>
              <p><strong>Email:</strong> admnin@baphalane.org</p>
              <p><strong>Office:</strong> +27 83 952 2872</p>
            </div>

            {/* Social Media */}
            <div className="mb-6 flex gap-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/p/Bua-Motlase-100077121870361/" className="flex items-center gap-1 hover:underline">
                <FaFacebook className="text-white" /> Facebook
              </a>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <FaInstagram className="text-white" /> Instagram
              </a>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <FaTwitter className="text-white" /> Twitter
              </a>
            </div>

          </div>


            {/* Suggestion Box */}
            <div className="md:w-1/2 max-w-md mx-auto md:mx-0 bg-white text-black rounded-lg shadow-md p-4 w-full">
              <h4 className="text-lg font-semibold mb-3 text-blue-700">Send Us a Suggestion</h4>
              <form className="space-y-3">
                <Input
                  type="text"
                  placeholder="Name (optional)"
                  className="w-full h-8 text-sm"
                />
                <Input
                  type="email"
                  placeholder="Email (optional)"
                  className="w-full h-8 text-sm"
                />
                <select
                  className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700"
                >
                  <option value="">Select a category</option>
                  <option value="health">Health</option>
                  <option value="housing">Housing</option>
                  <option value="events">Events</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Your suggestion..."
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700"
                  required
                />
                <Button
                  type="submit"
                  className="bg-blue-700 text-white hover:bg-blue-800 w-full text-sm py-2"
                >
                  Submit
                </Button>
              </form>
            </div>

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
