import { motion } from 'framer-motion';
import {
  LayoutDashboard, ArrowLeftRight, PieChart,
  CreditCard, MessageSquare, Lightbulb
} from 'lucide-react';

const features = [
  { icon: LayoutDashboard, title: 'Smart Dashboard', desc: 'Income, expenses, net balance at a glance.', pro: false },
  { icon: ArrowLeftRight, title: 'Transaction Tracking', desc: 'Auto-categorize every transaction instantly.', pro: false },
  { icon: PieChart, title: 'Spending Analysis', desc: 'Visual breakdowns of your spending patterns.', pro: false },
  { icon: CreditCard, title: 'Subscription Manager', desc: 'Spot and cut unused subscriptions.', pro: false },
  { icon: MessageSquare, title: 'AI Copilot', desc: 'Chat with your finances like ChatGPT.', pro: true },
  { icon: Lightbulb, title: 'AI Insights', desc: 'Personalized savings recommendations.', pro: true },
];

export default function FeaturesSection() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card w-full h-full flex flex-col px-8 py-6" style={{ border: '0.5px solid rgba(255, 105, 180, 1.0)' }}>
        {/* Header */}
        <div
          className="text-center pb-5 mb-5"
          style={{ borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}
        >
          <div
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#60CFFF' }}
          >
            ▣ Features
          </div>
          <h2 className="text-5xl font-semibold text-white mb-2">
            Everything to{' '}
            <span className="grad-text">master your money</span>
          </h2>
          <p className="text-md font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Powerful tools for complete financial control.
          </p>
        </div>

        {/* Grid — flex-1 fills remaining space */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative rounded-2xl p-5 flex flex-col gap-3"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: f.pro
                  ? '0.5px solid rgba(96,207,255,1)'
                  : '0.5px solid rgba(96,207,255,1)',
              }}
            >
              {f.pro && (
                <span
                  className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    color: '#60CFFF',
                    background: 'rgba(96,207,255,0.12)',
                    border: '0.5px solid rgba(96,207,255,0.25)',
                  }}
                >
                  PRO
                </span>
              )}

              <f.icon
                className="w-6 h-6"
                style={{ color: f.pro ? '#60CFFF' : 'rgba(255,255,255,0.8)' }}
              />

              <div>
                <div className="text-base font-semibold text-white mb-1">{f.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
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