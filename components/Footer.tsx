export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* BRAND */}

          <div>

            <h2 className="text-3xl font-bold text-white tracking-[4px]">
              THE KOI
            </h2>

            <div className="w-20 h-[3px] bg-yellow-500 rounded-full mt-4 mb-6"></div>

            <p className="text-gray-400 leading-8">
              Experience luxury accommodation, relaxing spa,
              premium dining, and authentic Indonesian herbal
              drinks in one exclusive destination.
            </p>

            <p className="text-yellow-500 mt-6 uppercase tracking-[4px] text-sm">
              Luxury Escape
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a href="#home" className="text-gray-400 hover:text-yellow-500 transition-all duration-300">
                Home
              </a>

              <a href="#villa" className="text-gray-400 hover:text-yellow-500 transition-all duration-300">
                Villa
              </a>

              <a href="#guesthouse" className="text-gray-400 hover:text-yellow-500 transition-all duration-300">
                Guest House
              </a>

              <a href="#spa" className="text-gray-400 hover:text-yellow-500 transition-all duration-300">
                Spa
              </a>

              <a href="#cafe" className="text-gray-400 hover:text-yellow-500 transition-all duration-300">
                Pika Piko Cafe
              </a>

              <a href="#jamu" className="text-gray-400 hover:text-yellow-500 transition-all duration-300">
                Traditional Jamu Bar
              </a>

              <a href="#gallery" className="text-gray-400 hover:text-yellow-500 transition-all duration-300">
                Gallery
              </a>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Reservation
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                📞 Mela<br />
                +62 857-2217-9300
              </p>

              <p>
                📞 Anggi<br />
                +62 813-2327-5441
              </p>

              <p>
                📞 Asti<br />
                +62 856-0742-9935
              </p>

            </div>

          </div>

          {/* LOCATION */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Visit Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                📍 Bandung, West Java, Indonesia
              </p>

              <p>
                🕒 Open Everyday
                <br />
                08:00 - 22:00
              </p>

              <a
                href="https://www.instagram.com/thevillakoi/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-pink-500 transition-all duration-300"
              >
                📷 Instagram
              </a>

              <a
                href="https://maps.app.goo.gl/jNbSradpgSVEaESp7"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-500 transition-all duration-300"
              >
                📍 Google Maps
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm">
              © 2026 The Koi. All Rights Reserved.
            </p>

            <p className="text-gray-600 text-sm">
              Designed with ❤️ for The Koi Luxury Experience
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}