export default function Booking() {
  return (
    <section
      id="contact"
      className="bg-black py-32"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[5px] text-yellow-500">
          Booking
        </p>

        <h2 className="text-white text-6xl font-bold mt-4 mb-8">
          Ready For Your Experience?
        </h2>

        <p className="text-gray-400 mb-10">
          Villa, Guest House, Spa dan Cafe
          dalam satu destinasi eksklusif.
        </p>

        <a
            href="https://wa.me/6281220554429?text=Halo%20The%20Koi,%20saya%20ingin%20melakukan%20reservasi."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              bg-green-500
              hover:bg-green-400
              text-white
              px-10
              py-5
              rounded-full
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              shadow-xl
            "
          >
            WhatsApp Booking
          </a>

      </div>
    </section>
  );
}