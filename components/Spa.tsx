import Image from "next/image";

export default function Spa() {
  return (
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
            Nikmati pengalaman relaksasi premium dalam suasana
            tenang dan eksklusif yang dirancang untuk
            menyegarkan tubuh dan pikiran.
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
                group
                shadow-xl
              "
            >

              <Image
                src="/images/spa/spa-1.jpeg"
                alt="Spa Room"
                fill
                className="
                  object-cover
                  transition
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
                group
                shadow-xl
              "
            >

              <Image
                src="/images/spa/spa-2.jpeg"
                alt="Spa Treatment"
                fill
                className="
                  object-cover
                  transition
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
              tenang dan privat untuk membantu Anda
              melepaskan stres serta mendapatkan
              pengalaman relaksasi terbaik dengan
              pelayanan profesional.
            </p>

            {/* FEATURES */}

            <div className="grid sm:grid-cols-2 gap-5">

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
                  🌿
                </div>

                <h4 className="text-black font-bold text-lg">
                  Relaxing Environment
                </h4>

                <p className="text-gray-500 text-sm mt-3 leading-6">
                  Suasana tenang dan nyaman untuk
                  membantu tubuh dan pikiran kembali segar.
                </p>

              </div>

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
                  💆
                </div>

                <h4 className="text-black font-bold text-lg">
                  Professional Treatment
                </h4>

                <p className="text-gray-500 text-sm mt-3 leading-6">
                  Ditangani oleh therapist profesional
                  dengan pelayanan terbaik.
                </p>

              </div>

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
                  ✨
                </div>

                <h4 className="text-black font-bold text-lg">
                  Premium Experience
                </h4>

                <p className="text-gray-500 text-sm mt-3 leading-6">
                  Nikmati pengalaman spa eksklusif
                  dengan fasilitas premium.
                </p>

              </div>

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
                  🕯
                </div>

                <h4 className="text-black font-bold text-lg">
                  Private Room
                </h4>

                <p className="text-gray-500 text-sm mt-3 leading-6">
                  Ruang perawatan privat yang nyaman
                  untuk menjaga privasi setiap tamu.
                </p>

              </div>

            </div>

            {/* BUTTON */}

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20bertanya%20mengenai%20reservasi%20Spa."
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

              <a
                href="#contact"
                className="
                  border
                  border-black/20
                  hover:border-yellow-500
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Contact Admin
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}