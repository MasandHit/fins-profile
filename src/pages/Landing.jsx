import { useMemo } from 'react';
import Background from '@/components/layout/Background';
import NavSection from '@/components/sections/NavSection';
import HeroSection from '@/components/sections/HeroSection';
import CopilotSection from '@/components/sections/CopilotSection';
import ChartsSection from '@/components/sections/ChartsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import LaunchSection from "../components/sections/LaunchSection";
import FooterSection from '@/components/sections/FooterSection';
import useScrollSnap from '@/hooks/useScrollSnap';

const SECTIONS = 6;
const NAV_HEIGHT = 72;

export default function Landing() {
  const { containerRef, currentSection, goToSection } = useScrollSnap(SECTIONS, window.innerHeight);

  const { sectionStyle, vPad, isMobile } = useMemo(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isMobile = w < 640;

    const hPad = Math.round(w * (
      isMobile ? 0.04 :
      w < 1024 ? 0.06 :
                 0.09
    ));

    const vPad = Math.round(h * (
      isMobile ? 0.02 :
      w < 1024 ? 0.04 :
      w < 1280 ? 0.04 :
                 0.07
    ));

    const topPad = NAV_HEIGHT + vPad;

    const sectionStyle = {
      padding: `${topPad}px ${hPad}px ${vPad}px ${hPad}px`,
      boxSizing: 'border-box',
    };

    return { sectionStyle, vPad, isMobile };
  }, []);

  /* ── Mobile: normal scroll, no snap ─────────── */
  if (isMobile) {
    const mobileGoToSection = (index) => {
      const el = document.getElementById(`mobile-section-${index}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div style={{ background: '#08090D', minHeight: '100vh', width: '100%' }}>
        {/* Nav */}
        <div style={{ padding: '12px 12px 0' }}>
          <NavSection goToSection={mobileGoToSection} />
        </div>

        {/* Gap between nav and first section, bottom breathing room */}
        <div style={{ padding: '0 16px', marginTop: '16px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div id="mobile-section-0"><HeroSection goToSection={mobileGoToSection} /></div>
          <div id="mobile-section-1"><CopilotSection /></div>
          <div id="mobile-section-2"><ChartsSection /></div>
          <div id="mobile-section-3"><FeaturesSection /></div>
          <div id="mobile-section-4"><PricingSection goToSection={mobileGoToSection} /></div>
          <div id="mobile-section-5"><LaunchSection /></div>
          <FooterSection />
        </div>
      </div>
    );
  }

  /* ── Desktop/tablet: snap scroll ────────────── */
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
        <div className="snap-section" style={sectionStyle}>
          <div className="w-full h-full flex flex-col" style={{ gap: `${vPad}px` }}>
            <LaunchSection />
            <FooterSection />
          </div>
        </div>
      </div>

      {/* Scroll dots with pill — desktop only */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex">
        <div
          className="flex flex-col items-center gap-2 px-2 py-3 rounded-full"
          style={{
            background: 'rgba(18,20,28,0.72)',
            border: '0.5px solid rgba(96,207,255,0.4)',
            backdropFilter: 'blur(28px)',
            boxShadow: '0 0 12px rgba(96,207,255,0.15), 0 4px 24px rgba(0,0,0,0.4)',
          }}
        >
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
    </div>
  );
}