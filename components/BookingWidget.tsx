"use client";

import { useState } from "react";
import {
  HiCalendar,
  HiUsers,
  HiHome,
} from "react-icons/hi";

export default function BookingWidget() {
  const [property, setProperty] = useState("🏡 Luxury Villa");
  const [guests, setGuests] = useState("2 Guests");

  return (
    <section className="relative -mt-24 z-30 px-6">

      <div
        className="
          max-w-6xl
          mx-auto
          bg-white
          rounded-[30px]
          shadow-[0_25px_70px_rgba(0,0,0,.18)]
          p-8
          grid
          lg:grid-cols-5
          md:grid-cols-2
          gap-6
          border
          border-zinc-100
        "
      >

        {/* CHECK IN */}

        <div>

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-3">
            <HiCalendar className="text-yellow-500 text-lg" />
            Check In
          </label>

          <input
            type="date"
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-zinc-200
              bg-white
              text-black
              px-4
              outline-none
              appearance-none
              transition-all
              duration-300
              hover:border-yellow-400
              focus:border-yellow-500
              focus:ring-4
              focus:ring-yellow-200
            "
          />

        </div>

        {/* CHECK OUT */}

        <div>

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-3">
            <HiCalendar className="text-yellow-500 text-lg" />
            Check Out
          </label>

          <input
            type="date"
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-zinc-200
              bg-white
              text-black
              px-4
              outline-none
              appearance-none
              transition-all
              duration-300
              hover:border-yellow-400
              focus:border-yellow-500
              focus:ring-4
              focus:ring-yellow-200
            "
          />

        </div>

        {/* GUEST */}

        <div>

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-3">
            <HiUsers className="text-yellow-500 text-lg" />
            Guests
          </label>

          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-zinc-200
              bg-white
              text-black
              px-4
              outline-none
              cursor-pointer
              appearance-none
              transition-all
              duration-300
              hover:border-yellow-400
              focus:border-yellow-500
              focus:ring-4
              focus:ring-yellow-200
            "
          >
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>

        </div>

        {/* PROPERTY */}

        <div>

          <label className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-3">
            <HiHome className="text-yellow-500 text-lg" />
            Property
          </label>

          <select
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-zinc-200
              bg-white
              text-black
              px-4
              outline-none
              cursor-pointer
              appearance-none
              transition-all
              duration-300
              hover:border-yellow-400
              focus:border-yellow-500
              focus:ring-4
              focus:ring-yellow-200
            "
          >
            <option>🏡 Luxury Villa</option>
            <option>🏠 Guest House</option>
            <option>💆 Spa</option>
            <option>☕ Pika Piko Cafe</option>
          </select>

        </div>

        {/* BUTTON */}

        <div className="flex items-end">

          <a
            href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20melakukan%20reservasi."
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full
              h-14
              flex
              items-center
              justify-center
              rounded-2xl
              bg-yellow-500
              text-black
              font-bold
              tracking-wide
              transition-all
              duration-300
              hover:bg-yellow-400
              hover:scale-105
              hover:shadow-xl
              active:scale-95
            "
          >
            Book Your Stay
          </a>

        </div>

      </div>

    </section>
  );
}