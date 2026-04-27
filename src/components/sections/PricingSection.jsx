import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    period: '',
    description: 'All the essentials to track and manage your finances.',
    features: [
      { text: 'Financial Dashboard', included: true },
      { text: 'Transaction Tracking', included: true },
      { text: 'Spending Analysis', included: true },
      { text: 'Subscription Manager', included: true },
      { text: 'Upload Statements', included: true },
      { text: 'AI Copilot', included: false },
      { text: 'AI Insights & Reports', included: false },
    ],
    cta: 'Join Waitlist — Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$7.99',
    period: '/month',
    description: 'Unlock AI superpowers for your financial life.',
    features: [
      { text: 'Everything in Basic', included: true },
      { text: 'AI Copilot', included: true },
      { text: 'Personalized AI Insights', included: true },
      { text: 'Smart Financial Reports', included: true },
      { text: 'Savings Recommendations', included: true },
      { text: 'Spending Pattern Detection', included: true },
      { text: 'Bank Integration', included: true },
    ],
    cta: 'Join Waitlist — Pro',
    highlighted: true,
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
        className="glass-card w-full h-full flex flex-col px-8 py-6" style={{ border: '0.5px solid rgba(250,204,21,0.9)' }}>
        {/* Header */}
        <div
          className="text-center pb-5 mb-5"
          style={{ borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}
        >
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#60CFFF' }}
          >
            ◈ Pricing
          </div>
          <h2 className="text-3xl font-semibold text-white mb-2">
            Simple,{' '}
            <span className="grad-text">transparent pricing</span>
          </h2>
          <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Start free, upgrade when you're ready for AI-powered insights.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-2 gap-5 flex-1">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl p-6 flex flex-col"
              style={{
                background: plan.highlighted
                  ? 'rgba(59,110,248,0.08)'
                  : 'rgba(255,255,255,0.04)',
                border: plan.highlighted
                  ? '0.5px solid rgba(96,207,255,0.35)'
                  : '0.5px solid rgba(255,255,255,0.09)',
              }}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)',
                    color: '#fff',
                  }}
                >
                  <Sparkles className="w-3 h-3" />
                  MOST POPULAR
                </div>
              )}

              {/* Plan header */}
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm font-medium mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-2.5 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: feature.included
                          ? 'rgba(59,110,248,0.2)'
                          : 'rgba(255,255,255,0.06)',
                      }}
                    >
                      {feature.included ? (
                        <Check className="w-3 h-3" style={{ color: '#60CFFF' }} />
                      ) : (
                        <X className="w-3 h-3" style={{ color: 'rgba(255,255,255,0.3)' }} />
                      )}
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: feature.included
                          ? 'rgba(255,255,255,0.9)'
                          : 'rgba(255,255,255,0.35)',
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => goToSection(5)}
                className="w-full py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                style={
                  plan.highlighted
                    ? { background: 'linear-gradient(135deg, #3B6EF8, #60CFFF)', color: '#fff' }
                    : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)', border: '0.5px solid rgba(255,255,255,0.12)' }
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