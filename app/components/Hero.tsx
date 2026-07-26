import Background from "./Background";
import Moon from "./Moon";
import Stars from "./Stars";

export default function Hero() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      <Background />
        <Stars />
        <Moon  />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Abhishek
        </h1>

        <p className="mt-5 text-lg text-zinc-400">
          Building systems worth climbing.
        </p>
      </div>
    </main>
  );
}