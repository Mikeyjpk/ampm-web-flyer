import { Suspense } from "react";

import Container from "@/components/container";
import EventInfo from "@/components/sections/event-info-section";
import TicketSection from "@/components/sections/ticket-link-section";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import TitleSection from "@/components/sections/title-section";
import VideoSection from "@/components/sections/video-section";
import Loading from "@/components/loading";

export default function Home() {
  return (
    <main>
        <Container>
          <HeroSection />
          <TicketSection />
          <Suspense fallback={<Loading />}>
            <VideoSection />
          </Suspense>
          <TitleSection />
          <EventInfo />
        </Container>
      <Footer />
    </main>
  );
}
