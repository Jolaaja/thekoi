import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import VillaSection from "@/components/VillaSection";
import GuestHouse from "@/components/GuestHouse";
import Spa from "@/components/Spa";
import Cafe from "@/components/Cafe";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Experiences />

      <VillaSection />

      <GuestHouse />

      <Spa />

      <Cafe />

      <Gallery />

      <Location />

      <Booking />

      <Footer />

      <FloatingWhatsApp />
      <WhatsappButton />
    </>
  );
}