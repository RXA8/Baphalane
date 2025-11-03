"use client";

import Footer from "../components/Footer";
import { supabase } from "../../lib/supabase";
import EventsSection from "../components/EventsSection";
import HeroSlideshow from "../components/HeroSlideshow";
import NewsCarousel from '../components/NewsCarousel'

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MapPin, Ruler, Users, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WeatherWidget from '@/components/WeatherWidget';
import RustenburgWeatherWidget from '@/components/RustenburgWeatherWidget';

import Link from "next/link";


export default function HomePage() {

  const events = [
    {
      title: "🌱LIMA Small, Medium, and Micro Enterprises meeting.",
      date: "October 29, 2025",
      description: "A meeting was held with LIMA for SMME mentoring in terms of training and support that can be provided to our local SMME's within Baphalane community.📈",
      imageUrl: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/smme%20meeting/IMG-20251029-WA0014.jpg", // Replace with your image path
    },
    {
      title: "📖Kwena-Tlase and Ramoroko Secondary School study packages distribution🖊️",
      date: "October 31, 2025",
      description: "Kgosi along with Mr Lentsoe Selloe from Zizwe visited Kwena-Tlase Secondary School and Ramoroko Secondary School to distribute study packages to Matric learners and also offer words of encouragement from Kgosi himself. ",
      imageUrl: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric%20message/Study%20pack%20event/IMG-20251103-WA0037.jpg", // Replace with your image path
    },
    {
      title: "🔵Heritage day competition⚪",
      date: "October 4, 2025",
      description: "🎉On the 4th of October 2025, a heritage day event was hosted by the Baphalane Traditional Council. A poetry and dance competition was held and cash prizes were given out. ✨",
      imageUrl: "https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/Heritage/Heritage%20event.jpg", // Replace with your image path
    },
  ];
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSuggestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
  
    try {
      const { error } = await supabase.from("community_suggestions").insert([
        {
          name: name || null,
          email: email || null,
          suggestion,
          category: category || null,
        },
      ]);
  
      if (error) {
        console.error("Supabase insert error:", error);
        setError(true);
      } else {
        setSuccess(true);
        setName("");
        setEmail("");
        setCategory("");
        setSuggestion("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError(true);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <HeroSlideshow />     {/* replaces the old static hero */}

      {/* About, Map & Weather */}
      <section id="about" className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Column 1: About Us */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">About Us</h3>
            <p className="text-gray-800 text-lg mb-6">
              Bakwena-ba-Phalane (Baphalane) are a Bakwena tribe of some 120 000 people spread amongst 8 villages, under the leadership of Kgosi JJEM Ramokoka. The Baphalane great place, or capital village is Ramokokastad. Baphalane are an offshoot of the Bakwena of Sechele in Molepolole in Botswana, and are of the same origins as the Bakwena-ba-Mogopa based in Bethanie.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 w-full">
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span><strong>Latitude:</strong> -25.157° S</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Ruler className="w-6 h-6 text-green-600" />
                <span><strong>Area:</strong> ~34 km²</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Users className="w-6 h-6 text-purple-600" />
                <span><strong>Population:</strong> ±12,000 (approx.)</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Globe className="w-6 h-6 text-orange-600" />
                <span><strong>Province:</strong> North West</span>
              </div>
            </div>

            {/* See More Link */}
            <div className="mt-6">
              <Link
                href="/about_us"
                className="text-green-700 hover:underline text-sm font-medium"
              >
                See more →
              </Link>
            </div>
          </div>

          {/* Column 2: Map */}
          <div className="w-full h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d26364.110278601107!2d27.432578687679342!3d-25.15423511830641!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1745575107425!5m2!1sen!2sza"
              className="w-full h-full rounded-md shadow-md border"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Column 3: Weather */}
          <div className="flex flex-col items-center justify-center text-center text-gray-700 gap-1">
            <WeatherWidget />
            <RustenburgWeatherWidget />
          </div>
        </div>
      </section>

      <section
        id="matric-message"
        className="relative flex justify-center items-center overflow-hidden bg-gray-100 h-auto"
      >
        {/* Blurred background extensions */}
        <div
          className="absolute inset-0 flex"
          aria-hidden="true"
        >
          {/* Left blur */}
          <div className="w-1/2 h-full bg-[url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric%20message/kgosi%20message.jpg')] bg-left bg-cover blur-2xl scale-110"></div>

          {/* Right blur */}
          <div className="w-1/2 h-full bg-[url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric%20message/kgosi%20message.jpg')] bg-right bg-cover blur-2xl scale-110"></div>
        </div>

        {/* Center image */}
        <div className="relative z-10 w-full max-w-4xl">
          <img
            src="https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric%20message/kgosi%20message.jpg"
            alt="Motivational message for Grade 12 learners"
            className="w-full h-1/2 object-contain mx-auto"
          />
        </div>
      </section>

        
      {/* News */}
      <section id="news" className=" bg-gray-100 py-5 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-5 text-center text-gray-800">Latest News</h3>
          <NewsCarousel />
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-gray-200 py-8">
        <EventsSection events={events} />
      </section>


      {/* Contact */}
      <section id="contact" className="bg-gray-700 py-4 px-4 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-1">

            {/* Contact Info + Subscribe */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-6">Have questions or need more info? We are here to help.</p>

            {/* Info */}
            <div className="mb-6 space-y-2 text-sm text-gray-200">
              <p><strong>Address:</strong> Ramokokastad, Moses Kotane, South Africa, 0388</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:admin@baphalane.org" className="underline text-blue-200 hover:text-white">
                  admin@baphalane.org.za
                </a>
              </p>
              <p>
                <strong>Office:</strong>{' '}
                <a href="tel:+27122440006" className="underline text-blue-200 hover:text-white">
                  +27 12 244 0006
                </a>
              </p>
              <p><strong>PO Box:</strong> P.O Box 200 Ramokokastad 0195</p>
            </div>


            {/* Social Media */}
            <div className="mt-auto">
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/people/Baphalane-Traditional-Council/61580703593131/" className="flex items-center gap-1 hover:underline">
                  <FaFacebook className="text-white" /> Facebook
                </a>
                <a href="https://www.instagram.com/wearebaphalane/?g=5" className="flex items-center gap-1 hover:underline">
                  <FaInstagram className="text-white" /> Instagram
                </a>
              </div>
            </div>

          </div>

        {/* Responsive Divider */}
        <div className="flex md:flex-col items-center self-stretch w-full md:w-auto md:self-stretch my-4 md:my-0">
          {/* Actual line */}
          <div className="bg-gray-400 w-full h-px md:w-px md:h-full md:mr-13" />
        </div>

       
        {/* Suggestion Box */}
        <div className="md:w-1/2 max-w-md mx-auto md:mx-0 bg-white text-black rounded-lg shadow-md p-4 w-full">
          <h4 className="text-lg font-semibold mb-3 text-blue-700">Send Us a Suggestion</h4>
          <form className="space-y-3" onSubmit={handleSuggestionSubmit}>
            <Input
              type="text"
              placeholder="Name (optional)"
              className="w-full h-8 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email (optional)"
              className="w-full h-8 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-blue-700 text-white hover:bg-blue-800 w-full text-sm py-2"
            >
              Submit
            </Button>

            {success && (
              <p className="text-green-600 text-sm text-center">Thank you for your suggestion!</p>
            )}
            {error && (
              <p className="text-red-600 text-sm text-center">Oops, something went wrong. Try again.</p>
            )}
          </form>
        </div>


          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}
