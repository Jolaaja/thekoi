"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed
        bottom-24
        right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-yellow-500
        text-black
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        hover:bg-yellow-400
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      <HiArrowUp className="mx-auto text-2xl" />
    </button>
  );
}