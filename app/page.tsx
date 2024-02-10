import Container from "@/components/container";
import EventInfo from "@/components/sections/event-info-section";
import TicketSection from "@/components/sections/ticket-link-section";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import Navbar from "@/components/sections/navbar";
import TitleSection from "@/components/sections/title-section";
import VideoSection from "@/components/sections/video-section";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Container>
        <HeroSection />
        <TitleSection />
        <TicketSection />
        <VideoSection />
        <EventInfo />
      </Container>
      <Footer />
    </main>
  );
}
