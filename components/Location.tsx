export default function Location() {
  return (
    <section
      id="location"
      data-aos="fade-up"
      className="bg-[#111111] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-12">

          <p className="uppercase tracking-[5px] text-yellow-500">
            Location
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            Find Us
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            The Villa Koi berlokasi di kawasan yang nyaman dan mudah dijangkau.
            Temukan lokasi kami melalui Google Maps dan nikmati pengalaman
            menginap yang eksklusif.
          </p>

        </div>

        {/* MAP */}

        <div
          className="
            rounded-3xl
            overflow-hidden
            border
            border-zinc-800
            shadow-2xl
            transition-all
            duration-500
            hover:border-yellow-500
          "
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.731766957666!2d107.72532547492361!3d-6.922634393077053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd293d318f55%3A0x52e770cd49dde4e1!2sThe%20Villa%20Koi!5e0!3m2!1sid!2sid!4v1781979804775!5m2!1sid!2sid"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

        {/* BUTTON */}

        <div className="flex justify-center mt-10">

          <a
            href="https://maps.app.goo.gl/jNbSradpgSVEaESp7"
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
            Open in Google Maps
          </a>

        </div>

      </div>
    </section>
  );
}