const projects = [
  {
    title: "Agentic API Routing System",
    description: (
      <>
        An <span className="text-mint">AI-powered</span> system that chooses
        which API endpoint to call based on user context from a{" "}
        <span className="text-mint">chat-style UI</span>. The LLM has API
        specs as context, then decides and executes the best path for each
        request with <span className="text-mint">agentic endpoint routing</span>.
      </>
    ),
  },
  {
    title: "Posture Analysis & Rep Tracking",
    description: (
      <>
        A computer vision workout assistant that{" "}
        <span className="text-mint">detects form</span>, counts repetitions,
        and provides{" "}
        <span className="text-mint">real-time corrective feedback</span> for
        safer strength training.
      </>
    ),
  },
  {
    title: "ForceForGood: Project EduAccess",
    description: (
      <>
        As part of a <span className="text-mint">CSR initiative</span>{" "}
        at work, I&apos;m contributing to the Project EduAccess site, a
        nonprofit expanding{" "}
        <span className="text-mint">
          access to higher education and professional opportunities
        </span>{" "}
        for underserved communities across the Global South.
      </>
    ),
  },
];

export default function PortfolioSections() {
  return (
    <section className="text-white">
      <section id="about" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.1em] text-mint">About</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-lightest md:text-5xl">
            Currently@JPMorgan Chase.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-light md:text-lg">
            I work primarily with Spring and AWS on production systems, so I&apos;ve
            gotten used to late-night pages and shipping a fix fast to keep
            customer impact low.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-light md:text-lg">
            Outside of work, I&apos;m probably in the gym, deep in a game, or catching
            up on an anime backlog I swore I&apos;d finish months ago.
          </p>
        </div>
      </section>

      <section id="work" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:items-center md:flex-row md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.1em] text-mint">Work</p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-lightest md:text-5xl">
                Selected projects
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate md:text-base">
              These highlights show the scope, polish, and technical care I bring to
              product and engineering work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-navy-lightest bg-navy-light/40 p-6 shadow-[0_20px_80px_-55px_rgba(0,0,0,0.6)] transition duration-300 hover:border-mint/40 hover:bg-navy-light"
              >
                <h3 className="text-2xl font-semibold text-slate-lightest">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-light">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.1em] text-mint">Contact</p>
          <div className="mt-6 grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-lightest md:text-5xl">
                Got something in mind? Let&apos;s talk.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-light md:text-lg">
                I&apos;m always up for interesting problems and good teams to solve
                them with. Reach out if that sounds like what you&apos;re building 😉
              </p>
            </div>
            <div className="rounded-3xl border border-navy-lightest bg-navy-light/40 p-8 shadow-[0_20px_80px_-55px_rgba(0,0,0,0.6)]">
              <div className="space-y-4">
                <a
                  href="mailto:rvss.surya.abhishek@gmail.com"
                  className="group flex items-center gap-4 rounded-3xl border border-navy-lightest bg-navy-dark/80 px-5 py-4 text-left transition hover:border-mint/40 hover:bg-navy"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/10 text-mint">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                      <path d="M4 6.75A2.25 2.25 0 0 1 6.25 4.5h11.5A2.25 2.25 0 0 1 20 6.75v10.5A2.25 2.25 0 0 1 17.75 19.5H6.25A2.25 2.25 0 0 1 4 17.25V6.75Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.75 6.75 12 12.25l7.25-5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <p className="text-sm uppercase tracking-[0.1em] text-slate">Email</p>

                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhishekravinuthala/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-3xl border border-navy-lightest bg-navy-dark/80 px-5 py-4 text-left transition hover:border-mint/40 hover:bg-navy"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/10 text-mint">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.18 8.5H4.82V19.5H.18V8.5zM6.45 8.5H11V10.29C11.63 9.21 13.06 8.5 14.75 8.5 18.92 8.5 19.5 11.15 19.5 14.8V19.5H15V15.39C15 13.86 14.97 11.98 12.9 11.98 10.78 11.98 10.5 13.7 10.5 15.26V19.5H6.45V8.5z" />
                    </svg>
                  </span>
                  <span>
                    <p className="text-sm uppercase tracking-[0.1em] text-slate">LinkedIn</p>

                  </span>
                </a>

                <a
                  href="https://github.com/Abhishek-Ravinuthala"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-3xl border border-navy-lightest bg-navy-dark/80 px-5 py-4 text-left transition hover:border-mint/40 hover:bg-navy"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/10 text-mint">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                      <path d="M12 0.5C5.383 0.5 0 5.883 0 12.5c0 5.206 3.375 9.62 8.062 11.172.594.109.812-.258.812-.575 0-.285-.011-1.231-.016-2.233-3.281.713-3.969-1.578-3.969-1.578-.533-1.359-1.297-1.722-1.297-1.722-1.059-.724.081-.709.081-.709 1.172.082 1.789 1.203 1.789 1.203 1.041 1.783 2.734 1.268 3.401.97.105-.755.406-1.269.738-1.562-2.619-.297-5.375-1.31-5.375-5.83 0-1.287.461-2.339 1.219-3.164-.122-.297-.528-1.488.116-3.101 0 0 .994-.319 3.257 1.21.945-.263 1.957-.395 2.966-.4 1.008.005 2.02.137 2.967.4 2.262-1.528 3.255-1.21 3.255-1.21.646 1.613.24 2.804.118 3.101.76.825 1.218 1.877 1.218 3.164 0 4.531-2.76 5.53-5.391 5.82.417.359.789 1.069.789 2.155 0 1.557-.014 2.815-.014 3.199 0 .32.216.693.819.576C20.627 22.116 24 17.706 24 12.5 24 5.883 18.617 0.5 12 0.5Z" />
                    </svg>
                  </span>
                  <span>
                    <p className="text-sm uppercase tracking-[0.1em] text-slate">GitHub</p>

                  </span>
                </a>
              </div>

              <p className="mt-8 text-sm leading-7 text-slate">
                Available for full-time roles, consulting, and remote collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
