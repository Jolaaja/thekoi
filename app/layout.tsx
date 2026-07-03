import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import AOSProvider from "@/components/AOSProvider";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://the-koi.my.id"),

  title: {
    default: "The Koi | Luxury Villa, Guest House, Spa & Pika Piko Cafe",
    template: "%s | The Koi",
  },

  description:
    "Experience luxury accommodation, private villa, guest house, wellness spa, Pika Piko Cafe, and Traditional Jamu Bar in Bandung.",

  keywords: [
    "The Koi",
    "Villa Bandung",
    "Guest House Bandung",
    "Spa Bandung",
    "Pika Piko Cafe",
    "Traditional Jamu Bar",
    "Luxury Villa Bandung",
    "Staycation Bandung",
    "Resort Bandung",
  ],

  applicationName: "The Koi",

  authors: [
    {
      name: "The Koi",
      url: "https://the-koi.my.id",
    },
  ],

  creator: "The Koi",

  publisher: "The Koi",

  category: "Hotel",

  alternates: {
    canonical: "https://the-koi.my.id",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "The Koi | Luxury Villa, Guest House, Spa & Pika Piko Cafe",

    description:
      "Luxury Villa, Guest House, Spa, Pika Piko Cafe and Traditional Jamu Bar in Bandung.",

    url: "https://the-koi.my.id",

    siteName: "The Koi",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/images/og/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "The Koi Luxury Escape",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "The Koi",

    description:
      "Luxury Villa, Guest House, Spa, Pika Piko Cafe and Traditional Jamu Bar.",

    images: ["/images/og/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-black text-white antialiased">

        <StructuredData />

        <ScrollProgress />

        <SmoothScroll />

        <AOSProvider>
          {children}
        </AOSProvider>

      </body>
    </html>
  );
}