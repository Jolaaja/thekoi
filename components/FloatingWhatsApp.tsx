export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6289527360152"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        group
      "
    >
      <div
        className="
          w-16
          h-16
          rounded-full
          bg-green-500
          flex
          items-center
          justify-center
          shadow-2xl
          hover:scale-110
          transition
          duration-300
          animate-pulse
        "
      >
        <span className="text-3xl text-white">
          💬
        </span>
      </div>

      <div
        className="
          absolute
          right-20
          top-1/2
          -translate-y-1/2
          bg-black
          text-white
          px-4
          py-2
          rounded-xl
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition
          pointer-events-none
        "
      >
        Chat via WhatsApp
      </div>
    </a>
  );
}