import Image from "next/image";

export default function VillaSection() {
  return (
    <section
      id="villa"
      className="bg-[#0a0a0a] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-yellow-500 uppercase tracking-[5px]">
            Luxury Villa
          </p>

          <h2 className="text-white text-5xl font-bold mt-3">
            The Villa Koi
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            Private villa dengan nuansa Jepang modern yang
            menghadirkan kenyamanan, ketenangan, dan pengalaman
            menginap yang berkelas untuk keluarga, pasangan,
            maupun staycation eksklusif.
          </p>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative h-[650px] rounded-3xl overflow-hidden group">

            <Image
              src="/images/villa/villa-1.jpg"
              alt="The Villa Koi"
              fill
              priority
              className="
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/10"></div>

          </div>

          {/* Text */}
          <div>

            <div className="grid grid-cols-2 gap-6 mb-10">

              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

                <h3 className="text-yellow-500 text-3xl font-bold">
                  4+
                </h3>

                <p className="text-white mt-2">
                  Luxury Rooms
                </p>

              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

                <h3 className="text-yellow-500 text-3xl font-bold">
                  24/7
                </h3>

                <p className="text-white mt-2">
                  Guest Service
                </p>

              </div>

            </div>

            <ul className="space-y-5 text-gray-300 text-lg mb-10">

              <li>✓ Private Villa Experience</li>

              <li>✓ Modern Japanese Design</li>

              <li>✓ Family Friendly</li>

              <li>✓ Spacious Living Area</li>

              <li>✓ Premium Interior</li>

              <li>✓ Perfect for Staycation</li>

            </ul>

            <a
              href="https://wa.me/6281220554429?text=Halo%20The%20Koi,%20saya%20ingin%20booking%20Villa."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                font-semibold
                px-8
                py-4
                rounded-full
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
              "
            >
              Book Villa
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}