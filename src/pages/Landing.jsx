import { useMemo } from 'react';
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

export default function Landing() {
  // Pass window.innerHeight so the hook always knows the true section height.
  // snap-section uses height:100vh which equals window.innerHeight,
  // so scroll math stays perfectly in sync on every screen size.
  const { containerRef, currentSection, goToSection } = useScrollSnap(SECTIONS, window.innerHeight);

  const { sectionStyle, vPad } = useMemo(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const hPad = Math.round(w * (
      w < 640  ? 0.04 :
      w < 1024 ? 0.06 :
                 0.09
    ));

    const vPad = Math.round(h * (
      w < 640  ? 0.02 :
      w < 1024 ? 0.04 :
      w < 1280 ? 0.04 :  // MacBook Air — tighter so cards don't clip
                 0.07
    ));

    const topPad = NAV_HEIGHT + vPad;
    return {
      sectionStyle: {
        padding: `${topPad}px ${hPad}px ${vPad}px ${hPad}px`,
        boxSizing: 'border-box',
      },
      vPad,
    };
  }, []);

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

        {/* Waitlist + Footer — gap matches vPad */}
        <div className="snap-section" style={sectionStyle}>
          <div className="w-full h-full flex flex-col" style={{ gap: `${vPad}px` }}>
            <WaitlistSection />
            <FooterSection />
          </div>
        </div>
      </div>

      {/* Scroll dots */}
      <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
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