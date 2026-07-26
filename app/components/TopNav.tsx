export default function TopNav() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 px-6 py-5 md:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-white/70 opacity-90">
        <div className="pointer-events-auto flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/70">
          <span>AR</span>
          <span className="h-px w-6 bg-white/10" />
          <span>Software Engineer</span>
        </div>
        <nav className="pointer-events-auto flex items-center gap-5 text-xs uppercase tracking-[0.25em] text-white/60">
          <a className="transition hover:text-white" href="#about">About</a>
          <a className="transition hover:text-white" href="#work">Work</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
