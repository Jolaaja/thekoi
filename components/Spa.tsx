import Image from "next/image";

export default function Spa() {
  return (
    <section
      id="spa"
      className="bg-[#f8f5ef] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-yellow-600">
            Wellness & Relaxation
          </p>

          <h2 className="text-5xl font-bold text-black mt-4">
            Spa Experience
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Nikmati pengalaman relaksasi premium dalam suasana
            tenang dan eksklusif yang dirancang untuk
            menyegarkan tubuh dan pikiran.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* FOTO */}

          <div className="grid grid-cols-2 gap-4">

            <div className="relative h-[300px] rounded-3xl overflow-hidden">

              <Image
                src="/images/spa/spa-1.jpeg"
                alt="Spa Room"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

            </div>

            <div className="relative h-[300px] rounded-3xl overflow-hidden">

              <Image
                src="/images/spa/spa-2.jpeg"
                alt="Spa Room"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <h3 className="text-4xl font-bold text-black mb-8">
              A Place To Relax, Recharge & Reconnect
            </h3>

            <p className="text-gray-600 leading-8 mb-10">
              Spa The Koi menghadirkan suasana yang nyaman,
              tenang dan privat untuk membantu Anda
              melepaskan stres serta mendapatkan
              pengalaman relaksasi terbaik.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-white p-5 rounded-2xl shadow">
                🌿 Relaxing Environment
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                💆 Professional Treatment
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                ✨ Premium Experience
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                🕯 Private Room
              </div>

            </div>

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
              Reserve Spa
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}