import SpsNav from "@/components/SpsNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RidesSection from "@/components/RidesSection";
import JerseySection from "@/components/JerseySection";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import SocialSection from "@/components/SocialSection";
import CookieBanner from "@/components/CookieBanner";
import SpsFooter from "@/components/SpsFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ scrollBehavior: "smooth" }}>
      <SpsNav />
      <HeroSection />
      <AboutSection />
      <RidesSection />
      <JerseySection />
      <div
        style={{
          background: "linear-gradient(180deg, hsl(264 80% 5%) 0%, hsl(264 80% 10%) 30%, hsl(264 80% 8%) 60%, hsl(264 80% 5%) 100%)",
        }}
      >
        <JoinSection />
        <ContactSection />
        <SocialSection />
        
      </div>
      <SpsFooter />
      <CookieBanner />
    </div>
  );
};

export default Index;
