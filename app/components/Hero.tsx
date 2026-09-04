import AsciiPortrait from "./AsciiPortrait";

export default function Hero() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <AsciiPortrait src="/portrait-sticker-2.webp" />

        <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight text-slate-lightest">
          Abhishek Ravinuthala
        </h1>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-mint/40" />
          <p className="text-xs md:text-sm tracking-[0.3em] text-mint uppercase">
            Software Engineer
          </p>
          <span className="h-px w-8 bg-mint/40" />
        </div>

        <p className="mt-6 max-w-md text-base md:text-lg text-slate-light">
          Engineer by day. Gamer, lifter, anime fan after hours.
        </p>
      </div>
    </main>
  );
}