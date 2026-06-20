import Image from "next/image";

export default function GuestHouse() {
  return (
    <section
      id="guesthouse"
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

            <h3 className="text-white text-4xl font-bold mb-8">
              Modern Room With Complete Facilities
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">

              <div className="bg-zinc-900 p-5 rounded-2xl text-white">
                ✓ Air Conditioner
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl text-white">
                ✓ Smart TV
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl text-white">
                ✓ WiFi
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl text-white">
                ✓ Hot Water
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl text-white">
                ✓ Private Bathroom
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl text-white">
                ✓ Comfortable Bed
              </div>

            </div>

            <p className="text-gray-400 leading-8">
              Guest House The Koi dirancang untuk memberikan
              kenyamanan maksimal dengan desain modern,
              kamar yang luas, serta fasilitas lengkap
              untuk pengalaman menginap yang menyenangkan.
            </p>

            <a
              href="#contact"
              className="
                inline-block
                mt-10
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                transition
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