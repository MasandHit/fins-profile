export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* White base */}
      <div className="absolute inset-0 bg-white" />

      {/* Center black column */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: '44%',
          background: '#08090D',
        }}
      />

      {/* Blue orbs on white sides */}
      <div
        className="absolute rounded-full"
        style={{
          top: 80, left: 0,
          width: 280, height: 280,
          background: 'radial-gradient(circle, rgba(59,110,248,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: 200, right: 0,
          width: 240, height: 240,
          background: 'radial-gradient(circle, rgba(96,207,255,0.1) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: 200, left: '5%',
          width: 200, height: 200,
          background: 'radial-gradient(circle, rgba(59,110,248,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: 150, right: '3%',
          width: 180, height: 180,
          background: 'radial-gradient(circle, rgba(96,207,255,0.07) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}