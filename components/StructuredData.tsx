export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",

    name: "The Koi",

    image: "https://the-koi.my.id/images/og/opengraph-image.png",

    description:
      "Luxury Villa, Guest House, Spa, Pika Piko Cafe and Traditional Jamu Bar.",

    url: "https://the-koi.my.id",

    telephone: "+6285722179300",

    address: {
      "@type": "PostalAddress",

      addressLocality: "Bandung",

      addressRegion: "West Java",

      addressCountry: "Indonesia",
    },

    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Villa",
      },

      {
        "@type": "LocationFeatureSpecification",
        name: "Guest House",
      },

      {
        "@type": "LocationFeatureSpecification",
        name: "Spa",
      },

      {
        "@type": "LocationFeatureSpecification",
        name: "Pika Piko Cafe",
      },

      {
        "@type": "LocationFeatureSpecification",
        name: "Traditional Jamu Bar",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}