"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    title: "AI Video Analysis",
    description:
      "Turn every moment of the game into actionable information with intelligent video analysis.",
  },
  {
    number: "02",
    title: "Multi-Camera Review",
    description:
      "Review multiple camera angles simultaneously with a professional workflow built for sports.",
  },
  {
    number: "03",
    title: "Instant Replay",
    description:
      "Find, review and replay critical moments in seconds — exactly when you need them.",
  },
];

const stats = [
  ["24/7", "Analysis Ready"],
  ["4K", "Video Support"],
  ["AI", "Powered Technology"],
  ["∞", "Possibilities"],
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#03060d] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-[1500px] px-5 pt-5 lg:px-10">
          <nav className="flex h-[72px] items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 backdrop-blur-xl lg:px-7">
            
            {/* Logo */}
            <a href="#" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                <div className="text-xl font-black text-cyan-300">
                  P<span className="text-white">V</span>
                </div>
              </div>

              <div>
                <div className="text-lg font-black tracking-[0.15em]">
                  POWER <span className="text-cyan-400">VC</span>
                </div>
                <div className="text-[9px] tracking-[0.28em] text-white/40">
                  SPORTS REVIEW SYSTEMS
                </div>
              </div>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-9 md:flex">
              <a href="#technology" className="nav-link">
                Technology
              </a>
              <a href="#platform" className="nav-link">
                Platform
              </a>
              <a href="#solutions" className="nav-link">
                Solutions
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <button className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:text-white">
                EN
              </button>

              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 md:hidden"
            >
              <div className="space-y-1.5">
                <span className="block h-px w-5 bg-white" />
                <span className="block h-px w-5 bg-white" />
                <span className="block h-px w-3 bg-cyan-400" />
              </div>
            </button>
          </nav>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-[#080d17]/95 p-5 backdrop-blur-xl md:hidden">
              <div className="flex flex-col gap-5">
                <a href="#technology" className="text-white/70">
                  Technology
                </a>
                <a href="#platform" className="text-white/70">
                  Platform
                </a>
                <a href="#solutions" className="text-white/70">
                  Solutions
                </a>
                <a href="#contact" className="text-white/70">
                  Contact
                </a>

                <a
                  href="#contact"
                  className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-bold text-black"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-sports.jpg')",
          }}
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03060d] via-[#03060d]/80 to-[#03060d]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03060d] via-transparent to-[#03060d]/30" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-grid" />

        {/* Glow */}
        <div className="absolute left-[15%] top-[35%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-5 pb-20 pt-32 lg:px-10">
          <div className="max-w-4xl">
            
            {/* Small badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Next Generation Sports Technology
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[105px]">
              See the game
              <br />
              <span className="text-white/30">differently.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              AI-powered video review systems designed for professional
              sports teams, coaches and broadcasters.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#technology"
                className="group flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-black transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]"
              >
                Explore Technology

                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur-md transition hover:bg-white/10"
              >
                Talk to our team
              </a>
            </div>

            {/* Bottom stats */}
            <div className="mt-20 grid max-w-3xl grid-cols-2 border-t border-white/10 pt-7 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="py-3">
                  <div className="text-2xl font-black text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 right-10 hidden items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/30 lg:flex">
          Scroll to explore
          <span className="h-px w-12 bg-white/20" />
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        id="technology"
        className="relative overflow-hidden border-t border-white/5 py-28 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            
            <div>
              <p className="section-label">01 / Technology</p>

              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Technology built
                <br />
                <span className="text-white/30">around the game.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-white/50">
                POWER VC combines professional video workflows with
                intelligent technology to make sports review faster,
                clearer and more powerful.
              </p>

              <div className="mt-10 h-px w-full bg-white/10" />

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "AI Analysis",
                  "Live Review",
                  "Multi-Camera",
                  "4K Video",
                  "Cloud Ready",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="solutions"
        className="border-y border-white/5 bg-[#070b13] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">02 / Solutions</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                Everything you need.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/40">
              From live review to post-match analysis, POWER VC gives your
              team the tools to understand every moment.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group relative bg-[#070b13] p-8 transition duration-500 hover:bg-[#0b111c] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-cyan-400">
                    {feature.number}
                  </span>

                  <span className="text-xl text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-24 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {feature.description}
                </p>

                <div className="mt-10 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PLATFORM ================= */}
      <section id="platform" className="relative py-28 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          
          <div className="mb-14">
            <p className="section-label">03 / Platform</p>

            <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              Your entire review workflow.
              <span className="text-white/25"> One platform.</span>
            </h2>
          </div>

          {/* Software mockup */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#080d16] shadow-2xl">
            
            {/* Top bar */}
            <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>

              <div className="text-[9px] tracking-[0.25em] text-white/30">
                POWER VC / REVIEW SYSTEM
              </div>

              <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />
            </div>

            <div className="grid min-h-[500px] grid-cols-12">
              
              {/* Sidebar */}
              <div className="col-span-2 hidden border-r border-white/10 p-5 sm:block">
                <div className="space-y-4">
                  <div className="h-8 rounded-lg bg-cyan-400/10" />
                  <div className="h-8 rounded-lg bg-white/5" />
                  <div className="h-8 rounded-lg bg-white/5" />
                  <div className="h-8 rounded-lg bg-white/5" />
                  <div className="h-8 rounded-lg bg-white/5" />
                </div>
              </div>

              {/* Main video */}
              <div className="col-span-12 p-5 sm:col-span-10">
                <div className="grid gap-4 lg:grid-cols-[1.5fr_0.7fr]">
                  
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#101c2b] via-[#08111d] to-[#02050a]">
                    <div className="absolute inset-0 opacity-20 bg-grid" />

                    <div className="absolute left-6 top-6">
                      <span className="rounded bg-black/50 px-3 py-1 text-[9px] text-white/50">
                        LIVE REVIEW
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="mb-3 h-1 rounded-full bg-white/10">
                        <div className="h-full w-[62%] rounded-full bg-cyan-400" />
                      </div>

                      <div className="flex justify-between text-[9px] text-white/40">
                        <span>01:24:32</span>
                        <span>02:18:44</span>
                      </div>
                    </div>
                  </div>

                  {/* Events */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="mb-5 text-xs font-bold">
                      Match Events
                    </div>

                    <div className="space-y-3">
                      {[
                        "Attack",
                        "Block",
                        "Replay",
                        "Timeout",
                        "Point",
                      ].map((event, i) => (
                        <div
                          key={event}
                          className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-3"
                        >
                          <span className="text-[10px] text-white/50">
                            {event}
                          </span>
                          <span className="text-[9px] text-cyan-400">
                            0{i + 1}:24
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-4 rounded-xl border border-white/10 p-5">
                  <div className="mb-4 flex justify-between text-[9px] text-white/30">
                    <span>VIDEO TIMELINE</span>
                    <span>AI EVENTS: 128</span>
                  </div>

                  <div className="relative h-16 rounded-lg bg-white/[0.02]">
                    <div className="absolute left-[12%] top-5 h-5 w-1 rounded-full bg-cyan-400" />
                    <div className="absolute left-[27%] top-5 h-5 w-1 rounded-full bg-cyan-400" />
                    <div className="absolute left-[43%] top-5 h-5 w-1 rounded-full bg-cyan-400" />
                    <div className="absolute left-[61%] top-5 h-5 w-1 rounded-full bg-cyan-400" />
                    <div className="absolute left-[78%] top-5 h-5 w-1 rounded-full bg-cyan-400" />

                    <div className="absolute left-[35%] top-0 h-full w-px bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="px-5 pb-20 lg:px-10">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[#07131d] px-7 py-20 text-center sm:px-10 lg:py-28">
          
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">
            <p className="section-label justify-center">
              Ready when you are
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Take your game
              <br />
              <span className="text-cyan-400">to the next level.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-white/40">
              Let's build a smarter video review workflow for your team.
            </p>

            <a
              href="mailto:hello@powervc.net"
              className="mt-9 inline-flex rounded-full bg-cyan-400 px-8 py-4 text-sm font-bold text-black transition hover:bg-cyan-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]"
            >
              Start a conversation →
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 px-5 py-10 sm:flex-row lg:px-10">
          <div>
            <div className="text-lg font-black tracking-[0.15em]">
              POWER <span className="text-cyan-400">VC</span>
            </div>
            <p className="mt-2 text-xs text-white/30">
              Sports Review Systems
            </p>
          </div>

          <div className="flex items-center gap-7 text-xs text-white/35">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <span>© 2026 POWER VC</span>
          </div>
        </div>
      </footer>
    </main>
  );
}