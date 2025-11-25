"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WelcomeMessage() {
  const [opacity, setOpacity] = useState(0);
  const [hasFadedIn, setHasFadedIn] = useState(false); // 👈 NEW FLAG

  useEffect(() => {
    const handleScroll = () => {
      if (hasFadedIn) return; // 👈 Prevent re-trigger once done

      const fadeValue = Math.min(window.scrollY / 200, 1);
      setOpacity(fadeValue);

      if (fadeValue === 1) {
        setHasFadedIn(true); // 👈 Lock fade-in at 1 forever
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasFadedIn]);

  return (
    <section className="relative w-full overflow-hidden">

      {/* BLURRED BACKGROUND */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/Welcome message final.png"
            alt="Welcome Message Blurred Background"
            fill
            className="object-cover blur-2xl scale-110 opacity-85"
            priority
          />
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div
        className="relative mx-auto max-w-4xl w-full h-[280px] sm:h-[350px] md:h-[500px] z-10"
        style={{
          opacity,
          transition: "opacity 0.6s ease-out",
        }}
      >
        <Image
          src="/Welcome message final.png"
          alt="Welcome Message"
          fill
          className="object-contain object-center"
          priority
        />
      </div>
    </section>
  );
}
