import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/villa/villa-1.jpg"
        alt="The Koi Villa"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <p className="text-yellow-500 uppercase tracking-[6px] md:tracking-[10px] text-xs md:text-sm mb-4">
          Luxury Stay Experience
        </p>

        <h1 className="text-white font-bold leading-tight mb-6
        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-8xl">
          THE KOI
        </h1>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Villa • Guest House • Spa • Cafe
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#contact"
            className="
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              font-semibold
              px-8
              py-4
              rounded-full
              transition
              duration-300
            "
          >
            Book Now
          </a>

          <a
            href="#villa"
            className="
              border
              border-white
              text-white
              hover:bg-white
              hover:text-black
              px-8
              py-4
              rounded-full
              transition
              duration-300
            "
          >
            Explore Villa
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">

        <div className="w-7 h-12 border border-white rounded-full flex justify-center">

          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>

        </div>

      </div>
    </section>
  );
}