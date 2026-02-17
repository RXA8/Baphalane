"use client";

import Footer from "../components/Footer";
import WelcomeMessage from "../components/WelcomeMessage";
import { supabase } from "../../lib/supabase";
import EventsSection from "../components/EventsSection";
import HeroSlideshow from "../components/HeroSlideshow";
import NewsCarousel from '../components/NewsCarousel'
import { useEffect, useRef } from "react";


import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MapPin, Ruler, Users, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WeatherWidget from '@/components/WeatherWidget';
import { Leaf, Sprout, HandHeart } from "lucide-react";
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

  const solarSectionRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && iframeRef.current) {
            iframeRef.current.src =
              "https://www.youtube.com/embed/AD-F5NULDeQ?autoplay=1&mute=1&start=320&enablejsapi=1";
          }
        });
      },
      { threshold: 0.5 }
    );

    if (solarSectionRef.current) {
      observer.observe(solarSectionRef.current);
    }

    return () => {
      if (solarSectionRef.current) {
        observer.unobserve(solarSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <HeroSlideshow />     {/* replaces the old static hero */}

      <div className="bg-white md:py-2">
        <WelcomeMessage />
      </div>

      {/* About, Map & Weather */}
      <section id="about" className="container mx-auto px-4 py-6">
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
                <span><strong>Population:</strong> ±120,000 (approx.)</span>
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

      {/* Baphalane Solar Farm Section */}
      <section
        id="solar-farm"
        ref={solarSectionRef}
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/solar%20project%20background/pexels-quang-nguyen-vinh-222549-6876536.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay to darken background for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto max-w-6xl relative z-10">

          {/* Heading */}
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Baphalane Solar Farm Project
            </h2>
            <p className="text-green-200 font-medium">
              100MW Solar PV Renewable Energy Initiative
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Video LEFT */}
            <div className="rounded-2xl overflow-hidden shadow-xl bg-black/50 p-3">
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/AD-F5NULDeQ?start=320&enablejsapi=1&autoplay=1"
                className="w-full h-[260px] md:h-[420px] rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            {/* Text RIGHT */}
            <div className="bg-black/50 rounded-2xl shadow-lg p-8 md:p-10 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                About the Project
              </h3>

              <p className="text-white/90 leading-relaxed mb-4">
                The Baphalane Traditional Council, in partnership with Fairmont Capital,
                has identified renewable energy as a stable and strategic investment
                opportunity. The 100MW Solar PV project aims to generate clean energy,
                create local employment opportunities, and stimulate economic growth.
              </p>

              <p className="text-white/90 leading-relaxed">
                The project incorporates Agrivoltaics (APV), combining agriculture with
                solar infrastructure to maximise land use while supporting farming and
                community livelihoods. This initiative strengthens environmental
                sustainability while delivering long-term socio-economic benefits to
                the community.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Congratulatory Message for Class of 2025 */}
      <section
        id="matric-message"
        className="relative flex flex-col lg:flex-row justify-center items-start lg:items-center overflow-hidden bg-gray-100 py-10 lg:py-20 px-4 lg:px-10 gap-8"
      >
        {/* Blurred background */}
        <div className="absolute inset-0 flex" aria-hidden="true">
          <div className="w-1/2 h-full bg-[url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric%20message/Black%20&%20Gold%20Simple%20Congratulations%20Poster.png')] bg-left bg-cover blur-2xl scale-110"></div>
          <div className="w-1/2 h-full bg-[url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric%20message/Black%20&%20Gold%20Simple%20Congratulations%20Poster.png')] bg-right bg-cover blur-2xl scale-110"></div>
        </div>

        {/* ⭐ Glowing Stars Layer */}
        <div className="absolute inset-0 pointer-events-none z-[5]">
          {/* LEFT STAR FIELD */}
          <div className="absolute left-6 top-0 h-full flex flex-col justify-around">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={`left-star-${i}`}
                className="block rounded-full bg-yellow-400 animate-pulse"
                style={{
                  width: `${Math.random() * 2 + 3}px`,
                  height: `${Math.random() * 2 + 3}px`,
                  boxShadow: `
                    0 0 18px 6px rgba(255, 215, 0, 0.95),
                    0 0 30px 10px rgba(255, 215, 0, 0.6)
                  `,
                  animationDuration: '3.5s',
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* RIGHT STAR FIELD */}
          <div className="absolute right-6 top-0 h-full flex flex-col justify-around">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={`right-star-${i}`}
                className="block rounded-full bg-yellow-400 animate-pulse"
                style={{
                  width: `${Math.random() * 2 + 3}px`,
                  height: `${Math.random() * 2 + 3}px`,
                  boxShadow: `
                    0 0 18px 6px rgba(255, 215, 0, 0.95),
                    0 0 30px 10px rgba(255, 215, 0, 0.6)
                  `,
                  animationDuration: '3.5s',
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Center poster */}
        <div className="relative z-10 w-full lg:w-[500px] flex justify-center">
          <img
            src="https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/matric%20message/Black%20&%20Gold%20Simple%20Congratulations%20Poster.png"
            alt="Congratulations to the Class of 2025"
            className="w-full h-[684px] object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Facebook Post Embed */}
        <div className="relative z-10 w-full lg:w-[500px] flex justify-center">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02EAfCDJm3Xh68bULptTQ4iCdMfVEMBX2jkPgGaJRvz6ALTSv5xbcc3EB2xPbJJ8oNl%26id%3D61580703593131&show_text=true&width=500"
            width="500"
            height="684"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Post"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>


      {/* Featured Community Document */}
      <section
      id="featured-document"
      className="bg-white py-12 px-4"
    >
      <div className="container mx-auto grid md:grid-cols-[1fr_2fr] gap-8 items-start">

        {/* Text / CTA */}
        <div className="flex flex-col h-full">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Yearly Report
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            This report for the year 2025 provides comprehensive insights into
            our community&apos;s development, initiatives, and future plans.
            It serves as a valuable resource for residents, stakeholders,
            and anyone interested in the growth and well-being of Baphalane.
          </p>

          <Link href="/resources" className="inline-block w-fit">
            <span
              role="button"
              className="text-white bg-green-700 hover:bg-green-800 px-6 py-3 rounded-lg shadow transition"
            >
              View more resources →
            </span>
          </Link>

          {/* Sustainability Icons */}
          <div className="mt-10 flex gap-8 items-center text-green-700">
            <div className="flex flex-col items-center group">
              <HandHeart className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm mt-2 text-gray-600">
                Community Care
              </span>
            </div>

            <div className="flex flex-col items-center group">
              <Sprout className="w-10 h-10 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm mt-2 text-gray-600">
                Sustainable Growth
              </span>
            </div>

            <div className="flex flex-col items-center group">
              <Leaf className="w-10 h-10 animate-pulse" />
              <span className="text-sm mt-2 text-gray-600">
                Environmental Care
              </span>
            </div>
          </div>
        </div>

        {/* PDF Book Preview */}
        <div className="relative group">
          <div className="absolute inset-0 bg-black/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300"></div>

          <iframe
            src="https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/informative%20documents/REPORT%202025%20OR%2026%20Final.pdf"
            className="relative w-full h-[600px] rounded-xl shadow-xl border bg-white"
          />

          {/* Book Label */}
          <span className="absolute top-4 left-4 bg-green-700 text-white text-sm px-3 py-1 rounded-full shadow">
            2025 Report
          </span>
        </div>

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
