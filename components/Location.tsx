export default function Location() {
  return (
    <section className="bg-[#111111] py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[5px] text-yellow-500">
            Location
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            Find Us
          </h2>

        </div>

        <div className="rounded-3xl overflow-hidden">

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

      </div>

    </section>
  );
}