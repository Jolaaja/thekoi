"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-black
        transition-all duration-700
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <Image
        src="/images/logo/logo.png"
        alt="The Koi"
        width={90}
        height={90}
        priority
        className="animate-pulse"
      />

      <h1 className="mt-8 text-5xl font-bold tracking-[6px] text-white">
        THE KOI
      </h1>

      <p className="mt-4 text-sm uppercase tracking-[8px] text-yellow-500">
        Luxury Escape
      </p>

      <div className="mt-10 w-44 h-[2px] overflow-hidden rounded-full bg-zinc-800">
        <div className="h-full bg-yellow-500 animate-loader"></div>
      </div>
    </div>
  );
}