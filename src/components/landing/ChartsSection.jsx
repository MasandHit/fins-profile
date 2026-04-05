import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
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

const axisTickStyle = { fill: 'hsl(215 20% 55%)', fontSize: 11 };
const gridStroke = 'hsl(222 47% 16%)';
const primaryBlue = 'hsl(217 91% 60%)';
const secondaryBlue = 'hsl(217 91% 60% / 0.25)';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-xl text-sm">
      {label && <p className="text-muted-foreground mb-1 font-medium">{label}</p>}
      {payload.map((p, index) => (
        <p key={`${p.name}-${index}`} style={{ color: p.color }} className="font-semibold">
          {p.name}: ${Number(p.value).toLocaleString()}
        </p>
      ))}
    </div>
  );
};

const AnimatedBar = ({ x, y, width, height, fill }) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={5}
      ry={5}
    />
  );
};



function GroupedBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={4} barCategoryGap="15%">
        <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
        <XAxis dataKey="month" tick={axisTickStyle} axisLine={false} tickLine={false} />
        <YAxis
          tick={axisTickStyle}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `$${v / 1000}k`}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={false}
          wrapperStyle={{ outline: 'none' }}
        />

        <Bar
          dataKey="income"
          name="Income"
          fill={primaryBlue}
          radius={[4, 4, 0, 0]}
          isAnimationActive
          animationBegin={0}
          animationDuration={800}
          animationEasing="ease-out"
          shape={(props) => <AnimatedBar {...props} />}
        />

        <Bar
          dataKey="expenses"
          name="Expenses"
          fill={secondaryBlue}
          radius={[4, 4, 0, 0]}
          isAnimationActive
          animationBegin={100}
          animationDuration={800}
          animationEasing="ease-out"
          shape={(props) => <AnimatedBar {...props} />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}


function ChartCard({ title, subtitle, renderChart, expandedHeight = 'h-[420px]' }) {
  const [expanded, setExpanded] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const [showExpandedChart, setShowExpandedChart] = useState(false);

  useEffect(() => {
    let timer;

    if (expanded) {
      setShowExpandedChart(false);
      timer = setTimeout(() => {
        setShowExpandedChart(true);
      }, 180);
    } else {
      setShowExpandedChart(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [expanded, renderKey]);

  const handleOpen = () => {
    setRenderKey((prev) => prev + 1);
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="bg-card border border-border/50 rounded-2xl p-6 cursor-pointer hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-200"
      >
        <div className="mb-4">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        </div>

        <div className="h-52">
          {renderChart(false)}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {expanded && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              onClick={handleClose}
            />

            <motion.div
              key="expanded-modal"
              initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-48%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-48%' }}
              transition={{ type: 'spring', stiffness: 180, damping: 22, mass: 1.1 }}
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                width: 'min(92vw, 950px)',
                maxHeight: '90vh',
                zIndex: 50,
                transformOrigin: 'center center',
              }}
              className="bg-card border border-primary/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-primary/20 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
                </div>

                <button
                  onClick={handleClose}
                  className="text-muted-foreground hover:text-foreground transition-colors text-xl leading-none"
                  aria-label="Close chart"
                >
                  ✕
                </button>
              </div>

              <motion.div
                key={renderKey}
                className={expandedHeight}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.45, ease: 'easeOut' }}
              >
                {showExpandedChart ? renderChart(true) : null}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Live Preview
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Your finances,{' '}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              beautifully visualized
            </span>
          </h2>

          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Click any chart to expand and interact with it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <ChartCard
            title="Income vs Expenses"
            subtitle="Last 6 months overview"
            expandedHeight="h-[360px] md:h-[420px]"
            renderChart={() => <GroupedBarChart data={monthlyData} />}
          />

          <ChartCard
            title="Spending by Category"
            subtitle="March 2026 breakdown"
            expandedHeight="h-[420px] md:h-[500px]"
            renderChart={() => (
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
                    isAnimationActive={true}
                    animationBegin={0}
                    animationDuration={900}
                    animationEasing="ease-out"
                  >
                    {spendingData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    formatter={(value) => (
                      <span style={{ color: 'hsl(215 20% 65%)', fontSize: 11 }}>{value}</span>
                    )}
                    iconSize={8}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            )}
          />

          <ChartCard
            title="Net Balance Growth"
            subtitle="Cumulative savings trend"
            expandedHeight="h-[360px] md:h-[420px]"
            renderChart={(expanded) => (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={netBalanceData}>
                  <defs>
                    <linearGradient id={expanded ? 'balanceGradExpanded' : 'balanceGradPreview'} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={primaryBlue} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={primaryBlue} stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                  <XAxis dataKey="month" tick={axisTickStyle} axisLine={false} tickLine={false} />
                  <YAxis
                    tick={axisTickStyle}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${v / 1000}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />

                  <Area
                    type="monotone"
                    dataKey="balance"
                    name="Balance"
                    stroke={primaryBlue}
                    strokeWidth={2.5}
                    fill={`url(#${expanded ? 'balanceGradExpanded' : 'balanceGradPreview'})`}
                    dot={{ fill: primaryBlue, r: expanded ? 5 : 4 }}
                    activeDot={{ r: expanded ? 7 : 6 }}
                    isAnimationActive
                    animationBegin={0}
                    animationDuration={900}
                    animationEasing="ease-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}