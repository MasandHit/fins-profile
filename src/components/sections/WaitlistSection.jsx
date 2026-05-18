import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { joinWaitlist } from '@/api/waitlist';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || honeypot) return;
    setError('');
    setLoading(true);
    try {
      await joinWaitlist(email, 'pro', honeypot);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex-1 flex items-center justify-center min-h-0">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-8"
        style={{
          border: '1px solid rgba(0,206,209,1)',
          boxShadow: '0 0 24px rgba(0,206,209,0.3), 0 8px 48px rgba(0,0,0,0.45)',
        }}
      >
        {/* Header */}
        <div className="mb-5 sm:mb-8 pb-4 sm:pb-6 w-full flex-shrink-0" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.1)' }}>
          <div className="inline-block font-semibold tracking-widest uppercase mb-3" style={{ color: '#60CFFF', fontFamily: 'Lora, serif', fontSize: 'var(--text-xs)' }}>
            ✦ Waitlist
          </div>
          <h2 className="font-black text-white mb-2" style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-5xl)' }}>
            Be first.{' '}
            <span className="grad-text">Get founding pricing.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-base)' }}>
            Early members get first access to every feature before public launch.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 py-4"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.15)' }}>
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: '#4ade80' }} />
              </div>
              <h3 className="font-bold text-white" style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-xl)' }}>You're on the list!</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-base)' }}>
                We'll email you as soon as FinSeek AI is ready for early testing.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 sm:gap-5 w-full"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                style={{
                  color: '#60CFFF',
                  background: 'rgba(96,207,255,0.1)',
                  border: '0.5px solid rgba(96,207,255,0.35)',
                  fontFamily: 'Lora, serif',
                  fontWeight: 500,
                  fontSize: 'var(--text-sm)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#60CFFF' }} />
                Limited early access
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
                <input
                  type="text" name="website" value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, width: 0, zIndex: -1 }}
                  tabIndex={-1} autoComplete="off" aria-hidden="true"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  required
                  className="flex-1 px-4 py-3 rounded-full outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'rgba(255,255,255,1)',
                    fontFamily: 'Lora, serif',
                    fontWeight: 500,
                    fontSize: 'var(--text-base)',
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-1.5 font-semibold text-white px-5 sm:px-6 py-3 rounded-full whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)', fontFamily: 'Lora, serif', fontSize: 'var(--text-sm)' }}
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (<>Join Waitlist <ArrowRight className="w-3.5 h-3.5" /></>)}
                </button>
              </form>

              {error && (
                <p style={{ color: '#f87171', fontFamily: 'Lora, serif', fontSize: 'var(--text-sm)' }}>{error}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}