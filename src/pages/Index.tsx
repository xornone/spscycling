import SpsNav from "@/components/SpsNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RidesSection from "@/components/RidesSection";
import JerseySection from "@/components/JerseySection";
import JoinSection from "@/components/JoinSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import SpsFooter from "@/components/SpsFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ scrollBehavior: "smooth" }}>
      <SpsNav />
      <HeroSection />
      <AboutSection />
      <RidesSection />
      <JerseySection />
      <JoinSection />
      <SocialSection />
      <ContactSection />
      <SpsFooter />
    </div>
  );
};

export default Index;
