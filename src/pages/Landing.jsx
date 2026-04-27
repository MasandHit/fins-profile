import Background from '@/components/layout/Background';
import NavSection from '@/components/sections/NavSection';
import HeroSection from '@/components/sections/HeroSection';
import CopilotSection from '@/components/sections/CopilotSection';
import ChartsSection from '@/components/sections/ChartsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import WaitlistSection from '@/components/sections/WaitlistSection';
import FooterSection from '@/components/sections/FooterSection';
import useScrollSnap from '@/hooks/useScrollSnap';

const SECTIONS = 6;
const NAV_HEIGHT = 72;
const GAP = 80;

export default function Landing() {
  const { containerRef, currentSection, goToSection } = useScrollSnap(SECTIONS);

  const sectionStyle = {
    padding: `${NAV_HEIGHT + Math.round(window.innerHeight * 0.03)}px ${Math.round(window.innerWidth * 0.03)}px ${Math.round(window.innerHeight * 0.03)}px ${Math.round(window.innerWidth * 0.03)}px`,
  boxSizing: 'border-box',
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Background />
      <NavSection goToSection={goToSection} />

      <div ref={containerRef} className="snap-container relative z-10">
        <div className="snap-section" style={sectionStyle}>
          <HeroSection goToSection={goToSection} />
        </div>
        <div className="snap-section" style={sectionStyle}>
          <CopilotSection />
        </div>
        <div className="snap-section" style={sectionStyle}>
          <ChartsSection />
        </div>
        <div className="snap-section" style={sectionStyle}>
          <FeaturesSection />
        </div>
        <div className="snap-section" style={sectionStyle}>
          <PricingSection goToSection={goToSection} />
        </div>

        {/* Waitlist + Footer combined */}
        <div className="snap-section" style={sectionStyle}>
          <div className="w-full h-full flex flex-col gap-20">
            <WaitlistSection />
            <FooterSection />
          </div>
        </div>
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {Array.from({ length: SECTIONS }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSection(i)}
            className="w-1.5 rounded-full transition-all duration-300"
            style={{
              height: currentSection === i ? 24 : 6,
              background: currentSection === i
                ? 'linear-gradient(to bottom, #3B6EF8, #60CFFF)'
                : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>
    </div>
  );
}