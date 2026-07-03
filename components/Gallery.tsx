"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";

const photos = [
  "/images/villa/villa-1.jpg",
  "/images/villa/villa-2.jpg",
  "/images/villa/villa-3.jpg",
  "/images/guesthouse/guest-1.jpeg",
  "/images/guesthouse/guest-2.jpeg",
  "/images/spa/spa-1.jpeg",
  "/images/cafe/cafe-1.jpeg",
  "/images/cafe/cafe-4.jpeg",
  "/images/jamu/jamu-1.jpg",
  "/images/jamu/jamu-2.jpg",
  "/images/jamu/jamu-3.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = () => setSelected(null);

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % photos.length);
  };

  const prev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;

      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <>
      <section
        id="gallery"
        data-aos="fade-up"
        className="bg-[#111111] py-32"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-yellow-500">
              Gallery
            </p>

            <h2 className="text-5xl font-bold text-white mt-4">
              Explore The Koi
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
              Jelajahi suasana Villa, Guest House, Spa,
              Pika Piko Cafe dan Traditional Jamu Bar.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-4">

            {photos.map((photo, index) => (

              <button
                key={index}
                onClick={() => setSelected(index)}
                className="
                  relative
                  h-[300px]
                  overflow-hidden
                  rounded-3xl
                  group
                "
              >

                <Image
                  src={photo}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/20
                    transition
                  "
                />

              </button>

            ))}

          </div>

        </div>
      </section>

      {selected !== null && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/95
            flex
            items-center
            justify-center
            p-6
          "
        >

          <button
            onClick={close}
            className="
              absolute
              top-6
              right-6
              text-white
              text-5xl
              hover:text-yellow-500
              transition
            "
          >
            <HiX />
          </button>

          <button
            onClick={prev}
            className="
              absolute
              left-6
              text-white
              text-6xl
              hover:text-yellow-500
              transition
            "
          >
            <HiChevronLeft />
          </button>

          <div
            className="
              relative
              w-full
              max-w-6xl
              h-[80vh]
            "
          >

            <Image
              src={photos[selected]}
              alt="Gallery"
              fill
              className="object-contain rounded-2xl"
            />

          </div>

          <button
            onClick={next}
            className="
              absolute
              right-6
              text-white
              text-6xl
              hover:text-yellow-500
              transition
            "
          >
            <HiChevronRight />
          </button>

        </div>

      )}
    </>
  );
}