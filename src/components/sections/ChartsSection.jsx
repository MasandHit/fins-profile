import { useState } from 'react';
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

const axisTickStyle = { fill: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 500 };
const gridStroke = 'rgba(255,255,255,0.06)';
const primaryBlue = 'rgba(59,110,248,0.9)';
const secondaryBlue = 'rgba(239,68,68,0.9)';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div style={{
      background: 'rgba(18,20,28,0.97)',
      border: '0.5px solid rgba(255,255,255,0.15)',
      borderRadius: 12,
      padding: '10px 14px',
      backdropFilter: 'blur(20px)',
    }}>
      {label && <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 4, fontWeight: 600 }}>{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color, fontSize: 13, fontWeight: 700 }}>
          {p.name}: ${Number(p.value).toLocaleString()}
        </p>
      ))}
    </div>
  );
};

const StaticBarShape = ({ x, y, width, height, fill }) => (
  <rect x={x} y={y} width={width} height={height} fill={fill} rx={3} ry={3} />
);

function GroupedBarChart({ data, animateBars = false, animationSeed = 0 }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={3} barCategoryGap="15%">
        <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
        <XAxis dataKey="month" tick={axisTickStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
        <Tooltip content={<CustomTooltip />} cursor={false} wrapperStyle={{ outline: 'none' }} />
        <Bar key={`income-${animationSeed}`} dataKey="income" name="Income" fill={primaryBlue} radius={[3, 3, 0, 0]} shape={<StaticBarShape />} isAnimationActive={animateBars} animationBegin={0} animationDuration={900} animationEasing="ease-out" />
        <Bar key={`expenses-${animationSeed}`} dataKey="expenses" name="Expenses" fill={secondaryBlue} radius={[3, 3, 0, 0]} shape={<StaticBarShape />} isAnimationActive={animateBars} animationBegin={120} animationDuration={900} animationEasing="ease-out" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function SpendingPieChart() {
  const renderCustomShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius}
        startAngle={startAngle} endAngle={endAngle} fill={fill}
        strokeWidth={0} stroke="none" style={{ outline: 'none', cursor: 'default' }}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={spendingData} cx="50%" cy="45%"
          innerRadius="38%" outerRadius="62%"
          paddingAngle={3} dataKey="value"
          isAnimationActive={true} animationBegin={0}
          animationDuration={1200} animationEasing="ease-out"
          activeShape={renderCustomShape} activeIndex={null}
          onMouseEnter={() => {}} onMouseLeave={() => {}} onClick={() => {}}
          strokeWidth={0} stroke="none"
        >
          {spendingData.map((entry) => (
            <Cell key={entry.name} fill={entry.color} strokeWidth={0} stroke="none" style={{ outline: 'none' }} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} trigger="hover" />
        <Legend
          formatter={(value) => <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500 }}>{value}</span>}
          iconSize={7} iconType="circle"
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
            <stop offset="5%" stopColor={primaryBlue} stopOpacity={0.35} />
            <stop offset="95%" stopColor={primaryBlue} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
        <XAxis dataKey="month" tick={axisTickStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="balance" name="Balance" stroke={primaryBlue} strokeWidth={2.5}
          fill={`url(#${gradientId})`} dot={{ fill: primaryBlue, r: 4 }} activeDot={{ r: 6 }}
          isAnimationActive={true} animationBegin={0} animationDuration={1400} animationEasing="ease-out"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

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
        className="cursor-pointer rounded-xl p-4 flex flex-col transition-all duration-200 hover:border-blue-500/30"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '0.5px solid rgba(255,255,255,1)',
        }}
      >
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{subtitle}</p>
        </div>
        <div className="flex-1 pb-4" style={{ minHeight: '160px' }}>
          {renderChart(false, 0)}
        </div>
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
              className="fixed inset-0 z-40 cursor-pointer"
              style={{ background: 'rgba(8,9,13,0.85)', backdropFilter: 'blur(8px)' }}
              onClick={() => setExpanded(false)}
            />
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: '50%', left: '50%',
                width: '80vw', maxWidth: 860,
                zIndex: 50,
                transformOrigin: 'center center',
                background: 'rgba(18,20,28,0.97)',
                border: '0.5px solid rgba(59,110,248,0.3)',
                borderRadius: 20,
                padding: '28px 32px',
                backdropFilter: 'blur(28px)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{subtitle}</p>
                </div>
                <button
                  onClick={() => setExpanded(false)}
                  className="text-base transition-opacity hover:opacity-80"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
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

export default function ChartsSection() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card w-full h-full flex flex-col px-8 py-6 pb-8" style={{ border: '0.5px solid rgba(255, 0, 0, 1.0)' }}>
        {/* Header */}
        <div
          className="text-center pb-5 mb-5"
          style={{ borderBottom: '0.5px solid rgba(255,255,255,1)' }}
        >
          <div
            className="inline-block text-s font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#60CFFF' }}
          >
            ◈ Live Preview
          </div>
          <h2 className="text-5xl font-semibold text-white mb-1">
            Your finances,{' '}
            <span className="grad-text">visualized</span>
          </h2>
          <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Click any chart to expand and interact with it.
          </p>
        </div>

        {/* Charts grid — flex-1 so it fills remaining space */}
        <div className="grid grid-cols-3 gap-4 flex-1 mb-4">
          <ChartCard
            title="Income vs Expenses"
            subtitle="Last 6 months overview"
            renderChart={(isExpanded, renderKey) => (
              <GroupedBarChart data={monthlyData} animateBars={isExpanded} animationSeed={renderKey} />
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
        </div>
      </motion.div>
    </div>
  );
}