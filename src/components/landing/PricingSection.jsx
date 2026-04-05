import React from 'react';
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "All the essentials to track and manage your finances.",
    features: [
      { text: "Financial Dashboard", included: true },
      { text: "Transaction Tracking", included: true },
      { text: "Spending Analysis", included: true },
      { text: "Subscription Manager", included: true },
      { text: "Upload Statements", included: true },
      { text: "AI Copilot", included: false },
      { text: "AI Insights & Reports", included: false },
    ],
    cta: "Join Waitlist — Free",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "Unlock AI superpowers for your financial life.",
    features: [
      { text: "Everything in Basic", included: true },
      { text: "AI Copilot (ChatGPT for Finance)", included: true },
      { text: "Personalized AI Insights", included: true },
      { text: "Smart Financial Reports", included: true },
      { text: "Savings Recommendations", included: true },
      { text: "Spending Pattern Detection", included: true },
      { text: "Priority Support", included: true },
    ],
    cta: "Join Waitlist — Pro",
    highlighted: true
  }
];

export default function PricingSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start free, upgrade when you're ready for AI-powered insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 md:p-10 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary/20 via-card to-card border-2 border-primary/40'
                  : 'bg-card border border-border/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-lg">{plan.period}</span>}
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => scrollTo('waitlist')}
                className={`w-full rounded-full py-6 text-base font-semibold ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}