export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--noveli-cream)]">
      {/* Navigation */}
      <header className="border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="text-xl font-medium tracking-[0.18em]">
            NOVELI
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[var(--noveli-muted)] md:flex">
            <a
              href="#discover"
              className="transition hover:text-[var(--noveli-ink)]"
            >
              Discover
            </a>

            <a
              href="#sell"
              className="transition hover:text-[var(--noveli-ink)]"
            >
              Sell
            </a>

            <a
              href="#about"
              className="transition hover:text-[var(--noveli-ink)]"
            >
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[var(--noveli-dusty-rose)]">
              Pre-loved fashion, reimagined
            </p>

            <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Good things
              <br />
              find their way.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--noveli-muted)]">
              Discover beautiful pre-loved pieces chosen with your style in
              mind — and give the things you no longer wear a new story.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#discover"
                className="rounded-full bg-[var(--noveli-ink)] px-6 py-3 text-sm text-white transition hover:opacity-90"
              >
                Start discovering
              </a>

              <a
                href="#sell"
                className="rounded-full border border-black/10 bg-white/40 px-6 py-3 text-sm transition hover:bg-white"
              >
                Sell something
              </a>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--noveli-beige)]">
              <div className="flex h-full items-center justify-center p-10 text-center">
                <div>
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--noveli-white)] text-lg">
                    N
                  </div>

                  <p className="text-sm text-[var(--noveli-muted)]">
                    Beautiful things are waiting
                    <br />
                    for their next story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section
        id="discover"
        className="border-t border-black/5 bg-[var(--noveli-white)] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--noveli-sage)]">
              Discovery
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
              Find what feels like you.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--noveli-muted)]">
              NOVELI will gradually learn what you love and make discovering
              beautiful pieces feel less like searching and more like finding.
            </p>
          </div>
        </div>
      </section>

      {/* Seller AI */}
      <section
        id="sell"
        className="px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--noveli-lavender)]">
                Seller AI
              </p>

              <h2 className="mt-4 text-4xl font-light tracking-tight">
                Selling should feel easy.
              </h2>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/70 p-6">
                  <p className="text-sm font-medium">01</p>

                  <h3 className="mt-8 text-xl">
                    Take a photo
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--noveli-muted)]">
                    Start with the simplest possible thing.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/70 p-6">
                  <p className="text-sm font-medium">02</p>

                  <h3 className="mt-8 text-xl">
                    Let NOVELI help
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--noveli-muted)]">
                    AI suggests the details needed for your listing.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/70 p-6">
                  <p className="text-sm font-medium">03</p>

                  <h3 className="mt-8 text-xl">
                    Publish
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--noveli-muted)]">
                    Review, adjust and put your piece back into the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="border-t border-black/5 px-6 py-8 lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[var(--noveli-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NOVELI</p>

          <p>Good things find their way.</p>
        </div>
      </footer>
    </main>
  );
}
