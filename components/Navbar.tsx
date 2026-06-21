"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo/logo.png"
              alt="The Koi"
              width={45}
              height={45}
              priority
              className="object-contain"
            />

            <div>
              <h1 className="text-white font-bold tracking-[3px] text-xl">
                THE KOI
              </h1>

              <p className="text-yellow-500 text-[10px] tracking-[4px] uppercase">
                Luxury Escape
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              className="text-white hover:text-yellow-500 transition"
            >
              Home
            </a>

            <a
              href="#villa"
              className="text-white hover:text-yellow-500 transition"
            >
              Villa
            </a>

            <a
              href="#guesthouse"
              className="text-white hover:text-yellow-500 transition"
            >
              Guest House
            </a>

            <a
              href="#spa"
              className="text-white hover:text-yellow-500 transition"
            >
              Spa
            </a>

            <a
              href="#cafe"
              className="text-white hover:text-yellow-500 transition"
            >
              Cafe
            </a>

            <a
              href="#contact"
              className="text-white hover:text-yellow-500 transition"
            >
              Contact
            </a>

            <a
              href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20bertanya%20mengenai%20reservasi."
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                px-6
                py-3
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
              "
            >
              Book Now
            </a>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white text-3xl"
          >
            {mobileMenu ? <HiX /> : <HiMenu />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div
          className="
            md:hidden
            bg-black/95
            backdrop-blur-xl
            border-t
            border-white/10
          "
        >
          <div className="flex flex-col p-6 gap-6">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-white"
            >
              Home
            </a>

            <a
              href="#villa"
              onClick={closeMenu}
              className="text-white"
            >
              Villa
            </a>

            <a
              href="#guesthouse"
              onClick={closeMenu}
              className="text-white"
            >
              Guest House
            </a>

            <a
              href="#spa"
              onClick={closeMenu}
              className="text-white"
            >
              Spa
            </a>

            <a
              href="#cafe"
              onClick={closeMenu}
              className="text-white"
            >
              Cafe
            </a>

            <a
              href="#gallery"
              onClick={closeMenu}
              className="text-white"
            >
              Gallery
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-white"
            >
              Contact
            </a>

            <a
              href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20melakukan%20reservasi."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                text-center
                py-3
                rounded-full
                font-semibold
                transition-all
                duration-300
              "
            >
              Book Now
            </a>

          </div>
        </div>
      )}
    </header>
  );
}