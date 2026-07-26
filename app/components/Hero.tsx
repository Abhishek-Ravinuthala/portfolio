import Ascent from "./Ascent";

export default function Hero() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif-display text-5xl md:text-7xl tracking-tight">
          Abhishek Ravinuthala
        </h1>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-zinc-500/50" />
          <p className="text-xs md:text-sm tracking-[0.3em] text-zinc-400 uppercase">
            Software Engineer
          </p>
          <span className="h-px w-8 bg-zinc-500/50" />
        </div>

        <p className="mt-6 text-base md:text-lg text-zinc-300">
          Building systems worth climbing.
        </p>
      </div>

      <Ascent />
    </main>
  );
}