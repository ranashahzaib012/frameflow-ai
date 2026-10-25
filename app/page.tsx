import Link from "next/link";

const featureCards = [
  "AI scene generation",
  "Character design library",
  "Video timeline editor",
  "Prompt-to-story workflow",
  "Multi-format exports",
  "Commercial-grade templates",
];

export default function HomePage() {
  return (
    <main className="landing-page">
      <header className="landing-header">
        <div className="brand-row">
          <div className="brand-badge">F</div>
          <span>FrameFlow AI</span>
        </div>

        <nav className="landing-nav">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/templates">Templates</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>

        <div className="header-cta">
          <button className="secondary-btn">Book Demo</button>
          <Link href="/studio" className="primary-btn">Launch Studio</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">AI Storyboard Workspace</span>
          <h1>Turn ideas into cinematic stories in minutes.</h1>
          <p>
            FrameFlow AI helps teams generate storyboards, scenes, characters, and polished media
            workflows from one creative workspace.
          </p>

          <div className="hero-actions">
            <Link href="/studio" className="primary-btn large">Start Creating</Link>
            <button className="secondary-btn large">Watch Demo</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>10x</strong>
              <span>Faster production</span>
            </div>
            <div>
              <strong>250+</strong>
              <span>Story templates</span>
            </div>
            <div>
              <strong>99.9%</strong>
              <span>Creative consistency</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-card glass-card">
            <div className="mini-header">
              <span className="dot blue" />
              <span className="dot orange" />
              <span className="dot green" />
            </div>
            <div className="mini-hero">
              <div className="scene-panel">
                <div className="scene-window" />
              </div>
            </div>
            <div className="mini-stats">
              <div className="stat-box" />
              <div className="stat-box" />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-band">
        {featureCards.map((feature) => (
          <div key={feature} className="feature-pill">{feature}</div>
        ))}
      </section>

      <section className="grid-section">
        <div className="section-copy">
          <span className="eyebrow">Why teams use FrameFlow</span>
          <h2>Creative workflows built for the AI age.</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Story-first ideation</h3>
            <p>Generate prompts, script structures, and narrative arcs from a single creative brief.</p>
          </div>
          <div className="feature-card">
            <h3>Asset-ready output</h3>
            <p>Manage characters, media, sound, scenes, and exports from one timeline-driven system.</p>
          </div>
          <div className="feature-card">
            <h3>Collaboration-ready</h3>
            <p>Organize scenes, compare versions, and move from concept to production faster.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
