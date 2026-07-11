"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

export default function Spa() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <section
        id="spa"
        data-aos="fade-up"
        className="bg-[#f8f5ef] py-32"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-yellow-600">
              Wellness & Relaxation
            </p>

            <h2 className="text-5xl font-bold text-black mt-4">
              Spa Experience
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
              Nikmati pengalaman relaksasi premium dalam
              suasana tenang dan eksklusif yang dirancang
              untuk menyegarkan tubuh dan pikiran.
            </p>

          </div>

          {/* CONTENT */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div className="grid grid-cols-2 gap-5">

              <div
                className="
                  relative
                  h-[320px]
                  rounded-3xl
                  overflow-hidden
                  shadow-xl
                  group
                "
              >

                <Image
                  src="/images/spa/spa-1.jpeg"
                  alt="Spa Room"
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              <div
                className="
                  relative
                  h-[320px]
                  rounded-3xl
                  overflow-hidden
                  shadow-xl
                  group
                "
              >

                <Image
                  src="/images/spa/spa-2.jpeg"
                  alt="Spa Treatment"
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <h3 className="text-5xl font-bold text-black leading-tight mb-8">
                A Place To Relax,
                <br />
                Recharge &
                Reconnect
              </h3>

              <p className="text-gray-600 leading-8 mb-10">
                Spa The Koi menghadirkan suasana yang nyaman,
                tenang, dan privat untuk membantu Anda
                melepaskan stres serta mendapatkan
                pengalaman relaksasi terbaik bersama
                therapist profesional.
              </p>

              {/* FEATURE */}

              <div className="grid sm:grid-cols-2 gap-5">

                <Feature
                  emoji="🌿"
                  title="Relaxing Environment"
                  desc="Suasana yang tenang untuk membantu tubuh dan pikiran kembali segar."
                />

                <Feature
                  emoji="💆"
                  title="Professional Therapist"
                  desc="Ditangani therapist profesional dengan pelayanan terbaik."
                />

                <Feature
                  emoji="✨"
                  title="Premium Experience"
                  desc="Nikmati pengalaman spa eksklusif dengan kualitas premium."
                />

                <Feature
                  emoji="🕯"
                  title="Private Room"
                  desc="Ruangan privat yang nyaman untuk menjaga privasi setiap tamu."
                />

              </div>

              {/* BUTTON */}

              <div className="flex flex-wrap gap-5 mt-10">

                <a
                  href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20reservasi%20Spa."
                  target="_blank"
                  rel="noopener noreferrer"
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
                    shadow-lg
                  "
                >
                  Reserve Spa
                </a>

                <button
                  onClick={() => setOpen(true)}
                  className="
                    border-2
                    border-yellow-500
                    text-yellow-600
                    hover:bg-yellow-500
                    hover:text-black
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  View Spa Pricelist
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* =========================
          SPA PRICE MODAL
      ========================== */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            bg-black/90
            backdrop-blur-md
            z-[9999]
            flex
            items-center
            justify-center
            p-5
            animate-fade-in
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-5xl
              max-h-[95vh]
              overflow-y-auto
              rounded-[30px]
              bg-white
              shadow-[0_30px_90px_rgba(0,0,0,.45)]
              animate-fade-in
            "
          >
            {/* CLOSE BUTTON */}

            <button
              onClick={() => setOpen(false)}
              className="
                absolute
                top-5
                right-5
                z-50
                w-14
                h-14
                rounded-full
                bg-white/95
                hover:bg-yellow-500
                hover:text-white
                shadow-xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
              "
            >
              <HiX className="text-2xl" />
            </button>

            {/* HEADER */}

            <div
              className="
                bg-gradient-to-r
                from-[#111]
                via-[#2c2c2c]
                to-[#111]
                text-center
                py-10
                px-6
              "
            >
              <Image
                src="/images/logo/logo.png"
                alt="The Koi"
                width={90}
                height={90}
                className="mx-auto mb-5"
              />

              <p className="uppercase tracking-[6px] text-yellow-400 text-sm">
                KOIKUNA SPA
              </p>

              <h3 className="text-white text-4xl font-bold mt-3">
                Premium Spa Pricelist
              </h3>

              <p className="text-gray-300 mt-4 max-w-xl mx-auto">
                Discover our exclusive spa treatments,
                traditional wellness therapies, and
                rejuvenating experiences crafted for
                complete relaxation.
              </p>
            </div>

            {/* IMAGE */}

            <Image
              src="/images/spa/pricelist.jpg"
              alt="Spa Pricelist"
              width={1200}
              height={1800}
              className="w-full h-auto"
              priority
            />

            {/* FOOTER */}

            <div className="bg-[#f8f5ef] p-8 text-center">

              <p className="text-gray-600 text-lg mb-6">
                Ready to enjoy a relaxing spa experience?
              </p>

              <a
                href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20reservasi%20Spa."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-yellow-500
                  hover:bg-yellow-400
                  text-black
                  font-bold
                  px-10
                  py-4
                  rounded-full
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-xl
                "
              >
                Reserve via WhatsApp
              </a>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

/* =========================
    FEATURE CARD
========================= */

function Feature({
  emoji,
  title,
  desc,
}: {
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-6
        border
        border-zinc-200
        shadow
        hover:-translate-y-2
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      <div className="text-3xl mb-4">
        {emoji}
      </div>

      <h4 className="text-black font-bold text-lg">
        {title}
      </h4>

      <p className="text-gray-500 text-sm mt-3 leading-6">
        {desc}
      </p>
    </div>
  );
}