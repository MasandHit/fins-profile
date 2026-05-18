import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LinkedIn from '@/components/icons/LinkedIn';
import Instagram from '@/components/icons/Instagram';

export default function FooterSection() {
  return (
    <div className="w-full flex items-center justify-center flex-shrink-0" style={{ height: 'clamp(60px, 8vh, 80px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="glass-card w-full h-full flex items-center px-4 sm:px-8"
        style={{
          border: '1px solid rgba(96,207,255,1)',
          boxShadow: '0 0 16px rgba(96,207,255,0.2), 0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Desktop layout */}
        <div className="hidden sm:flex items-center justify-between w-full gap-2">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)', fontFamily: 'Merriweather, serif', fontSize: 'var(--text-base)' }}
            >
              F
            </div>
            <span className="font-bold grad-text whitespace-nowrap" style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-sm)' }}>FinSeek AI</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/company/panmas/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,1)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-xs)' }}
            >
              <LinkedIn className="w-3 h-3 flex-shrink-0" />LinkedIn
            </a>
            <a href="https://www.instagram.com/finseek_ai/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,1)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-xs)' }}
            >
              <Instagram className="w-3 h-3 flex-shrink-0" />Instagram
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:opacity-80 transition-opacity whitespace-nowrap" style={{ color: 'rgba(255,255,255,1)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-xs)' }}>Privacy Policy</Link>
            <Link to="/terms"   className="hover:opacity-80 transition-opacity whitespace-nowrap" style={{ color: 'rgba(255,255,255,1)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-xs)' }}>Terms & Conditions</Link>
          </div>
          <p className="whitespace-nowrap flex-shrink-0" style={{ color: 'rgba(255,255,255,1)', fontFamily: 'Lora, serif', fontSize: 'var(--text-xs)' }}>
            © {new Date().getFullYear()} FinSeek AI. All rights reserved.
          </p>
        </div>

        {/* Mobile layout — stacked two rows */}
        <div className="flex sm:hidden items-center justify-between w-full gap-2">
          <div className="flex items-center gap-1.5">
            <div
              className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)', fontFamily: 'Merriweather, serif', fontSize: 'var(--text-sm)' }}
            >
              F
            </div>
            <span className="font-bold grad-text" style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-sm)' }}>FinSeek AI</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:opacity-80" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Lora, serif', fontSize: 'var(--text-xs)' }}>Privacy</Link>
            <Link to="/terms"   className="hover:opacity-80" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Lora, serif', fontSize: 'var(--text-xs)' }}>Terms</Link>
            <a href="https://www.linkedin.com/company/panmas/" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.8)' }} />
            </a>
            <a href="https://www.instagram.com/finseek_ai/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.8)' }} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}