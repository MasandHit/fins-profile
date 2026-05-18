import { motion } from 'framer-motion';
import {
  LayoutDashboard, ArrowLeftRight, PieChart,
  CreditCard, MessageSquare, Lightbulb
} from 'lucide-react';

const features = [
  { icon: LayoutDashboard, title: 'Smart Dashboard',      desc: 'Income, expenses, net balance at a glance.',     pro: false },
  { icon: ArrowLeftRight,  title: 'Transaction Tracking', desc: 'Auto-categorize every transaction instantly.',   pro: false },
  { icon: PieChart,        title: 'Spending Analysis',    desc: 'Visual breakdowns of your spending patterns.',   pro: false },
  { icon: CreditCard,      title: 'Subscription Manager', desc: 'Spot and cut unused subscriptions.',             pro: false },
  { icon: MessageSquare,   title: 'AI Copilot',           desc: 'Chat with your finances like ChatGPT.',          pro: true  },
  { icon: Lightbulb,       title: 'AI Insights',          desc: 'Personalized savings recommendations.',          pro: true  },
];

export default function FeaturesSection() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card w-full h-full flex flex-col px-4 sm:px-8 py-4 sm:py-6"
        style={{
          border: '1px solid rgba(255,105,180,1)',
          boxShadow: '0 0 24px rgba(255,105,180,0.3), 0 8px 48px rgba(0,0,0,0.45)',
        }}
      >
        {/* Header */}
        <div className="text-center pb-4 sm:pb-5 mb-4 sm:mb-5 flex-shrink-0" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.1)' }}>
          <div className="inline-block font-semibold tracking-widest uppercase mb-2" style={{ color: '#60CFFF', fontFamily: 'Lora, serif', fontSize: 'var(--text-xs)' }}>
            ▣ Features
          </div>
          <h2 className="font-black text-white mb-2" style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-5xl)' }}>
            Everything to{' '}
            <span className="grad-text">master your money</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-base)' }}>
            Powerful tools for complete financial control.
          </p>
        </div>

        {/* Grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 flex-1 overflow-y-auto sm:overflow-visible">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative rounded-2xl p-4 sm:p-5 flex flex-col gap-2 sm:gap-3"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: f.pro ? '1px solid rgba(96,207,255,0.8)' : '1px solid rgba(96,207,255,0.35)',
                boxShadow: f.pro ? '0 0 12px rgba(96,207,255,0.15)' : 'none',
              }}
            >
              {f.pro && (
                <span
                  className="absolute top-3 right-3 font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    color: '#60CFFF',
                    background: 'rgba(96,207,255,0.12)',
                    border: '0.5px solid rgba(96,207,255,0.35)',
                    fontFamily: 'Lora, serif',
                    fontSize: 'var(--text-xs)',
                  }}
                >
                  PRO
                </span>
              )}
              <f.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: f.pro ? '#60CFFF' : 'rgba(255,255,255,0.9)' }} />
              <div>
                <div className="font-bold text-white mb-1" style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-base)' }}>
                  {f.title}
                </div>
                <div className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-sm)' }}>
                  {f.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}