import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ goToSection }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass-card w-full h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 overflow-y-auto"
        style={{
          border: '1px solid rgba(184,115,51,1)',
          boxShadow: '0 0 24px rgba(184,115,51,0.35), 0 8px 48px rgba(0,0,0,0.45)',
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-8"
          style={{
            fontFamily: 'Lora, serif',
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            color: '#60CFFF',
            background: 'rgba(96,207,255,0.1)',
            border: '0.5px solid rgba(96,207,255,0.25)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#60CFFF' }} />
          Early access — limited spots
        </div>

        {/* Heading */}
        <h1
          className="font-black text-white leading-[1.15] mb-4 sm:mb-5"
          style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-6xl)' }}
        >
          Your money,
          <br />
          <span className="grad-text">finally intelligent</span>
        </h1>

        {/* Subtext */}
        <p
          className="leading-relaxed max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8"
          style={{ color: 'rgba(255,255,255,0.95)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-base)' }}
        >
          AI that reads your finances, spots patterns you miss, and tells you exactly what to do next.
        </p>

        {/* CTA */}
        <button
          onClick={() => goToSection(5)}
          className="inline-flex items-center gap-2 font-semibold text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full mb-6 sm:mb-10"
          style={{
            background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)',
            fontFamily: 'Lora, serif',
            fontSize: 'var(--text-base)',
          }}
        >
          Get early access →
        </button>

        {/* Stats */}
        <div
          className="grid grid-cols-3 rounded-2xl overflow-hidden w-full max-w-xs sm:max-w-sm"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '0.5px solid rgba(255,255,255,0.12)',
          }}
        >
          {[
            { value: 'AI',     label: 'Powered insights' },
            { value: '100%',   label: 'Privacy first' },
            { value: '$7.99',  label: 'Per month pro' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="py-3 sm:py-5 text-center"
              style={{ borderRight: i < 2 ? '0.5px solid rgba(255,255,255,0.07)' : 'none' }}
            >
              <div
                className="font-bold text-white"
                style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-xl)' }}
              >
                {stat.value}
              </div>
              <div
                className="mt-0.5"
                style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-xs)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => goToSection(1)}
          className="mt-5 sm:mt-8 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-opacity hover:opacity-80"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '0.5px solid rgba(255,255,255,0.12)',
          }}
        >
          <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: 'rgba(255,255,255,0.75)' }} />
        </button>
      </motion.div>
    </div>
  );
}