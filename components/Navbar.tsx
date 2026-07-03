"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "villa",
      "guesthouse",
      "spa",
      "cafe",
      "jamu",
      "location",
      "contact",
    ];

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenu(false);

  const linkClass = (section: string) =>
    [
      "relative",
      "transition-all",
      "duration-300",
      activeSection === section
        ? "text-yellow-500"
        : "text-white hover:text-yellow-500",
    ].join(" ");

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
            <a href="#home" className={linkClass("home")}> 
              Home
              {activeSection === "home" && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-yellow-500" />
              )}
            </a>

            <a href="#villa" className={linkClass("villa")}>
              Villa
              {activeSection === "villa" && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-yellow-500" />
              )}
            </a>

            <a href="#guesthouse" className={linkClass("guesthouse")}>
              Guest House
              {activeSection === "guesthouse" && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-yellow-500" />
              )}
            </a>

            <a href="#spa" className={linkClass("spa")}>
              Spa
              {activeSection === "spa" && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-yellow-500" />
              )}
            </a>

            <a href="#cafe" className={linkClass("cafe")}>
              Cafe
              {activeSection === "cafe" && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-yellow-500" />
              )}
            </a>

            <a href="#jamu" className={linkClass("jamu")}>
              Jamu Bar
              {activeSection === "jamu" && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-yellow-500" />
              )}
            </a>

            <a href="#location" className={linkClass("location")}>
              Location
              {activeSection === "location" && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-yellow-500" />
              )}
            </a>

            <a href="#contact" className={linkClass("contact")}>
              Contact
              {activeSection === "contact" && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-yellow-500" />
              )}
            </a>

            <a
              href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20melakukan%20reservasi."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col gap-6 p-6">
            <a
              href="#home"
              onClick={closeMenu}
              className={
                activeSection === "home"
                  ? "font-semibold text-yellow-500"
                  : "text-white"
              }
            >
              Home
            </a>

            <a
              href="#villa"
              onClick={closeMenu}
              className={
                activeSection === "villa"
                  ? "font-semibold text-yellow-500"
                  : "text-white"
              }
            >
              Villa
            </a>

            <a
              href="#guesthouse"
              onClick={closeMenu}
              className={
                activeSection === "guesthouse"
                  ? "font-semibold text-yellow-500"
                  : "text-white"
              }
            >
              Guest House
            </a>

            <a
              href="#spa"
              onClick={closeMenu}
              className={
                activeSection === "spa"
                  ? "font-semibold text-yellow-500"
                  : "text-white"
              }
            >
              Spa
            </a>

            <a
              href="#cafe"
              onClick={closeMenu}
              className={
                activeSection === "cafe"
                  ? "font-semibold text-yellow-500"
                  : "text-white"
              }
            >
              Cafe
            </a>

            <a
              href="#jamu"
              onClick={closeMenu}
              className={
                activeSection === "jamu"
                  ? "font-semibold text-yellow-500"
                  : "text-white"
              }
            >
              Jamu Bar
            </a>

            <a
              href="#location"
              onClick={closeMenu}
              className={
                activeSection === "location"
                  ? "font-semibold text-yellow-500"
                  : "text-white"
              }
            >
              Location
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className={
                activeSection === "contact"
                  ? "font-semibold text-yellow-500"
                  : "text-white"
              }
            >
              Contact
            </a>

            <a
              href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20melakukan%20reservasi."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="bg-yellow-500 hover:bg-yellow-400 text-black text-center py-3 rounded-full font-semibold transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}