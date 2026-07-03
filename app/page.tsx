import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import VillaSection from "@/components/VillaSection";
import GuestHouse from "@/components/GuestHouse";
import Spa from "@/components/Spa";
import Cafe from "@/components/Cafe";
import JamuBar from "@/components/JamuBar";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsappButton from "@/components/WhatsappButton";
import BookingWidget from "@/components/BookingWidget";
import BackToTop from "@/components/BackToTop";

export default function Home() {
      return (
        <>
      <Loader />

      <Navbar />

      <Hero />

      <BookingWidget />

      <About />

      <Experiences />

      <VillaSection />

      <GuestHouse />

      <Spa />

      <Cafe />

      <JamuBar />

      <Gallery />

      <Location />

      <Booking />

      <Footer />

      <FloatingWhatsApp />

      <WhatsappButton />

      <BackToTop />
    </>
  );
}