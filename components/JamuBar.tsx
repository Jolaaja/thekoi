import Image from "next/image";

export default function JamuBar() {
  return (
    <section
      id="jamu"
      data-aos="fade-up"
      className="bg-[#0a0a0a] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-yellow-500">
            Healthy • Herbal • Traditional
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Traditional Jamu Bar
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Nikmati minuman herbal tradisional Indonesia
            yang disajikan dengan konsep modern sebagai
            bagian dari pengalaman relaksasi di The Koi.
          </p>

        </div>

        {/* CONTENT */}

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}

          <div>

            <div
              className="
                relative
                h-[560px]
                rounded-3xl
                overflow-hidden
                group
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >

              <Image
                src="/images/jamu/jamu-1.jpg"
                alt="Traditional Jamu Bar"
                fill
                priority
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

              <div
                className="
                  relative
                  h-[240px]
                  rounded-3xl
                  overflow-hidden
                  group
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                <Image
                  src="/images/jamu/jamu-2.jpg"
                  alt="Jamu Ingredients"
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
                  h-[240px]
                  rounded-3xl
                  overflow-hidden
                  group
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                <Image
                  src="/images/jamu/jamu-3.jpg"
                  alt="Traditional Herbs"
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

          {/* RIGHT */}

          <div>

            <h3 className="text-5xl font-bold text-white mb-8 leading-tight">
              Discover The Authentic Taste of Indonesian Herbs
            </h3>

            <p className="text-gray-400 leading-8 mb-10">
              Setiap racikan dibuat menggunakan bahan alami
              pilihan seperti jahe, kunyit, serai,
              kayu manis, dan rempah-rempah Nusantara
              untuk menghadirkan pengalaman minum jamu
              yang sehat, menyegarkan, dan autentik.
            </p>

            {/* FEATURE */}

            <div className="grid sm:grid-cols-2 gap-5">

              <div
                className="
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-500
                "
              >

                <h4 className="text-yellow-500 font-bold text-xl">
                  🌿 Fresh Herbal
                </h4>

                <p className="text-gray-400 mt-3">
                  Menggunakan bahan alami pilihan
                  yang selalu segar.
                </p>

              </div>

              <div
                className="
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-500
                "
              >

                <h4 className="text-yellow-500 font-bold text-xl">
                  🍵 Traditional Recipe
                </h4>

                <p className="text-gray-400 mt-3">
                  Resep jamu tradisional Indonesia
                  dengan sentuhan modern.
                </p>

              </div>

              <div
                className="
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-500
                "
              >

                <h4 className="text-yellow-500 font-bold text-xl">
                  ❤️ Healthy Lifestyle
                </h4>

                <p className="text-gray-400 mt-3">
                  Cocok dinikmati setelah spa,
                  staycation maupun bersantai.
                </p>

              </div>

              <div
                className="
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-500
                "
              >

                <h4 className="text-yellow-500 font-bold text-xl">
                  ⭐ Premium Experience
                </h4>

                <p className="text-gray-400 mt-3">
                  Pengalaman menikmati jamu
                  dalam suasana eksklusif.
                </p>

              </div>

            </div>

            {/* INFO */}

            <div className="mt-10 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">

              <p className="text-yellow-400 font-semibold">

                📍 Traditional Jamu Bar berada
                dalam satu area dengan
                <span className="font-bold">
                  {" "}Pika Piko Cafe
                </span>

              </p>

            </div>

            {/* BUTTON */}

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20melihat%20menu%20Traditional%20Jamu%20Bar."
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
                Ask Our Menu
              </a>

              <a
                href="#cafe"
                className="
                  border
                  border-white/20
                  hover:border-yellow-500
                  hover:bg-white/5
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Visit Pika Piko Cafe
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}