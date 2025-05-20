"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../../lib/supabase";

import NewsCarousel from '../components/NewsCarousel'

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MapPin, Ruler, Users, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


export default function HomePage() {

  

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
      <div
        className="relative bg-cover bg-center md:bg-[url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/background-images//22c8819b-4687-4371-a335-5106efad4480.png')] bg-[url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/background-images//pexels-freestockpro-321542.jpg')]"
      >

        <div className="">
          <Navbar />


          {/* Hero Section */}
          <section className="h-[60vh] flex items-center justify-start  px-2">
            {/* The text below should only take up 50% of the width */}
            <div className=" rounded-xl p-8 lg:w-1/2 md:w-1/2 w-full ">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left font md:text-black text-white ">Welcome to the Ramokokastad Website</h2>
              <p className="text-lg md:text-3xl text-left text-white md:text-black">Empowering our people. <br />Enriching our future.</p>
            </div>
          </section>


          </div>
      </div>

      <section id="about" className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          
          {/* Left: Text Content */}
          <div className="md:w-1/2 flex flex-col items-center text-center">
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">About Us</h3>
            <p className="text-gray-800 text-lg mb-6">
              Welcome to the Baphalane Community website! We are dedicated to serving the people of Ramokokastad and surrounding areas.
              Located in the North West Province of South Africa, Ramokokastad is a culturally rich village with a strong community spirit.
              Our mission is to uplift residents through initiatives focused on housing, health, education, and youth empowerment.
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
          </div>


          {/* Right: Map */}
          <div className="md:w-[100%] h-[100%] md:h-[400px] " >
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d26364.110278601107!2d27.432578687679342!3d-25.15423511830641!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1745575107425!5m2!1sen!2sza"
                className="w-full h-full border-5 border-grey-2500 terrain-15 zoom-100 "
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d26364.110278601107!2d27.432578687679342!3d-25.15423511830641!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1745575107425!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
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
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center text-gray-800">Upcoming Events</h3>
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

            {/* Info */}
            <div className="mb-6 space-y-2 text-sm text-gray-200">
              <p><strong>Address:</strong> Ramokokastad, Moses Kotane, South Africa, 0388</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:admin@baphalane.org" className="underline text-blue-200 hover:text-white">
                  admin@baphalane.org
                </a>
              </p>
              <p>
                <strong>Office:</strong>{' '}
                <a href="tel:+27839522872" className="underline text-blue-200 hover:text-white">
                  +27 83 952 2872
                </a>
              </p>
              <p><strong>PO Box:</strong> P.O Box 200 Ramokokastad 0195</p>
            </div>


            {/* Social Media */}
            <div className="mt-auto">
              <div className="flex gap-4 justify-center md:justify-start">
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
