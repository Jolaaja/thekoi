import Image from "next/image";

const photos = [
  "/images/villa/villa-1.jpg",
  "/images/villa/villa-2.jpg",
  "/images/villa/villa-3.jpg",
  "/images/guesthouse/guest-1.jpeg",
  "/images/guesthouse/guest-2.jpeg",
  "/images/spa/spa-1.jpeg",
  "/images/cafe/cafe-1.jpeg",
  "/images/cafe/cafe-4.jpeg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#111111] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 uppercase tracking-[5px]">
            Gallery
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            Explore The Koi
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-4">

          {photos.map((photo, index) => (

            <div
              key={index}
              className="relative h-[300px] rounded-3xl overflow-hidden"
            >

              <Image
                src={photo}
                alt=""
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}