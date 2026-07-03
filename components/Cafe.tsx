import Image from "next/image";

export default function Cafe() {
  return (
    <section
      id="cafe"
      data-aos="zoom-in"
      className="bg-black py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-yellow-500">
            Coffee • Food • Lifestyle
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Pika Piko Cafe
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Nikmati kopi berkualitas, makanan pilihan,
            suasana nyaman, serta area billiard yang cocok
            untuk berkumpul bersama teman, keluarga,
            maupun komunitas.
          </p>

        </div>

        {/* CONTENT */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FOTO BESAR */}

          <div
            className="
              relative
              h-[650px]
              rounded-3xl
              overflow-hidden
              group
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >

            <Image
              src="/images/cafe/cafe-2.jpeg"
              alt="Pika Piko Cafe"
              fill
              priority
              className="
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/10" />

          </div>

          {/* FOTO KECIL */}

          <div className="grid grid-cols-2 gap-4">

            <div
              className="
                relative
                h-[315px]
                rounded-3xl
                overflow-hidden
                group
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >

              <Image
                src="/images/cafe/cafe-1.jpeg"
                alt="Coffee Area"
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

            <div
              className="
                relative
                h-[315px]
                rounded-3xl
                overflow-hidden
                group
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >

              <Image
                src="/images/cafe/cafe-3.jpeg"
                alt="Cafe Interior"
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

            <div
              className="
                relative
                h-[315px]
                rounded-3xl
                overflow-hidden
                col-span-2
                group
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >

              <Image
                src="/images/cafe/cafe-4.jpeg"
                alt="Cafe Bar Area"
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

          </div>

        </div>

        {/* FEATURES */}

        <div className="mt-16">

          <div className="grid md:grid-cols-4 gap-6">

            <div
              className="
                bg-zinc-900
                p-6
                rounded-2xl
                text-center
                text-white
                border
                border-zinc-800
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-yellow-500
              "
            >
              ☕ Premium Coffee
            </div>

            <div
              className="
                bg-zinc-900
                p-6
                rounded-2xl
                text-center
                text-white
                border
                border-zinc-800
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-yellow-500
              "
            >
              🍽 Quality Food
            </div>

            <div
              className="
                bg-zinc-900
                p-6
                rounded-2xl
                text-center
                text-white
                border
                border-zinc-800
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-yellow-500
              "
            >
              🎱 Billiard Area
            </div>

            <div
              className="
                bg-zinc-900
                p-6
                rounded-2xl
                text-center
                text-white
                border
                border-zinc-800
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-yellow-500
              "
            >
              📶 Free WiFi
            </div>

          </div>

          {/* DESCRIPTION */}

          <div className="max-w-4xl mx-auto text-center mt-12">

            <p className="text-gray-400 leading-8">

              Pika Piko Cafe merupakan bagian dari

              <span className="text-yellow-500">
                {" "}The Koi Experience
              </span>

              {" "}

              yang berlokasi terpisah dari area Villa,
              Guest House dan Spa. Menghadirkan suasana
              hangat untuk menikmati kopi, makanan,
              serta waktu berkualitas bersama keluarga,
              teman maupun komunitas.

            </p>

            <div className="flex justify-center mt-8">

              <span
                className="
                  bg-yellow-500/10
                  text-yellow-500
                  border
                  border-yellow-500/20
                  px-6
                  py-3
                  rounded-full
                "
              >
                Located Separately from The Villa Koi
              </span>

            </div>

          </div>

          {/* BUTTON */}

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="https://maps.app.goo.gl/WXFyio8psNLFAMAP6"
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
              View Cafe Location
            </a>

            <a
              href="https://wa.me/6285722179300?text=Halo%20Pika%20Piko%20Cafe,%20saya%20ingin%20bertanya%20mengenai%20menu%20dan%20reservasi."
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-white/20
                hover:border-yellow-500
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:bg-white/5
              "
            >
              Contact Cafe
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}