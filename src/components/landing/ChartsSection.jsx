import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, AreaChart, Area, Sector,
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
    <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl px-4 py-3 shadow-2xl text-sm">
      {label && <p className="text-muted-foreground mb-2 font-medium">{label}</p>}
      <div className="space-y-1">
        {payload.map((p, index) => (
          <p
            key={`${p.name}-${index}`}
            style={{ color: p.color }}
            className="font-semibold whitespace-nowrap"
          >
            {p.name}: ${Number(p.value).toLocaleString()}
          </p>
        ))}
      </div>
    </div>
  );
};

function ChartCard({ title, subtitle, renderChart }) {
  const [expanded, setExpanded] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  const handleOpen = () => {
    setRenderKey((k) => k + 1);
    setExpanded(true);
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
        <div className="h-52">{renderChart(false, 0)}</div>
      </div>

      <AnimatePresence>
        {expanded && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setExpanded(false)}
            />

            <motion.div
  key="expanded"
  initial={{ opacity: 0, scale: 0.98, x: '-50%', y: '-50%' }}
  animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
  exit={{ opacity: 0, scale: 0.98, x: '-50%', y: '-50%' }}
  transition={{ duration: 0.18, ease: 'easeOut' }}
  style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '80vw',
    maxWidth: '900px',
    zIndex: 50,
    transformOrigin: 'center center',
  }}
  className="bg-card border border-primary/30 rounded-2xl p-8 shadow-2xl shadow-primary/20"
>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
                </div>
                <button
                  onClick={() => setExpanded(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-xl leading-none"
                >
                  ✕
                </button>
              </div>

              <div className="h-80">{renderChart(true, renderKey)}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const StaticBarShape = ({ x, y, width, height, fill }) => {
  return <rect x={x} y={y} width={width} height={height} fill={fill} rx={4} ry={4} />;
};

function GroupedBarChart({ data, animateBars = false, animationSeed = 0 }) {
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
          key={`income-${animationSeed}`}
          dataKey="income"
          name="Income"
          fill={primaryBlue}
          radius={[4, 4, 0, 0]}
          shape={<StaticBarShape />}
          isAnimationActive={animateBars}
          animationBegin={0}
          animationDuration={900}
          animationEasing="ease-out"
        />

        <Bar
          key={`expenses-${animationSeed}`}
          dataKey="expenses"
          name="Expenses"
          fill={secondaryBlue}
          radius={[4, 4, 0, 0]}
          shape={<StaticBarShape />}
          isAnimationActive={animateBars}
          animationBegin={120}
          animationDuration={900}
          animationEasing="ease-out"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

function SpendingPieChart() {
  const renderCustomShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    );
  };

  return (
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
          animationDuration={1200}
          animationEasing="ease-out"
          activeShape={renderCustomShape}
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
  );
}



function BalanceAreaChart({ gradientId = 'balanceGrad' }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={netBalanceData}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={primaryBlue} stopOpacity={0.3} />
            <stop offset="95%" stopColor={primaryBlue} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
        <XAxis dataKey="month" tick={axisTickStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="balance"
          name="Balance"
          stroke={primaryBlue}
          strokeWidth={2.5}
          fill={`url(#${gradientId})`}
          dot={{ fill: primaryBlue, r: 4 }}
          activeDot={{ r: 6 }}
          isAnimationActive={true}
          animationBegin={0}
          animationDuration={1400}
          animationEasing="ease-out"
        />
      </AreaChart>
    </ResponsiveContainer>
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
            renderChart={(isExpanded, renderKey) => (
              <GroupedBarChart
                data={monthlyData}
                animateBars={isExpanded}
                animationSeed={renderKey}
              />
            )}
          />

          <ChartCard
            title="Spending by Category"
            subtitle="March 2026 breakdown"
            renderChart={() => <SpendingPieChart />}
          />

          <ChartCard
  title="Net Balance Growth"
  subtitle="Cumulative savings trend"
  renderChart={(isExpanded, renderKey) =>
    isExpanded
      ? <BalanceAreaChart gradientId={`balanceGradExpanded-${renderKey}`} />
      : <BalanceAreaChart gradientId="balanceGradPreview" />
  }
/>
        </motion.div>
      </div>
    </section>
  );
}