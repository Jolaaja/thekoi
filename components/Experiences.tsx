import Image from "next/image";

export default function Experiences() {
  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 tracking-[5px] uppercase">
            Experiences
          </p>

          <h2 className="text-white text-5xl font-bold mt-3">
            Explore The Koi
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="relative h-[500px] rounded-3xl overflow-hidden group">

            <Image
              src="/images/villa/villa-2.jpg"
              alt=""
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-10 left-10">
              <h3 className="text-white text-4xl font-bold">
                Villa Koi
              </h3>
            </div>

          </div>

          <div className="grid gap-8">

            <div className="relative h-[235px] rounded-3xl overflow-hidden group">

              <Image
                src="/images/guesthouse/guest-1.jpeg"
                alt=""
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-5 left-5 text-white text-2xl font-bold">
                Guest House
              </div>

            </div>

            <div className="grid grid-cols-2 gap-8">

              <div className="relative h-[235px] rounded-3xl overflow-hidden group">

                <Image
                  src="/images/spa/spa-1.jpeg"
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-5 left-5 text-white font-bold">
                  Spa
                </div>

              </div>

              <div className="relative h-[235px] rounded-3xl overflow-hidden group">

                <Image
                  src="/images/cafe/cafe-2.jpeg"
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-5 left-5 text-white font-bold">
                  Pika Piko Cafe
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}