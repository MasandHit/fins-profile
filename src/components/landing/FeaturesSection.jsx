import React from 'react';
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ArrowLeftRight,
  PieChart,
  CreditCard,
  MessageSquare,
  Lightbulb
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Smart Dashboard",
    description: "Get a bird's-eye view of your finances. Income, expenses, net balance, and transaction counts — all at a glance.",
    included: "basic"
  },
  {
    icon: ArrowLeftRight,
    title: "Transaction Tracking",
    description: "Automatically categorize and track every transaction. Search, filter, and manage your financial data effortlessly.",
    included: "basic"
  },
  {
    icon: PieChart,
    title: "Spending Analysis",
    description: "Visual breakdowns of where your money goes. Pie charts, bar graphs, and monthly trends to reveal spending patterns.",
    included: "basic"
  },
  {
    icon: CreditCard,
    title: "Subscription Manager",
    description: "Never lose track of recurring payments. See all subscriptions in one place and identify potential savings.",
    included: "basic"
  },
  {
    icon: MessageSquare,
    title: "AI Copilot",
    description: "Your personal AI financial advisor. Ask questions about your spending, uncover patterns, and get smart budget recommendations — all in plain conversation.",
    included: "pro"
  },
  {
    icon: Lightbulb,
    title: "AI Insights",
    description: "Personalized financial recommendations powered by AI. Automatically identifies savings opportunities and spending patterns.",
    included: "pro"
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">master your money</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Powerful tools designed to give you complete control over your financial life.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              {feature.included === 'pro' && (
                <div className="absolute top-4 right-4 text-xs font-semibold bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground px-3 py-1 rounded-full">
                  PRO
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}