export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}

          <div>

            <h2 className="text-white text-3xl font-bold mb-4">
              THE KOI
            </h2>

            <p className="text-gray-400 leading-7">
              Luxury destination featuring Villa,
              Guest House, Spa and Pika Piko Cafe
              in one exclusive location.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="#home"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Home
              </a>

              <a
                href="#villa"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Villa
              </a>

              <a
                href="#guesthouse"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Guest House
              </a>

              <a
                href="#spa"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Spa
              </a>

              <a
                href="#cafe"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Pika Piko Cafe
              </a>

              <a
                href="#gallery"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Gallery
              </a>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <p>
                📍 Bandung, Indonesia
              </p>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                className="hover:text-green-500 transition"
              >
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/thevillakoi/"
                target="_blank"
                className="hover:text-pink-500 transition"
              >
                Instagram
              </a>

              <a
                href="https://maps.app.goo.gl/jNbSradpgSVEaESp7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                Google Maps
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center">

          <p className="text-gray-500">
            © 2026 The Koi. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}