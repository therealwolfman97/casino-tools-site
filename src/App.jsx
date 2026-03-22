export default function BettingToolkitLandingPage() { const sections = [ { title: "Casino Core", items: ["Dice Simulator", "Dice / Limbo Calculator", "Monte Carlo Simulator", "Dice Optimizer", "Dice Auto Generator"], }, { title: "Evolution Lab", items: ["Strategy Forge", "Dice Evolution Engine", "Limbo Evolution Engine", "Keno Evolution Engine", "Mines Evolution Engine"], }, { title: "Research Lab", items: ["Strategy Stress Test", "Bankroll Survival Lab"], }, { title: "Game Analytics", items: ["Keno Monte Carlo", "Mines Analytics", "Blackjack Strategy Hub"], }, { title: "Sports & Utilities", items: ["Kelly Bet Calculator", "Parlay Analyzer", "Value Bet Calculator", "Arbitrage Calculator", "Compound Growth Pro", "Pattern Sequence Master", "Live Crypto Converter"], }, ];

const highlights = [ "Demo / Pro / Pro+ upgrade flow", "Offline-first premium toolkit feel", "License activation and revocation ready", "Built for mobile-first use", "One app, multiple advanced calculators and labs", "Designed for serious strategy testing and analytics", ];

return ( <div className="min-h-screen bg-black text-white"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.10),transparent_24%)]" />

<main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
          SH Vertex Technologies • Premium gambling analytics toolkit
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Casino Tools Pro
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            A sleek mobile-first toolkit combining advanced simulators, strategy labs,
            analytics engines, betting calculators, and license-based premium access in one product.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#download"
            className="rounded-2xl bg-green-500 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-green-500/20 transition hover:scale-[1.02]"
          >
            Download Demo APK
          </a>
          <a
            href="#overview"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Explore Features
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 text-sm text-zinc-200 shadow-xl shadow-black/20 backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-4 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="mx-auto max-w-sm rounded-[2rem] border border-white/10 bg-black p-4 shadow-inner shadow-green-500/5">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-5">
            <div className="text-center">
              <p className="text-sm font-medium text-green-400">PRO+ ACTIVE</p>
              <h2 className="mt-2 text-3xl font-bold text-green-400">Casino Tools Pro</h2>
              <p className="mt-3 text-sm text-zinc-400">Private gambling analytics toolkit</p>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Strategies Library",
                "Dice Simulator",
                "Monte Carlo Simulator",
                "Strategy Forge",
                "Keno Monte Carlo",
                "Sports Betting Lab",
              ].map((item, idx) => (
                <div
                  key={item}
                  className={`rounded-2xl px-4 py-4 text-center text-base font-semibold text-black ${
                    idx === 0
                      ? "bg-green-400"
                      : idx === 4
                      ? "bg-violet-400"
                      : idx === 5
                      ? "bg-orange-400"
                      : "bg-teal-300"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="overview" className="mt-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Product Overview</p>
          <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Everything in one premium toolkit</h3>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-[1.75rem] border border-white/10 bg-zinc-950/80 p-6 shadow-xl shadow-black/30"
          >
            <h4 className="text-xl font-bold text-white">{section.title}</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {section.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-20 grid gap-6 lg:grid-cols-3">
      {[
        {
          title: "Why it stands out",
          text: "Most competing products focus on one narrow lane. Casino Tools Pro brings multiple serious calculators, simulators, and strategy tools into a single polished mobile experience.",
        },
        {
          title: "Built for monetization",
          text: "Demo, Pro, and Pro+ licensing is already part of the product concept, making the toolkit suitable for premium distribution and controlled access.",
        },
        {
          title: "Zero-cost website launch",
          text: "This landing page can be hosted for free using a static hosting service, giving you a sleek public-facing home for the demo APK and product overview.",
        },
      ].map((card) => (
        <div
          key={card.title}
          className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-zinc-950 to-zinc-900 p-6 shadow-xl shadow-black/30"
        >
          <h4 className="text-xl font-bold text-white">{card.title}</h4>
          <p className="mt-3 text-base leading-7 text-zinc-300">{card.text}</p>
        </div>
      ))}
    </section>

    <section id="download" className="mt-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Demo Access</p>
            <h3 className="mt-2 text-3xl font-bold text-white">Try the demo and explore the product</h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-300">
              Host your demo APK here, give visitors a direct first look at the product,
              and use the website as a clean pitch page for potential buyers or affiliates.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black transition hover:scale-[1.02]"
            >
              Add APK Link
            </a>
            <a
              href="#"
              className="rounded-2xl border border-white/10 bg-black/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Contact / Buyout
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

); }
