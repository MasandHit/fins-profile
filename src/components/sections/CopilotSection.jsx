import { motion } from 'framer-motion';

const messages = [
  { role: 'user', text: 'Where did most of my money go last month?' },
  { role: 'ai', text: 'You spent $1,840 on housing (52%), $420 on food (12%). I also found 3 unused subscriptions costing $94/mo.' },
  { role: 'user', text: 'How much is that per year?' },
  { role: 'ai', text: 'That\'s $1,128/year back in your pocket. Want me to identify which ones to cut?' },
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
        className="glass-card w-full h-full flex flex-col px-8 py-6" style={{ border: '0.5px solid rgba(255, 255, 255, 1.0)' }}>
        {/* Header */}
        <div
          className="text-center pb-5 mb-5"
          style={{ borderBottom: '0.5px solid rgba(96,207,255,1)' }}
        >
          <div
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#60CFFF' }}
          >
            ✦ AI Copilot
          </div>
          <h2 className="text-4xl font-semibold text-white mb-2">
            Chat with your{' '}
            <span className="grad-text">finances</span>
          </h2>
          <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Ask anything in plain English. Get instant AI-powered answers and personalized recommendations.
          </p>
        </div>

        {/* Prompt suggestions */}
        <div className="flex gap-3 justify-center mb-6 flex-wrap">
          {suggestions.map((s) => (
            <div
              key={s}
              className="text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer text-center transition-all hover:bg-cyan-500/10"
              style={{
                color: '#60CFFF',
                background: 'rgba(96,207,255,0.07)',
                border: '0.5px solid rgba(96,207,255,0.25)',
                maxWidth: 240,
                lineHeight: 1.4,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Chat messages */}
        <div className="flex flex-col gap-4 flex-1 justify-center">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-3 items-start"
            >
              {/* Avatar */}
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-semibold"
                style={
                  msg.role === 'user'
                    ? { background: 'rgba(59,110,248,0.2)', color: '#60CFFF' }
                    : { background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)', color: '#fff' }
                }
              >
                {msg.role === 'user' ? 'U' : '✦'}
              </div>

              {/* Bubble */}
              <div
                className="text-sm font-medium leading-relaxed px-4 py-3 rounded-2xl max-w-[85%]"
                style={
                  msg.role === 'user'
                    ? {
                        background: 'rgba(59,110,248,0.15)',
                        border: '0.5px solid rgba(59,110,248,0.25)',
                        color: 'rgba(255,255,255,1)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.08)',
                        border: '0.5px solid rgba(255,255,255,0.12)',
                        color: 'rgba(255,255,255,1)',
                      }
                }
                dangerouslySetInnerHTML={{
                  __html: msg.text
                    .replace('3 unused subscriptions', '<strong style="color:#60CFFF">3 unused subscriptions</strong>')
                    .replace('$94/mo', '<strong style="color:#60CFFF">$94/mo</strong>')
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