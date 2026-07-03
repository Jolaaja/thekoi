import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Koi",
    short_name: "The Koi",

    description:
      "Luxury Villa, Guest House, Spa, Pika Piko Cafe and Traditional Jamu Bar.",

    start_url: "/",

    display: "standalone",

    background_color: "#000000",

    theme_color: "#000000",

    orientation: "portrait",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },

      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}