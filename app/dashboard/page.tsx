import Link from "next/link";

const projects = [
  { name: "Product Launch", status: "In Review", tone: "Brand Story" },
  { name: "Creator Reel", status: "Draft", tone: "Short-form" },
  { name: "Training Video", status: "Ready", tone: "Explainer" },
  { name: "Community Story", status: "Queued", tone: "Narrative" },
];

export default function DashboardPage() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-badge">F</div>
          <div>
            <strong>FrameFlow</strong>
          </div>
        </div>

        <nav className="nav-list">
          <Link href="/dashboard" className="nav-item active">Dashboard</Link>
          <Link href="/studio" className="nav-item">Studio</Link>
          <Link href="/templates" className="nav-item">Templates</Link>
          <Link href="/characters" className="nav-item">Characters</Link>
          <Link href="/media" className="nav-item">Media</Link>
          <Link href="/settings" className="nav-item">Settings</Link>
        </nav>
      </aside>

      <main className="workspace-main dashboard-main">
        <header className="main-header">
          <div>
            <span className="muted-label">Workspace</span>
            <h1>Projects</h1>
          </div>
          <div className="header-actions">
            <button className="ghost-btn">History</button>
            <Link href="/studio" className="primary-btn">New Project</Link>
          </div>
        </header>

        <section className="dashboard-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-card glass-card">
              <div className="project-card-top">
                <span className="project-tag">{project.tone}</span>
                <span className="status-dot">{project.status}</span>
              </div>
              <h3>{project.name}</h3>
              <p>AI-generated storyboard and draft media pipeline ready for review.</p>
              <Link href="/studio" className="secondary-btn block-btn">Open Project</Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
