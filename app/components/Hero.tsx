import PixelPortrait from "./PixelPortrait";

export default function Hero() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <PixelPortrait
          sources={["/portrait-sticker-2.webp", "/portrait-sticker-3.webp", "/portrait-sticker-4.png"]}
        />

        <h1 className="font-display mt-4 text-5xl md:text-7xl font-semibold tracking-tight text-slate-lightest">
          Abhishek Ravinuthala
        </h1>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-pink/40" />
          <p className="text-xs md:text-sm tracking-[0.1em] text-pink uppercase">
            Software Engineer
          </p>
          <span className="h-px w-8 bg-pink/40" />
        </div>

        <p className="mt-6 max-w-md text-base md:text-lg text-slate-light">
          Engineer by day. Gamer, lifter, anime fan after hours.
        </p>
      </div>
    </main>
  );
}