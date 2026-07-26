export default function Background() {
  return (
    <div className="absolute inset-0">
      {/* Base sky */}
      <div className="absolute inset-0 bg-[#0B1120]" />

      {/* Soft blue glow from the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F] via-[#0F172A] to-[#020617]" />
    </div>
  );
}