import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, AreaChart, Area
} from 'recharts';

const monthlyData = [
  { month: 'Oct', income: 8200, expenses: 3100 },
  { month: 'Nov', income: 9500, expenses: 4200 },
  { month: 'Dec', income: 11000, expenses: 5800 },
  { month: 'Jan', income: 9800, expenses: 2900 },
  { month: 'Feb', income: 10500, expenses: 3400 },
  { month: 'Mar', income: 12000, expenses: 5450 },
];

const spendingData = [
  { name: 'Housing', value: 4500, color: '#3b82f6' },
  { name: 'Food', value: 1200, color: '#06b6d4' },
  { name: 'Transport', value: 680, color: '#8b5cf6' },
  { name: 'Subscriptions', value: 323, color: '#f59e0b' },
  { name: 'Entertainment', value: 233, color: '#ec4899' },
  { name: 'Health', value: 180, color: '#10b981' },
  { name: 'Other', value: 334, color: '#64748b' },
];

const netBalanceData = [
  { month: 'Oct', balance: 18200 },
  { month: 'Nov', balance: 21500 },
  { month: 'Dec', balance: 24700 },
  { month: 'Jan', balance: 28900 },
  { month: 'Feb', balance: 32100 },
  { month: 'Mar', balance: 36200 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-xl text-sm">
        {label && <p className="text-muted-foreground mb-1 font-medium">{label}</p>}
        {payload.map((p) => (
          <p key={p.name} style={{ color: p.color }} className="font-semibold">
            {p.name}: ${p.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function ChartCard({ title, subtitle, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative cursor-pointer"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={() => setHovered(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        animate={hovered ? {
          position: 'fixed',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          width: '80vw',
          maxWidth: '900px',
          height: 'auto',
          zIndex: 50,
          scale: 1,
        } : {
          position: 'relative',
          top: 0,
          left: 0,
          x: 0,
          y: 0,
          width: '100%',
          zIndex: 1,
          scale: 1,
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-colors"
      >
        <div className="mb-4">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        </div>
        <div className={hovered ? 'h-80' : 'h-52'} style={{ transition: 'height 0.3s ease' }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ChartsSection() {
  return (
    <section id="preview" className="relative py-28 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Live Preview</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Your finances,{' '}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">beautifully visualized</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Hover any chart to expand and interact with it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Income vs Expenses bar chart */}
          <ChartCard title="Income vs Expenses" subtitle="Last 6 months overview">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 47% 16%)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: 'hsl(215 20% 55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'hsl(215 20% 55%)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="income" name="Income" fill="hsl(217 91% 60%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Expenses" fill="hsl(217 91% 60% / 0.25)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Spending breakdown pie */}
          <ChartCard title="Spending by Category" subtitle="March 2026 breakdown">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendingData}
                  cx="50%"
                  cy="50%"
                  innerRadius="45%"
                  outerRadius="70%"
                  paddingAngle={3}
                  dataKey="value"
                >
                  {spendingData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  formatter={(value) => <span style={{ color: 'hsl(215 20% 65%)', fontSize: 11 }}>{value}</span>}
                  iconSize={8}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Net balance area chart */}
          <ChartCard title="Net Balance Growth" subtitle="Cumulative savings trend">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={netBalanceData}>
                <defs>
                  <linearGradient id="balanceGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(217 91% 60%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(217 91% 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 47% 16%)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: 'hsl(215 20% 55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'hsl(215 20% 55%)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="balance"
                  name="Balance"
                  stroke="hsl(217 91% 60%)"
                  strokeWidth={2.5}
                  fill="url(#balanceGrad)"
                  dot={{ fill: 'hsl(217 91% 60%)', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>
      </div>
    </section>
  );
}