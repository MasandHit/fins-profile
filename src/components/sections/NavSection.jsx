import { motion } from 'framer-motion';

export default function NavSection({ goToSection }) {
  return (
    <div className="relative sm:absolute top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card px-4 sm:px-6 py-2.5 sm:py-3"
        style={{
          border: '1px solid rgba(96,207,255,1)',
          boxShadow: '0 0 20px rgba(96,207,255,0.25), 0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)', fontFamily: 'Merriweather, serif', fontSize: 'var(--text-base)' }}
            >
              F
            </div>
            <span
              className="font-bold grad-text nav-logo-text truncate"
              style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-lg)' }}
            >
              FinSeek AI
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => goToSection(3)}
              className="grad-text transition-opacity hover:opacity-80 nav-links-text hidden sm:block"
              style={{ fontFamily: 'Lora, serif', fontWeight: 600, fontSize: 'var(--text-base)' }}
            >
              Features
            </button>
            <button
              onClick={() => goToSection(4)}
              className="grad-text transition-opacity hover:opacity-80 nav-links-text hidden sm:block"
              style={{ fontFamily: 'Lora, serif', fontWeight: 600, fontSize: 'var(--text-base)' }}
            >
              Pricing
            </button>
            <a
              href="https://beta.finseekai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Beta
            </a>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}