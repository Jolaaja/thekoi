import Image from "next/image";

export default function GuestHouse() {
  return (
    <section
        id="guesthouse"
        data-aos="fade-left"
        className="bg-[#111111] py-32"
      >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 uppercase tracking-[5px]">
            Guest House
          </p>

          <h2 className="text-white text-5xl font-bold mt-3">
            Comfortable Stay
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-5">
            Kamar nyaman dengan fasilitas lengkap,
            cocok untuk keluarga, pasangan,
            maupun perjalanan bisnis.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* FOTO */}
          <div className="grid grid-cols-2 gap-4">

            <div className="relative h-[260px] rounded-3xl overflow-hidden">
              <Image
                src="/images/guesthouse/guest-1.jpeg"
                alt="Guest House Room"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[260px] rounded-3xl overflow-hidden">
              <Image
                src="/images/guesthouse/guest-2.jpeg"
                alt="Guest House Room"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[260px] rounded-3xl overflow-hidden">
              <Image
                src="/images/guesthouse/guest-3.jpeg"
                alt="Guest House Bathroom"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[260px] rounded-3xl overflow-hidden">
              <Image
                src="/images/guesthouse/guest-4.jpeg"
                alt="Guest House Bathroom"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

          </div>

          {/* CONTENT */}
          <div>

            {/* PRICE CARD */}
            <div className="bg-yellow-500 text-black p-6 rounded-2xl mb-8">

              <p className="uppercase tracking-[3px] text-sm">
                Starting From
              </p>

              <h3 className="text-4xl font-bold">
                Rp 400.000
              </h3>

              <p className="font-medium">
                per malam
              </p>

              <p className="mt-3 font-semibold">
                ✓ Free Breakfast at Pika Piko Cafe
              </p>

            </div>

            <h3 className="text-white text-4xl font-bold mb-8">
              Modern Room With Complete Facilities
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">

              <div
                  className="
                    bg-zinc-900
                    p-5
                    rounded-2xl
                    border
                    border-zinc-800
                    text-white
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-yellow-500
                  "
                >
                ✓ Air Conditioner
              </div>

              <div
                  className="
                    bg-zinc-900
                    p-5
                    rounded-2xl
                    border
                    border-zinc-800
                    text-white
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-yellow-500
                  "
                >
                ✓ Smart TV
              </div>

              <div
                  className="
                    bg-zinc-900
                    p-5
                    rounded-2xl
                    border
                    border-zinc-800
                    text-white
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-yellow-500
                  "
                >
                ✓ WiFi
              </div>

              <div
                className="
                  bg-zinc-900
                  p-5
                  rounded-2xl
                  border
                  border-zinc-800
                  text-white
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-500
                "
              >
                ✓ Hot Water
              </div>

              <div
                className="
                  bg-zinc-900
                  p-5
                  rounded-2xl
                  border
                  border-zinc-800
                  text-white
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-500
                "
              >
                ✓ Private Bathroom
              </div>

              <div
              className="
                bg-zinc-900
                p-5
                rounded-2xl
                border
                border-zinc-800
                text-white
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-yellow-500
              "
            >
                ✓ Comfortable Bed
              </div>

            </div>

            <p className="text-gray-400 leading-8">
              Guest House The Koi dirancang untuk memberikan
              kenyamanan maksimal dengan desain modern,
              kamar yang luas, fasilitas lengkap serta
              sarapan gratis di Pika Piko Cafe untuk setiap
              malam menginap.
            </p>

            <a
              href="https://wa.me/6281323275441?text=Halo%20The%20Koi,%20saya%20ingin%20booking%20Guest%20House%20Rp400.000%20per%20malam."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                mt-10
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
              Book Guest House
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}