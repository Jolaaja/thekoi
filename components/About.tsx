export default function About() {
  return (
    <section className="bg-[#0d0d0d] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-yellow-500 uppercase tracking-[5px] mb-3">
              About The Koi
            </p>

            <h2 className="text-5xl font-bold text-white mb-6">
              Luxury Escape in Bandung
            </h2>

            <p className="text-gray-400 leading-8">
              The Koi menghadirkan pengalaman menginap premium dengan
              kombinasi Villa Jepang modern, Guest House eksklusif,
              Spa relaksasi, dan Pika Piko Cafe yang nyaman.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              Dirancang untuk keluarga, pasangan, staycation,
              gathering hingga corporate retreat.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-zinc-900 p-8 rounded-2xl">
              <h3 className="text-yellow-500 text-4xl font-bold">4+</h3>
              <p className="text-white mt-2">Luxury Rooms</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl">
              <h3 className="text-yellow-500 text-4xl font-bold">1</h3>
              <p className="text-white mt-2">Spa Facility</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl">
              <h3 className="text-yellow-500 text-4xl font-bold">1</h3>
              <p className="text-white mt-2">Cafe</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl">
              <h3 className="text-yellow-500 text-4xl font-bold">24/7</h3>
              <p className="text-white mt-2">Guest Service</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}