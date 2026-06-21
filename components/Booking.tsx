export default function Booking() {
  return (
    <section
      id="contact"
      className="bg-black py-32"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

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

        <div className="grid md:grid-cols-3 gap-6">

          {/* MELA */}
          <div className="
            bg-zinc-900
            rounded-3xl
            p-8
            border
            border-zinc-800
            hover:border-yellow-500/50
            hover:-translate-y-2
            transition-all
            duration-300
          ">
            <h3 className="text-white text-2xl font-bold mb-1">
              Mela
            </h3>

            <p className="text-yellow-500 text-sm mb-3">
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
                transition
              "
            >
              WhatsApp Mela
            </a>

          </div>

          {/* ANGGI */}
          <div className="
            bg-zinc-900
            rounded-3xl
            p-8
            border
            border-zinc-800
            hover:border-yellow-500/50
            hover:-translate-y-2
            transition-all
            duration-300
          ">
            <h3 className="text-white text-2xl font-bold mb-1">
              Anggi
            </h3>

            <p className="text-yellow-500 text-sm mb-3">
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
                transition
              "
            >
              WhatsApp Anggi
            </a>

          </div>

          {/* ASTI */}
          <div className="
            bg-zinc-900
            rounded-3xl
            p-8
            border
            border-zinc-800
            hover:border-yellow-500/50
            hover:-translate-y-2
            transition-all
            duration-300
          ">
            <h3 className="text-white text-2xl font-bold mb-1">
              Asti
            </h3>

            <p className="text-yellow-500 text-sm mb-3">
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
                transition
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