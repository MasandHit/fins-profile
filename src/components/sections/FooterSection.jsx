import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LinkedIn from '@/components/icons/LinkedIn';
import Instagram from '@/components/icons/Instagram';

export default function FooterSection() {
  return (
    <div className="w-full flex items-center justify-center" style={{ height: '80px' }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="glass-card w-full h-full flex items-center px-8" style={{ border: '0.5px solid rgba(96,207,255,1)' }}
      >
        <div className="flex items-center justify-between w-full">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/finlogo.png" alt="FinSeek AI" className="w-10 h-10 rounded-md" />
            <span className="text-lg font-medium grad-text">FinSeek AI</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/panmas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-md hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,1)' }}><LinkedIn className="w-3.5 h-3.5" />LinkedIn</a>
            <a href="https://www.instagram.com/finseek_ai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-md hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,1)' }}><Instagram className="w-3.5 h-3.5" />Instagram</a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-md hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,1)' }}>Privacy Policy</Link>
            <Link to="/terms" className="text-md hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,1)' }}>Terms & Conditions</Link>
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: 'rgba(rgba(255,255,255,1)' }}>© {new Date().getFullYear()} FinSeek AI. All rights reserved.</p>

        </div>
      </motion.div>
    </div>
  );
}