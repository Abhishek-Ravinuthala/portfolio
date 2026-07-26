import Background from "./Background";
import Nebula from "./Nebula";
import Stars from "./Stars";

export default function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Background />
      <Nebula />
      <Stars />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/90" />
    </div>
  );
}
