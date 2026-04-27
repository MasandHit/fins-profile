import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ goToSection }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass-card w-full h-full flex flex-col items-center justify-center text-center px-10" style={{ border: '0.5px solid rgba(184, 115, 51, 1)' }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{
            color: '#60CFFF',
            background: 'rgba(96,207,255,0.1)',
            border: '0.5px solid rgba(96,207,255,0.25)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#60CFFF' }} />
          Early access — limited spots
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-semibold text-white leading-[1.1] mb-5">
          Your money,
          <br />
          <span className="grad-text">finally intelligent</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-base font-medium leading-relaxed max-w-sm mx-auto mb-8"
          style={{ color: 'rgba(255,255,255,0.8)' }}
        >
          AI that reads your finances, spots patterns you miss, and tells you
          exactly what to do next.
        </p>

        {/* CTA */}
        <button
          onClick={() => goToSection(4)}
          className="inline-flex items-center gap-2 text-base font-semibold text-white px-8 py-3.5 rounded-full mb-10"
          style={{ background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)' }}
        >
          Get early access →
        </button>

        {/* Stats */}
        <div
          className="grid grid-cols-3 rounded-2xl overflow-hidden w-full max-w-sm"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '0.5px solid rgba(255,255,255,0.09)',
          }}
        >
          {[
            { value: 'AI', label: 'Powered insights' },
            { value: '100%', label: 'Privacy first' },
            { value: '$7.99', label: 'Per month pro' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="py-5 text-center"
              style={{
                borderRight: i < 2 ? '0.5px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div className="text-xl font-semibold text-white">{stat.value}</div>
              <div className="text-sm mt-0.5 font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => goToSection(1)}
          className="mt-8 mx-auto flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-80"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '0.5px solid rgba(255,255,255,0.12)',
          }}
        >
          <ArrowDown className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.6)' }} />
        </button>
      </motion.div>
    </div>
  );
}