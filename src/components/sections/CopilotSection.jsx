import { motion } from 'framer-motion';

const messages = [
  { role: 'user', text: 'Where did most of my money go last month?' },
  { role: 'ai',   text: 'You spent $1,840 on housing (52%), $420 on food (12%). I also found 3 unused subscriptions costing $94/mo.' },
  { role: 'user', text: 'How much is that per year?' },
  { role: 'ai',   text: 'That\'s $1,128/year back in your pocket. Want me to identify which ones to cut?' },
];

const suggestions = [
  'Compare my spending across the last 3 months',
  'How can I save for a luxury car in 2 years?',
];

export default function CopilotSection() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card w-full h-full flex flex-col px-4 sm:px-8 py-4 sm:py-6"
        style={{
          border: '1px solid rgba(255,255,255,0.9)',
          boxShadow: '0 0 24px rgba(255,255,255,0.12), 0 8px 48px rgba(0,0,0,0.45)',
        }}
      >
        {/* Header */}
        <div
          className="text-center pb-4 sm:pb-5 mb-4 sm:mb-5 flex-shrink-0"
          style={{ borderBottom: '0.5px solid rgba(96,207,255,0.4)' }}
        >
          <div
            className="inline-block font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#60CFFF', fontFamily: 'Lora, serif', fontSize: 'var(--text-xs)' }}
          >
            ✦ AI Copilot
          </div>
          <h2
            className="font-black text-white mb-2"
            style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-4xl)' }}
          >
            Chat with your{' '}
            <span className="grad-text">finances</span>
          </h2>
          <p
            className="leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.95)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-sm)' }}
          >
            Ask anything in plain English. Get instant AI-powered answers and personalized recommendations.
          </p>
        </div>

        {/* Prompt suggestions */}
        <div className="flex gap-2 sm:gap-3 justify-center mb-4 sm:mb-6 flex-wrap flex-shrink-0">
          {suggestions.map((s) => (
            <div
              key={s}
              className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full cursor-pointer text-center transition-all hover:bg-cyan-500/10"
              style={{
                color: '#60CFFF',
                background: 'rgba(96,207,255,0.07)',
                border: '0.5px solid rgba(96,207,255,0.35)',
                maxWidth: 240,
                lineHeight: 1.4,
                fontFamily: 'Lora, serif',
                fontWeight: 500,
                fontSize: 'var(--text-xs)',
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Chat messages — flex-1 + overflow-y-auto so they scroll on mobile */}
        <div className="flex flex-col gap-3 sm:gap-4 flex-1 overflow-y-auto justify-center sm:justify-center">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-2 sm:gap-3 items-start flex-shrink-0"
            >
              {/* Avatar */}
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 flex items-center justify-center font-semibold"
                style={
                  msg.role === 'user'
                    ? { background: 'rgba(59,110,248,0.2)', color: '#60CFFF', fontFamily: 'Lora, serif', fontSize: 'var(--text-sm)' }
                    : { background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)', color: '#fff', fontSize: 'var(--text-sm)' }
                }
              >
                {msg.role === 'user' ? 'U' : '✦'}
              </div>

              {/* Bubble */}
              <div
                className="leading-relaxed px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl max-w-[88%] sm:max-w-[85%]"
                style={
                  msg.role === 'user'
                    ? {
                        background: 'rgba(59,110,248,0.15)',
                        border: '0.5px solid rgba(59,110,248,0.35)',
                        color: 'rgba(255,255,255,1)',
                        fontFamily: 'Lora, serif',
                        fontWeight: 500,
                        fontSize: 'var(--text-sm)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.08)',
                        border: '0.5px solid rgba(255,255,255,0.18)',
                        color: 'rgba(255,255,255,1)',
                        fontFamily: 'Lora, serif',
                        fontWeight: 500,
                        fontSize: 'var(--text-sm)',
                      }
                }
                dangerouslySetInnerHTML={{
                  __html: msg.text
                    .replace('3 unused subscriptions', '<strong style="color:#60CFFF">3 unused subscriptions</strong>')
                    .replace('$94/mo',      '<strong style="color:#60CFFF">$94/mo</strong>')
                    .replace('$1,128/year', '<strong style="color:#60CFFF">$1,128/year</strong>'),
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}