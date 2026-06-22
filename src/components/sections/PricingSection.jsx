import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Basic', price: 'Free', period: '',
    description: 'All the essentials to track and manage your finances.',
    features: [
      { text: 'Financial Dashboard',   included: true  },
      { text: 'Transaction Tracking',  included: true  },
      { text: 'Spending Analysis',     included: true  },
      { text: 'Subscription Manager',  included: true  },
      { text: 'Upload Statements',     included: true  },
      { text: 'AI Copilot',            included: false },
      { text: 'AI Insights & Reports', included: false },
    ],
    cta: 'Join Waitlist — Free', highlighted: false,
  },
  {
    name: 'Pro', price: '$7.99', period: '/month',
    description: 'Unlock AI superpowers for your financial life.',
    features: [
      { text: 'Everything in Basic',       included: true },
      { text: 'AI Copilot',                included: true },
      { text: 'Personalized AI Insights',  included: true },
      { text: 'Smart Financial Reports',   included: true },
      { text: 'Savings Recommendations',   included: true },
      { text: 'Spending Pattern Detection',included: true },
      { text: 'Bank Integration',          included: true },
    ],
    cta: 'Join Waitlist — Pro', highlighted: true,
  },
];

export default function PricingSection({ goToSection }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card w-full h-full flex flex-col px-4 sm:px-8 py-4 sm:py-6 min-h-0"
        style={{
          border: '1px solid rgba(250,204,21,1)',
          boxShadow: '0 0 24px rgba(250,204,21,0.3), 0 8px 48px rgba(0,0,0,0.45)',
        }}
      >
        {/* Header */}
        <div className="text-center pb-4 sm:pb-5 mb-4 sm:mb-5 flex-shrink-0" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.1)' }}>
          <div className="inline-block font-semibold tracking-widest uppercase mb-2" style={{ color: '#60CFFF', fontFamily: 'Lora, serif', fontSize: 'var(--text-xs)' }}>
            ◈ Pricing
          </div>
          <h2 className="font-black text-white mb-2" style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-3xl)' }}>
            Simple,{' '}
            <span className="grad-text">transparent pricing</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-sm)' }}>
            Start free, upgrade when you're ready for AI-powered insights.
          </p>
        </div>

        {/* Plans: 1 col mobile → 2 col sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 flex-1 min-h-0 overflow-y-auto"
          style={{ gridAutoRows: 'min-content' }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl p-3 sm:p-6 flex flex-col"
              style={{
                background: plan.highlighted ? 'rgba(59,110,248,0.08)' : 'rgba(255,255,255,0.04)',
                border: plan.highlighted ? '1px solid rgba(96,207,255,0.7)' : '1px solid rgba(255,255,255,0.2)',
                boxShadow: plan.highlighted ? '0 0 16px rgba(96,207,255,0.2)' : 'none',
              }}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 font-bold px-4 py-1 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)', color: '#fff', fontFamily: 'Lora, serif', fontSize: 'var(--text-xs)' }}
                >
                  <Sparkles className="w-3 h-3" /> MOST POPULAR
                </div>
              )}

              <div className="mb-2 sm:mb-4">
                <h3 className="font-bold text-white mb-1" style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-lg)' }}>{plan.name}</h3>
                <p className="mb-3" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Lora, serif', fontWeight: 500, fontSize: 'var(--text-sm)' }}>{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-black text-white" style={{ fontFamily: 'Merriweather, serif', fontSize: 'var(--text-4xl)' }}>{plan.price}</span>
                  {plan.period && (
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Lora, serif', fontSize: 'var(--text-sm)' }}>{plan.period}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 mb-3 sm:mb-6">
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-2 sm:gap-3">
                    <div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: feature.included ? 'rgba(59,110,248,0.2)' : 'rgba(255,255,255,0.06)' }}
                    >
                      {feature.included
                        ? <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: '#60CFFF' }} />
                        : <X     className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: 'rgba(255,255,255,0.4)' }} />
                      }
                    </div>
                    <span
                      style={{
                        color: feature.included ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.45)',
                        fontFamily: 'Lora, serif',
                        fontWeight: feature.included ? 500 : 400,
                        fontSize: 'var(--text-sm)',
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => goToSection(5)}
                className="w-full py-2.5 sm:py-3 rounded-full font-semibold transition-opacity hover:opacity-90"
                style={
                  plan.highlighted
                    ? { background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)', color: '#fff', fontFamily: 'Lora, serif', fontSize: 'var(--text-sm)' }
                    : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'Lora, serif', fontSize: 'var(--text-sm)' }
                }
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}