import { motion } from 'framer-motion';

export default function NavSection({ goToSection }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card px-6 py-3" style={{ border: '0.5px solid rgba(96,207,255,1)' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-md font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #3B6EF8, #100CFFF)' }}
            >
              F
            </div>
            <span className="text-xl font-medium grad-text">FinSeek AI</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => goToSection(3)}
              className="text-xl grad-text opacity-100 hover:opacity-100 transition-opacity"
            >
              Features
            </button>
            <button
              onClick={() => goToSection(4)}
              className="text-xl grad-text opacity-100 hover:opacity-100 transition-opacity"
            >
              Pricing
            </button>
            <button onClick={() => goToSection(3)} className="text-xl grad-text opacity-100 hover:opacity-100 transition-opacity">
              Features
            </button>
            <button
              onClick={() => goToSection(6)}
              className="text-md font-medium text-white px-4 py-2 rounded-full"
              style={{ background: 'linear-gradient(135deg, #3B6EF8, #80CFFF)' }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}