import Background from "./Background";

export default function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Background />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/50 to-navy-dark/70" />
    </div>
  );
}
