"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const backgrounds = [
  "/images/villa/villa-1.jpg",
  "/images/spa/spa-1.jpeg",
  "/images/cafe/cafe-2.jpeg",
  "/images/guesthouse/guest-1.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {backgrounds.map((bg, index) => (
        <Image
          key={bg}
          src={bg}
          alt="The Koi"
          fill
          priority={index === 0}
          className={`
            object-cover
            transition-opacity
            duration-[1800ms]
            ${current === index ? "opacity-100 scale-110" : "opacity-0 scale-100"}
          `}
        />
      ))}

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center px-6 max-w-5xl">

        <p
          className="
            text-yellow-500
            uppercase
            tracking-[8px]
            text-sm
            animate-fade-up
          "
        >
          Luxury Stay Experience
        </p>

        <h1
          className="
            text-white
            font-bold
            text-6xl
            md:text-8xl
            mt-6
            animate-fade-up
          "
        >
          THE KOI
        </h1>

        <p
          className="
            text-gray-200
            text-lg
            mt-6
            leading-8
            max-w-3xl
            mx-auto
            animate-fade-up
          "
        >
          Luxury Villa • Guest House • Spa • Pika Piko Cafe • Traditional Jamu Bar
        </p>

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-5
            mt-12
          "
        >
          <a
            href="#contact"
            className="
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Book Now
          </a>

          <a
            href="#villa"
            className="
              border
              border-white
              hover:border-yellow-500
              hover:text-yellow-500
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              transition-all
              duration-300
            "
          >
            Explore
          </a>
        </div>

      </div>

      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          flex
          gap-3
          z-20
        "
      >
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-2
              rounded-full
              transition-all
              duration-500
              ${
                current === index
                  ? "w-10 bg-yellow-500"
                  : "w-2 bg-white/50"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}