import { AnnouncementBar } from "./components/AnnouncementBar";
import { HeroSection } from "./components/HeroSection";
import { WhatsAppDelivery } from "./components/WhatsAppDelivery";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FaqSection } from "./components/FaqSection";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { SeriesImageProvider } from "./context/SeriesImageContext";

export default function App() {
  return (
    <SeriesImageProvider>
      <div className="min-h-screen bg-[#0b0c10] text-[#eaeaea] font-sans selection:bg-amber-500 selection:text-black">
        {/* Top Scarcity Bar */}
        <AnnouncementBar />

        {/* Main Content */}
        <main>
          {/* 1. Hero: Clean Cover Image with Upload Option, Title, Synopsis, Pix Price R$ 4,99, WhatsApp delivery, CTA */}
          <HeroSection />

          {/* 2. WhatsApp Delivery: 3 Quick Steps on How It Works */}
          <WhatsAppDelivery />

          {/* 3. Official 7-Day Guarantee */}
          <GuaranteeSection />

          {/* 4. Frequently Asked Questions */}
          <FaqSection />
        </main>

        {/* Sticky Bottom Bar for fast access */}
        <FloatingCta />

        {/* Footer */}
        <Footer />
      </div>
    </SeriesImageProvider>
  );
}
