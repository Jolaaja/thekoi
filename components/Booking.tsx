export default function Booking() {
  return (
    <section
      id="contact"
      data-aos="zoom-in-up"
      className="bg-black py-32"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* HEADER */}

        <p className="uppercase tracking-[5px] text-yellow-500">
          Booking & Reservation
        </p>

        <h2 className="text-white text-6xl font-bold mt-4 mb-8">
          Contact Our Admin
        </h2>

        <p className="text-gray-400 mb-14 max-w-3xl mx-auto leading-8">
          Tim reservasi The Koi siap membantu kebutuhan booking
          Villa, Guest House, Spa, maupun informasi lainnya.
          Pilih admin yang tersedia untuk mendapatkan respon lebih cepat.
        </p>

        {/* ADMIN */}

        <div className="grid md:grid-cols-3 gap-6">

          {/* MELA */}

          <div
            className="
              bg-zinc-900
              rounded-3xl
              p-8
              border
              border-zinc-800
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-yellow-500
              hover:shadow-2xl
            "
          >

            <h3 className="text-white text-2xl font-bold">
              Mela
            </h3>

            <p className="text-yellow-500 mt-2 mb-6">
              Reservation Admin
            </p>

            <a
              href="https://wa.me/6285722179300?text=Halo%20The%20Koi,%20saya%20ingin%20bertanya%20mengenai%20reservasi."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-green-500
                hover:bg-green-400
                text-white
                px-6
                py-3
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              WhatsApp Mela
            </a>

          </div>

          {/* ANGGI */}

          <div
            className="
              bg-zinc-900
              rounded-3xl
              p-8
              border
              border-zinc-800
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-yellow-500
              hover:shadow-2xl
            "
          >

            <h3 className="text-white text-2xl font-bold">
              Anggi
            </h3>

            <p className="text-yellow-500 mt-2 mb-6">
              Reservation Admin
            </p>

            <a
              href="https://wa.me/6281323275441?text=Halo%20The%20Koi,%20saya%20ingin%20bertanya%20mengenai%20reservasi."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-green-500
                hover:bg-green-400
                text-white
                px-6
                py-3
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              WhatsApp Anggi
            </a>

          </div>

          {/* ASTI */}

          <div
            className="
              bg-zinc-900
              rounded-3xl
              p-8
              border
              border-zinc-800
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-yellow-500
              hover:shadow-2xl
            "
          >

            <h3 className="text-white text-2xl font-bold">
              Asti
            </h3>

            <p className="text-yellow-500 mt-2 mb-6">
              Reservation Admin
            </p>

            <a
              href="https://wa.me/6285607429935?text=Halo%20The%20Koi,%20saya%20ingin%20bertanya%20mengenai%20reservasi."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-green-500
                hover:bg-green-400
                text-white
                px-6
                py-3
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              WhatsApp Asti
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}