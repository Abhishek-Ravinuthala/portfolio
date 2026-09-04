export default function TopNav() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 px-6 py-5 md:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-slate-light opacity-90">
        <div className="pointer-events-auto flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-light">
          <span className="text-mint">AR</span>
          <span className="h-px w-6 bg-navy-lightest" />
          <span>Software Engineer</span>
        </div>
        <nav className="pointer-events-auto flex items-center gap-5 text-xs uppercase tracking-[0.25em] text-slate">
          <a className="transition hover:text-mint" href="#about">About</a>
          <a className="transition hover:text-mint" href="#work">Work</a>
          <a className="transition hover:text-mint" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
